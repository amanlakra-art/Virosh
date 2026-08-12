import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Virosh product concept", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Virosh Daily Play \| Product Concept<\/title>/i);
  assert.match(html, /Same strong base/);
  assert.match(html, /25 g/);
  assert.match(html, /Creatine mono/);
  assert.match(html, /Dark Chocolate Sea Salt/);
  assert.match(html, /THE SYSTEM AT A GLANCE/);
  assert.match(html, /PROPOSED FORMULATION PANEL/);
  assert.match(html, /TWO FORMULATION ROUTES/);
  assert.match(html, /Active Base/);
  assert.match(html, /Core Base/);
  assert.match(html, /Without creatine/);
  assert.match(html, /440 mg elemental/);
  assert.match(html, /Magnesium bisglycinate/);
  assert.match(html, /17 mg elemental/);
  assert.match(html, /2.2 μg/);
  assert.match(html, /Cholecalciferol/);
  assert.doesNotMatch(html, /Algal DHA|Selenium|Vitamin B1\b|Vitamin B5\b|Vitamin B6\b|Vitamin B7\b|Vitamin B9\b|Vitamin C\b|Vitamin E\b/);
  assert.match(html, /Playable daily/);
  assert.match(html, /WORKING DIRECTION/);
  assert.match(html, /Same strong base/);
  assert.match(html, /Useful \+ playable/);
  assert.match(html, /Practical momentum/);
  assert.match(html, /Emotional invitation/);
  assert.match(html, /Celebrity proteins built around hype/);
  assert.doesNotMatch(html, /—|“|”/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});
