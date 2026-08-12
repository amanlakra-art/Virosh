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

type FormulaMode = "with-creatine" | "without-creatine";

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

const commonEssentials = [
  { dose: "25 g", name: "Yeast protein", role: "Supplier-verified protein concentrate", mark: "P" },
  { dose: "4.5 g", name: "PHGG fibre", role: "Partially hydrolysed guar gum", mark: "F" },
  { dose: "600 IU", name: "Vitamin D3", role: "Microencapsulated D3 (Liposomal D3)", mark: "D" },
  { dose: "2.2 μg", name: "Vitamin B12", role: "Metabolically active methylcobalamin", mark: "B" },
  { dose: "440 mg", name: "Magnesium", role: "Non-buffered bisglycinate chelate", mark: "Mg" },
  { dose: "17 mg", name: "Zinc", role: "Zinc bisglycinate chelate", mark: "Zn" },
];

const commonFormulationRows = [
  { group: "Core blend", item: "Yeast protein", amount: "25 g", form: "Supplier-verified concentrate; amino-acid profile and digestibility to qualify" },
  { group: "Core blend", item: "Dietary fibre", amount: "4.5 g", form: "Partially hydrolysed guar gum (PHGG)" },
  { group: "Vitamins", item: "Vitamin D3", amount: "15 μg / 600 IU", form: "Microencapsulated cholecalciferol D3 with lipid carrier (Liposomal D3)" },
  { group: "Vitamins", item: "Vitamin B12", amount: "2.2 μg", form: "Methylcobalamin in a stabilized, light-protected standardized dry premix" },
  { group: "Minerals", item: "Magnesium", amount: "440 mg elemental", form: "Fully reacted, non-buffered magnesium bisglycinate chelate" },
  { group: "Minerals", item: "Zinc", amount: "17 mg elemental", form: "Zinc bisglycinate (chelated zinc)" },
];

const formulaVariants = {
  "with-creatine": {
    label: "Active Base",
    shortLabel: "With creatine",
    serving: "41–42 g",
    proof: "3 g",
    proofLabel: "creatine",
    rationale: "For a sharper performance position and stronger stack-collapse story.",
  },
  "without-creatine": {
    label: "Core Base",
    shortLabel: "Without creatine",
    serving: "38–39 g",
    proof: "0 g",
    proofLabel: "creatine",
    rationale: "For broader everyday use with the same protein, fibre and focused micronutrient stack.",
  },
} satisfies Record<FormulaMode, { label: string; shortLabel: string; serving: string; proof: string; proofLabel: string; rationale: string }>;

const shots = flavours.slice(1);

export default function Home() {
  const [activeId, setActiveId] = useState("mango");
  const [formulaMode, setFormulaMode] = useState<FormulaMode>("with-creatine");
  const active = flavours.find((flavour) => flavour.id === activeId) ?? flavours[0];
  const formula = formulaVariants[formulaMode];
  const hasCreatine = formulaMode === "with-creatine";
  const essentials = hasCreatine
    ? [commonEssentials[0], { dose: "3 g", name: "Creatine mono", role: "Micronized creatine monohydrate", mark: "C" }, ...commonEssentials.slice(1)]
    : commonEssentials;
  const formulationRows = hasCreatine
    ? [commonFormulationRows[0], { group: "Core blend", item: "Creatine", amount: "3 g", form: "Micronized creatine monohydrate" }, ...commonFormulationRows.slice(1)]
    : commonFormulationRows;

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
        <span className="concept-tag">NPD concept · v2</span>
      </nav>

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span>Daily essentials</span><i /> <span>Made playable</span></div>
          <h1>Same strong base.<br /><em>Pick your play.</em></h1>
          <p className="hero-lead">
            A serious yeast-protein blend with fibre and four focused micronutrients. Choose the base with or without creatine, then finish it differently whenever the mood changes.
          </p>
          <div className="hero-proof">
            <div><strong>25 g</strong><span>protein</span></div>
            <div><strong>{formula.proof}</strong><span>{formula.proofLabel}</span></div>
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
            {['Protein tub', 'Creatine jar', 'Fibre pack', 'Vitamin D3', 'Vitamin B12', 'Magnesium + zinc'].map((item, index) => (
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
        <div className="formula-selector" aria-label="Compare proposed formulations">
          <div>
            <span>TWO FORMULATION ROUTES</span>
            <p>Creatine is the only difference. Every other delivered target stays matched.</p>
          </div>
          <div className="formula-selector-buttons" role="group" aria-label="Select a proposed formulation">
            {(Object.keys(formulaVariants) as FormulaMode[]).map((mode) => (
              <button
                key={mode}
                className={formulaMode === mode ? "active" : ""}
                onClick={() => setFormulaMode(mode)}
                aria-pressed={formulaMode === mode}
              >
                <span>{formulaVariants[mode].label}</span>
                <b>{formulaVariants[mode].shortLabel}</b>
              </button>
            ))}
          </div>
          <p className="formula-selector-rationale" aria-live="polite"><b>{formula.label}:</b> {formula.rationale}</p>
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
            <span>D3 · B12 · MAGNESIUM · ZINC</span>
            <strong>{formula.label}. One clean stack.</strong>
            <p>Target base serving: {formula.serving} before a flavour shot.</p>
          </article>
        </div>
        <div className="ni-panel">
          <div className="ni-title">
            <div>
              <span>PROPOSED FORMULATION PANEL</span>
              <h3>{formula.label} formulation</h3>
            </div>
            <p>Target base serving<br /><strong>{formula.serving}</strong></p>
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
            <span>FORM QUALITY</span>
            <p>Preferred high-availability development forms are named explicitly. "Liposomal D3" is a working descriptor and must be supported by the selected supplier's actual liposomal delivery technology. All forms still require supplier qualification, exact chemical identity, assay, stability, sensory testing and confirmation of the applicable Indian regulatory route. *Targets use the higher adult ICMR-NIN 2020 reference; final %RDA and label population require regulatory sign-off.</p>
          </div>
        </div>
        <div className="formula-note">
          <span>FORMULATION PRINCIPLE</span>
          <p>{hasCreatine ? "Creatine lives in the Active Base, never in the shot, so the full 3 g dose lands reliably every time." : "The Core Base keeps the same protein, fibre and micronutrient promise without creatine for a broader everyday proposition."}</p>
        </div>
      </section>

      <section className="one-decision section-pad">
        <div className="decision-left">
          <p className="section-no">03 / THE BEHAVIOUR SHIFT</p>
          <h2>One decision.<br /><span>Not six.</span></h2>
        </div>
        <div className="decision-path" aria-label="Six products simplified into one base and one optional flavour shot">
          <div className="old-stack">
            {['PRO', 'CRE', 'FIB', 'D3', 'B12', 'MIN'].map((label, index) => <div key={label} className={`mini-pack mini-pack-${index + 1}`}>{label}</div>)}
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

      <section className="positioning section-pad" id="positioning">
        <div className="positioning-intro">
          <div>
            <p className="section-no">06 / THE POSITIONING SYSTEM</p>
            <span className="position-status">WORKING DIRECTION</span>
          </div>
          <div className="positioning-lockup">
            <span>THE TERRITORY</span>
            <h2>Playable daily<br /><em>nutrition.</em></h2>
          </div>
          <p className="positioning-summary">Serious daily performance nutrition, made easier to return to through flavour choice.</p>
        </div>

        <div className="position-statement" aria-label="Proposed positioning statement">
          <div><span>FOR</span><p>Active adults 28 to 35 balancing work, movement and real life.</p></div>
          <div><span>VIROSH IS</span><p>A yeast-protein daily essentials system with one dependable base and optional flavour shots.</p></div>
          <div><span>THAT DELIVERS</span><p>Useful performance nutrition without the friction of managing a multi-product stack.</p></div>
          <div><span>UNLIKE</span><p>Celebrity proteins built around hype, fixed flavours or bodybuilding theatre.</p></div>
          <div><span>BECAUSE</span><p>The nutrition stays consistent while the experience can change with the day.</p></div>
        </div>

        <div className="position-promise">
          <span>THE CONSUMER PROMISE</span>
          <h3>Same strong base.<br /><em>Pick your play.</em></h3>
          <p>Daily strength made easier to return to.</p>
        </div>

        <div className="position-pillars">
          <article>
            <span>01 / FUNCTIONAL</span>
            <h3>Strong base</h3>
            <p>25 g protein, optional 3 g creatine, fibre and four focused micronutrients at provisional 100% RDA targets.</p>
          </article>
          <article>
            <span>02 / BEHAVIOURAL</span>
            <h3>Easy return</h3>
            <p>One repeatable daily action that reduces stack friction and welcomes restarting.</p>
          </article>
          <article>
            <span>03 / EMOTIONAL</span>
            <h3>Personal play</h3>
            <p>Original plus four flavour shots make the ritual feel chosen without changing the promise.</p>
          </article>
        </div>

        <div className="position-frame">
          <div className="position-frame-title">
            <span>COMPETITIVE FRAME</span>
            <p>Virosh sits between functional credibility and enjoyable repeat use.</p>
          </div>
          <div className="frame-grid">
            <article><span>FIXED-FLAVOUR PROTEIN</span><strong>Performance</strong><p>Useful, but repetitive and usually coded around training.</p></article>
            <article><span>MULTIVITAMIN</span><strong>Daily habit</strong><p>Convenient, but separated from protein and the sensory ritual.</p></article>
            <article><span>FLAVOUR NOVELTY</span><strong>Fun</strong><p>Engaging, but often without a strong nutritional foundation.</p></article>
            <article className="frame-virosh"><span>VIROSH</span><strong>Useful + playable</strong><p>A serious base with choice built into the return path.</p></article>
          </div>
        </div>

        <div className="partner-roles">
          <article><span>VIJAY</span><strong>Practical momentum</strong><p>Clarity, drive and proof.</p></article>
          <article><span>RASHMIKA</span><strong>Emotional invitation</strong><p>Warmth, delight and return.</p></article>
          <article><span>VIROSH</span><strong>The shared territory</strong><p>Wellness that works hard without acting serious.</p></article>
        </div>

        <div className="position-boundary">
          <span>WHAT IT REFUSES</span>
          <p>No macho codes, medicalised clutter, guilt, perfection language or empty mega-claims.</p>
        </div>
      </section>

      <section className="guardrails section-pad">
        <div>
          <p className="section-no">07 / READY FOR DEVELOPMENT</p>
          <h2>A bold concept.<br /><em>A disciplined next step.</em></h2>
        </div>
        <div className="guardrail-list">
          <div><span>01</span><p><b>Protein truth</b>Verify yeast protein with an amino-acid cross-check, not nitrogen alone.</p></div>
          <div><span>02</span><p><b>RDA truth</b>Reconcile the adult reference, target population and final declared values before label lock.</p></div>
          <div><span>03</span><p><b>Form truth</b>Confirm every supplier form, assay and India-specific regulatory route before pilot purchase.</p></div>
          <div><span>04</span><p><b>Sensory truth</b>Prove that 440 mg elemental magnesium remains pleasant, dispersible and tolerable in Original.</p></div>
        </div>
      </section>

      <footer className="footer section-pad">
        <div className="footer-lockup"><span>VIROSH</span><strong>DAILY PLAY</strong></div>
        <p>Serious nutrition.<br />Zero serious-face required.</p>
        <div className="footer-meta"><span>CONCEPT DIRECTION</span><span>AUG 2026</span><span>ADULTS 18+</span></div>
        <p className="footnote">*Zero added sugar and 100% RDA values are development targets, subject to final formulation, raw-material assay, target-population review, laboratory verification and applicable Indian regulations. This page is an NPD concept, not final consumer communication.</p>
      </footer>
    </main>
  );
}
