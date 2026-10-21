import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import { runInNewContext } from 'node:vm';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const script = (path) => read(path).match(/<script>([\s\S]*?)<\/script>/)[1]
  .replace(/^\s*import .*;$/gm, '');

test('contact and quote links emit once; messages are excluded', () => {
  const events = [];
  let click;
  class Element {
    constructor(href, dataset = {}) { this.href = href; this.dataset = dataset; }
    closest() { return this; }
    getAttribute() { return this.href; }
  }
  runInNewContext(stripTypeScriptTypes(script('src/components/AnalyticsEvents.astro')), {
    Element, URL,
    window: { location: { href: 'https://www.yigiter.com.tr/urunler/genc-boya/', origin: 'https://www.yigiter.com.tr', pathname: '/urunler/genc-boya/' } },
    document: { addEventListener: (_, handler) => { click = handler; } },
    trackConversion: (...args) => events.push(args),
  });
  click({ target: new Element('tel:+905333876756') });
  click({ target: new Element('https://wa.me/905333876756?text=private-message', { analyticsEvent: 'WhatsApp Click' }) });
  click({ target: new Element('/teklif-al?urun=Gen%C3%A7+Boya') });
  click({ target: new Element('/urunler/') });
  assert.deepEqual(events.map(([name]) => name), ['Phone Click', 'WhatsApp Click', 'Quote Click']);
  assert.equal(events[1][1].destination.includes('private-message'), false);
  assert.equal(events[2][1].page, '/urunler/genc-boya/');
});

test('analytics exceptions do not escape or block the other destination', () => {
  const events = [];
  const source = read('src/lib/analytics-events.ts').replace(/^import .*;$/gm, '').replace('export function', 'function');
  const context = {
    track: () => { throw new Error('unavailable'); },
    window: { clarity: (...args) => events.push(args) },
  };
  runInNewContext(`${stripTypeScriptTypes(source)}\ntrackConversion('Quote Submitted', {productGroup: 'Boya'});`, context);
  assert.equal(events[0][1], 'quote_submitted');
  context.window.clarity = () => { throw new Error('blocked'); };
  assert.doesNotThrow(() => runInNewContext(`${stripTypeScriptTypes(source)}\ntrackConversion('Quote Submitted');`, context));
});

for (const [label, ok, success, expected] of [
  ['success', true, true, 1], ['API rejection', true, false, 0], ['HTTP error', false, true, 0],
]) {
  test(`quote form: ${label}`, async () => {
    let submit;
    const events = [];
    const elements = new Map();
    const form = { addEventListener: (_, handler) => { submit = handler; } };
    elements.set('teklif-form', form);
    elements.set('submit-btn', { disabled: false });
    const location = { search: '?urun=Gen%C3%A7%20Boya%20100%25', pathname: '/teklif-al/', href: '' };
    runInNewContext(stripTypeScriptTypes(script('src/pages/teklif-al.astro')), {
      URLSearchParams, Date, Promise, alert: () => {},
      window: { location, setTimeout: (fn) => fn() },
      document: { getElementById: (id) => elements.get(id) ?? null },
      FormData: class { entries() { return [['product_group', 'Boya']]; } get() { return 'Boya'; } },
      fetch: async () => ({ ok, json: async () => ({ success }) }),
      trackConversion: (...args) => events.push(args), mapQuoteProductGroup: () => 'Boya',
    });
    await submit({ preventDefault() {} });
    assert.equal(events.length, expected);
    assert.equal(location.href, expected ? '/tesekkurler/' : '');
    if (!expected) assert.equal(elements.get('submit-btn').disabled, false);
  });
}
