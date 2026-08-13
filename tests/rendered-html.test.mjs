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
  assert.match(html, /220 mg elemental/);
  assert.match(html, /magnesium bisglycinate/i);
  assert.match(html, /non-buffered/i);
  assert.match(html, /8.5 mg elemental/);
  assert.match(html, /1.1 μg/);
  assert.match(html, /110 μg DFE/);
  assert.match(html, /L-5-methyltetrahydrofolate/i);
  assert.match(html, /L-methylfolate/i);
  assert.match(html, /2.5 g/);
  assert.match(html, /two scoops deliver 5 g/i);
  assert.match(html, /cholecalciferol/i);
  assert.match(html, /cyanocobalamin/i);
  assert.match(html, /stabilized, light-protected standardized dry premix/i);
  assert.match(html, /FOUNDATION STACK/i);
  assert.match(html, /UNFLAVOURED BLEND/i);
  assert.match(html, /WHAT WE LEFT OUT, ON PURPOSE/i);
  assert.match(html, /No report\. No release\./i);
  assert.match(html, /10-in-1 blend/i);
  assert.match(html, /finished-goods batch before release/i);
  assert.match(html, /Iron/);
  assert.match(html, /Omega-3 \/ DHA/);
  assert.match(html, /Zinc bisglycinate/);
  assert.match(html, /chelated zinc/);
  assert.match(html, /300 IU/);
  assert.match(html, /50% of the higher adult ICMR-NIN 2020 working reference per scoop/i);
  assert.match(html, /Two scoops reach the full working reference/i);
  assert.doesNotMatch(html, /Liposomal D3/);
  assert.doesNotMatch(html, /Algal DHA|Selenium|Vitamin B1\b|Vitamin B5\b|Vitamin B6\b|Vitamin B7\b|Vitamin C\b|Vitamin E\b/);
  assert.match(html, /Playable daily/);
  assert.match(html, /WORKING DIRECTION/);
  assert.match(html, /Same strong base/);
  assert.match(html, /Useful \+ playable/);
  assert.match(html, /PROOF BEFORE PROMISE/);
  assert.match(html, /Launch with two flavour shots/);
  assert.match(html, /quiet maintenance work/i);
  assert.match(html, /nutritional proof stands without the faces/i);
  assert.match(html, /Practical momentum/);
  assert.match(html, /Emotional invitation/);
  assert.match(html, /Collaborations that depend on face value/);
  assert.doesNotMatch(html, /—|“|”/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});
