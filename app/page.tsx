"use client";

import { useState } from "react";

type Flavour = {
  id: string;
  short: string;
  name: string;
  note: string;
  accent: string;
  accentSoft: string;
  ink: string;
};

const flavours: Flavour[] = [
  {
    id: "original",
    short: "OG",
    name: "Pleasant Original",
    note: "Clean, easy, quietly creamy",
    accent: "#4967ff",
    accentSoft: "#dce3ff",
    ink: "#f7f9ff",
  },
  {
    id: "chocolate",
    short: "01",
    name: "Dark Chocolate Sea Salt",
    note: "Deep cocoa · bright finish",
    accent: "#8b4f38",
    accentSoft: "#e8c8b9",
    ink: "#fff7f1",
  },
  {
    id: "coffee",
    short: "02",
    name: "Filter Coffee Caramel",
    note: "Roasty · smooth · grown-up",
    accent: "#bd6b2d",
    accentSoft: "#f3d0a7",
    ink: "#fff9ef",
  },
  {
    id: "mango",
    short: "03",
    name: "Mango Lassi Flavour",
    note: "Juicy mango · cultured tang",
    accent: "#f5a800",
    accentSoft: "#ffe38a",
    ink: "#19170f",
  },
  {
    id: "kulfi",
    short: "04",
    name: "Kesar Pista Kulfi Flavour",
    note: "Saffron warmth · nutty illusion",
    accent: "#7fb858",
    accentSoft: "#d8efb7",
    ink: "#13210e",
  },
];

const essentials = [
  { dose: "25 g", name: "Yeast protein", role: "Daily protein foundation", mark: "P" },
  { dose: "3 g", name: "Creatine mono", role: "Practical performance support", mark: "C" },
  { dose: "4.5 g", name: "PHGG fibre", role: "Gentle daily fibre", mark: "F" },
  { dose: "200 mg", name: "Algal DHA", role: "Plant-sourced omega-3", mark: "Ω" },
  { dose: "600 IU", name: "Vitamin D3", role: "A critical daily essential", mark: "D" },
  { dose: "2.5 μg", name: "Vitamin B12", role: "Everyday micronutrient support", mark: "B" },
  { dose: "120 mg", name: "Magnesium", role: "Meaningful mineral dose", mark: "Mg" },
  { dose: "8.5 mg", name: "Zinc", role: "Daily mineral support", mark: "Zn" },
];

const formulationRows = [
  { group: "Core blend", item: "Yeast protein", amount: "25 g", form: "Verified protein contribution" },
  { group: "Core blend", item: "Creatine", amount: "3 g", form: "Creatine monohydrate" },
  { group: "Core blend", item: "Dietary fibre", amount: "4.5 g", form: "PHGG" },
  { group: "Core blend", item: "Omega-3 DHA", amount: "200 mg", form: "Algal DHA" },
  { group: "Vitamins", item: "Vitamin D3", amount: "15 μg / 600 IU", form: "Vitamin D3" },
  { group: "Vitamins", item: "Vitamin B1", amount: "1.4 mg", form: "Thiamine" },
  { group: "Vitamins", item: "Vitamin B5", amount: "5 mg", form: "Pantothenic acid" },
  { group: "Vitamins", item: "Vitamin B7", amount: "40 μg", form: "Biotin" },
  { group: "Vitamins", item: "Vitamin B9", amount: "300 μg", form: "Folate" },
  { group: "Vitamins", item: "Vitamin B12", amount: "2.5 μg", form: "Vitamin B12" },
  { group: "Vitamins", item: "Vitamin B6", amount: "1.9 mg", form: "Vitamin B6" },
  { group: "Vitamins", item: "Vitamin C", amount: "40 mg", form: "Ascorbic acid equivalent" },
  { group: "Vitamins", item: "Vitamin E", amount: "5 mg", form: "Alpha-tocopherol equivalent" },
  { group: "Minerals", item: "Magnesium", amount: "120 mg", form: "Elemental magnesium" },
  { group: "Minerals", item: "Zinc", amount: "8.5 mg", form: "Elemental zinc" },
  { group: "Minerals", item: "Selenium", amount: "20 μg", form: "Total after native assay" },
];

const shots = flavours.slice(1);

export default function Home() {
  const [activeId, setActiveId] = useState("mango");
  const active = flavours.find((flavour) => flavour.id === activeId) ?? flavours[0];

  return (
    <main
      className="site-shell"
      style={
        {
          "--accent": active.accent,
          "--accent-soft": active.accentSoft,
          "--accent-ink": active.ink,
        } as React.CSSProperties
      }
    >
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Virosh Daily Play home">
          VIROSH<span className="wordmark-dot">●</span>
        </a>
        <div className="nav-links">
          <a href="#formula">Formula</a>
          <a href="#people">People</a>
          <a href="#flavours">Flavours</a>
        </div>
        <span className="concept-tag">NPD concept · v1</span>
      </nav>

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span>Daily essentials</span><i /> <span>Made playable</span></div>
          <h1>Same strong base.<br /><em>Pick your play.</em></h1>
          <p className="hero-lead">
            A serious yeast-protein blend with creatine, fibre, omega-3 and critical vitamins & minerals. Finish it differently whenever the mood changes.
          </p>
          <div className="hero-proof">
            <div><strong>25 g</strong><span>protein</span></div>
            <div><strong>3 g</strong><span>creatine</span></div>
            <div><strong>0 g</strong><span>added sugar*</span></div>
          </div>
          <a className="text-link" href="#formula">Explore the base <span aria-hidden="true">↓</span></a>
        </div>

        <div className="playground" aria-label={`Product preview in ${active.name}`}>
          <div className="playground-glow" />
          <span className="orbit-copy orbit-copy-top">THE BASE STAYS TRUE</span>
          <span className="orbit-copy orbit-copy-bottom">THE FLAVOUR MOVES</span>
          <div className="scoop scoop-one" /><div className="scoop scoop-two" /><div className="scoop scoop-three" />
          <div className="tub-wrap">
            <div className="tub-lid" />
            <div className="tub">
              <span className="tub-topline">YEAST PROTEIN + DAILY ESSENTIALS</span>
              <span className="tub-brand">VIROSH</span>
              <span className="tub-product">DAILY<br />PLAY</span>
              <span className="tub-flavour">{active.name}</span>
              <div className="tub-wave" />
              <span className="tub-bottom">30 DAY BASE · 1 DAILY SCOOP</span>
            </div>
          </div>
          <div className="shot shot-a"><span>POUR</span></div>
          <div className="shot shot-b"><span>PLAY</span></div>
          <div className="active-caption" aria-live="polite">
            <b>{active.short}</b><span>{active.note}</span>
          </div>
        </div>

        <div className="flavour-switcher" role="group" aria-label="Preview a flavour">
          {flavours.map((flavour) => (
            <button
              key={flavour.id}
              className={activeId === flavour.id ? "flavour-button active" : "flavour-button"}
              onClick={() => setActiveId(flavour.id)}
              aria-pressed={activeId === flavour.id}
              style={{ "--swatch": flavour.accent } as React.CSSProperties}
            >
              <i /><span>{flavour.id === "original" ? "Original" : flavour.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="campaign-still" aria-label="Virosh Daily Play pack and four flavour shots">
        <div className="still-copy">
          <p className="section-no">THE SYSTEM AT A GLANCE</p>
          <h2>One base.<br /><span>Four moods.</span></h2>
          <p>Chocolate. Coffee. Mango. Kulfi.<br />The nutrition stays put. The day gets a choice.</p>
        </div>
        <div className="still-caption"><span>CONCEPT PACK VISUAL</span><b>BASE + OPTIONAL SHOTS</b></div>
      </section>

      <section className="belief section-pad">
        <p className="section-no">01 / THE OPPORTUNITY</p>
        <div className="belief-grid">
          <h2>Daily nutrition<br />without the<br /><span>supplement tax.</span></h2>
          <div className="belief-copy">
            <p className="large-copy">People do not need more discipline. They need a better-designed return path.</p>
            <p>Virosh turns a crowded daily stack into one dependable base and makes repetition feel fresh through flavour, without changing the nutrition.</p>
          </div>
          <div className="tax-receipt">
            <span className="receipt-label">THE OLD ROUTINE</span>
            {['Protein tub', 'Creatine jar', 'Fibre pack', 'Omega-3', 'Vitamin D3', 'B12 + minerals'].map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}<b>+</b></div>
            ))}
            <p><span>TOTAL</span><strong>TOO MUCH FRICTION</strong></p>
          </div>
        </div>
      </section>

      <section className="formula section-pad" id="formula">
        <div className="section-heading">
          <p className="section-no">02 / THE STRONG BASE</p>
          <h2>Built to earn<br />its place <em>daily.</em></h2>
          <p>Every serving starts identical. Effective-dose thinking up front; sensory and regulatory validation before commercial lock.</p>
        </div>
        <div className="formula-grid">
          {essentials.map((item, index) => (
            <article className="formula-card" key={item.name}>
              <span className="formula-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="ingredient-mark">{item.mark}</div>
              <strong>{item.dose}</strong>
              <h3>{item.name}</h3>
              <p>{item.role}</p>
            </article>
          ))}
          <article className="formula-card formula-card-end">
            <span>+ B1 · B5 · B6 · B7 · B9 · C · E · selenium</span>
            <strong>One honest scoop.</strong>
            <p>Target base serving: 39.5–40.5 g before a flavour shot.</p>
          </article>
        </div>
        <div className="ni-panel">
          <div className="ni-title">
            <div>
              <span>PROPOSED FORMULATION PANEL</span>
              <h3>One daily base serving</h3>
            </div>
            <p>Target base serving<br /><strong>39.5–40.5 g</strong></p>
          </div>
          <div className="ni-table-wrap">
            <table className="ni-table">
              <thead>
                <tr>
                  <th scope="col">Component</th>
                  <th scope="col">Target per serving</th>
                  <th scope="col">Form / basis</th>
                </tr>
              </thead>
              <tbody>
                {formulationRows.map((row, index) => (
                  <tr key={row.item}>
                    <th scope="row"><span>{String(index + 1).padStart(2, "0")}</span><b>{row.item}</b><i>{row.group}</i></th>
                    <td>{row.amount}</td>
                    <td>{row.form}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ni-disclaimer">
            <span>READ THIS AS</span>
            <p>A formulation target for prototype development. Energy, carbohydrate, sugars, fat, sodium, final %RDA and statutory panel values follow pilot analysis and regulatory classification.</p>
          </div>
        </div>
        <div className="formula-note">
          <span>FORMULATION PRINCIPLE</span>
          <p>Creatine lives in the base, never in the shot, so the full 3 g dose lands reliably every time.</p>
        </div>
      </section>

      <section className="one-decision section-pad">
        <div className="decision-left">
          <p className="section-no">03 / THE BEHAVIOUR SHIFT</p>
          <h2>One decision.<br /><span>Not six.</span></h2>
        </div>
        <div className="decision-path" aria-label="Six products simplified into one base and one optional flavour shot">
          <div className="old-stack">
            {['PRO', 'CRE', 'FIB', 'D3', 'B12', 'DHA'].map((label, index) => <div key={label} className={`mini-pack mini-pack-${index + 1}`}>{label}</div>)}
          </div>
          <div className="collapse-arrow"><span>COLLAPSE<br />THE STACK</span><i>→</i></div>
          <div className="new-stack">
            <div className="mini-tub"><span>VIROSH</span><b>DAILY<br />PLAY</b></div>
            <span className="plus">+</span>
            <div className="mini-shot"><span>YOUR<br />MOOD</span></div>
          </div>
        </div>
        <p className="decision-caption">The base removes practical friction. The shot gives the ritual emotional range.</p>
      </section>

      <section className="people section-pad" id="people">
        <div className="section-heading people-heading">
          <p className="section-no">04 / THE PEOPLE</p>
          <h2>Head meets heart.<br /><em>Both keep moving.</em></h2>
        </div>
        <div className="people-grid">
          <article className="persona persona-heart">
            <div className="persona-top"><span>R / 01</span><b>FEELING</b></div>
            <div className="portrait-disc"><span>RM</span><i>♥</i></div>
            <p className="persona-role">Rashmika brings the emotional invitation</p>
            <h3>A ritual that feels chosen, warm and easy to return to.</h3>
            <div className="persona-tags"><span>Warmth</span><span>Delight</span><span>Return</span></div>
          </article>
          <article className="persona persona-drive">
            <div className="persona-top"><span>V / 02</span><b>DOING</b></div>
            <div className="portrait-disc"><span>VD</span><i>↗</i></div>
            <p className="persona-role">Vijay brings the practical momentum</p>
            <h3>Useful daily nutrition in one move, then on with the day.</h3>
            <div className="persona-tags"><span>Clarity</span><span>Drive</span><span>Proof</span></div>
          </article>
          <article className="persona-bridge">
            <span>THE SHARED TERRITORY</span>
            <h3>Wellness that works hard<br />without acting serious.</h3>
            <p>Two energies. One product truth. Neither partner overwhelms the brand.</p>
          </article>
        </div>
        <div className="audience-strip">
          <span>PRIMARY AUDIENCE</span><strong>Active adults 28 to 35</strong><p>For people balancing work, movement and real life, without elite-athlete theatre.</p>
        </div>
      </section>

      <section className="flavour-world section-pad" id="flavours">
        <div className="section-heading flavour-heading">
          <p className="section-no">05 / THE PLAY SYSTEM</p>
          <h2>Four ways to<br />change the <em>feeling.</em></h2>
          <p>The shots carry flavour only. The nutritional promise stays in the base.</p>
        </div>
        <div className="shot-grid">
          {shots.map((shot, index) => (
            <button
              className="shot-card"
              key={shot.id}
              onClick={() => { setActiveId(shot.id); document.getElementById("top")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{ "--card-accent": shot.accent, "--card-soft": shot.accentSoft } as React.CSSProperties}
              aria-label={`Preview ${shot.name}`}
            >
              <span className="shot-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="sachet"><span>VIROSH</span><b>{shot.name}</b><i>FLAVOUR SHOT</i></div>
              <h3>{shot.name}</h3>
              <p>{shot.note}</p>
              <span className="shot-action">PLAY THIS ONE ↗</span>
            </button>
          ))}
        </div>
        <div className="pack-equation">
          <div><strong>30</strong><span>base servings</span></div><i>+</i>
          <div><strong>24</strong><span>flavour shots</span></div><i>+</i>
          <div><strong>6</strong><span>Original days</span></div><i>=</i>
          <div className="equation-answer"><strong>30</strong><span>days of choice</span></div>
        </div>
      </section>

      <section className="positioning section-pad">
        <p className="section-no">06 / THE POSITION</p>
        <div className="positioning-title">
          <h2>Not another<br />celebrity protein.</h2>
          <p>A modern daily-nutrition system with celebrity energy around it, without celebrity dependence at its centre.</p>
        </div>
        <div className="position-grid">
          <article><span>IT IS</span><h3>Useful</h3><p>Visible doses, practical ingredients, one clear daily behaviour.</p></article>
          <article><span>IT IS</span><h3>Playful</h3><p>Flavour changes the experience without moving the goalposts.</p></article>
          <article><span>IT IS</span><h3>Human</h3><p>No fear, guilt, perfection or fix-yourself wellness language.</p></article>
          <article className="not-card"><span>IT ISN’T</span><h3>Protein theatre</h3><p>No macho codes, medicalised clutter or empty mega-claims.</p></article>
        </div>
      </section>

      <section className="guardrails section-pad">
        <div>
          <p className="section-no">07 / READY FOR DEVELOPMENT</p>
          <h2>A bold concept.<br /><em>A disciplined next step.</em></h2>
        </div>
        <div className="guardrail-list">
          <div><span>01</span><p><b>Protein truth</b>Verify yeast protein with an amino-acid cross-check, not nitrogen alone.</p></div>
          <div><span>02</span><p><b>Sensory truth</b>Protect Original first; screen all four shots in the real base.</p></div>
          <div><span>03</span><p><b>Stability truth</b>Validate DHA oxidation, vitamin overages and end-of-life potency.</p></div>
          <div><span>04</span><p><b>Claim truth</b>Confirm India-specific ingredient permissions and final label language.</p></div>
        </div>
      </section>

      <footer className="footer section-pad">
        <div className="footer-lockup"><span>VIROSH</span><strong>DAILY PLAY</strong></div>
        <p>Serious nutrition.<br />Zero serious-face required.</p>
        <div className="footer-meta"><span>CONCEPT DIRECTION</span><span>AUG 2026</span><span>ADULTS 18+</span></div>
        <p className="footnote">*Zero added sugar is a development target, subject to final formulation, laboratory verification and applicable Indian regulations. This page is an NPD concept, not final consumer communication.</p>
      </footer>
    </main>
  );
}
