# Kinetic Editorial Product UI

## Intended use

Use this system for premium product concepts, innovation narratives, launch stories and stakeholder pages that need to make technical information feel energetic and approachable.

The system combines a disciplined information layer with one playful product interaction. It should feel editorial rather than like an ecommerce template, clinical dashboard or conventional supplement page.

## Design thesis

**Serious foundation. Playful interruption.**

The page earns trust through clear hierarchy, visible numbers, strong table design and explicit guardrails. Colour, oversized typography, pack illustrations and a single signature interaction stop that information from feeling medicinal.

## Type system

| Role | Typeface | Use |
|---|---|---|
| Display | Syne, 600 to 800 | Headlines, product names and expressive brand moments |
| Body | Manrope, 400 to 800 | Explanations, narrative copy, labels |
| Utility | IBM Plex Mono, 400 to 600 | Section numbers, metadata, proof points |

Rules:

- Display headlines are uppercase with controlled tracking around `-0.025em` and line height around `0.94` to `0.98`. Avoid ultra-tight spacing that closes counters or makes adjacent letters touch.
- Dense technical quantities use Manrope at 800 rather than the display face, so values remain easy to compare at a glance.
- Body text stays compact and conversational.
- Mono labels make the page feel like a considered system, not decoration.
- Avoid quotation styling unless the words are a verified quotation with a source.
- Avoid em dashes. Use a full stop, comma or colon.

## Colour roles

| Token | Example | Role |
|---|---|---|
| Paper | `#f5f7f2` | Main canvas |
| Ink | `#111a32` | Text, rules, dark sections |
| Cobalt | `#4967ff` | Practical energy and primary action |
| Coral | `#ff5474` | Emotional energy and contrast |
| Yellow | `#f5c844` | Optimism, decision moments and badges |
| Dynamic accent | Contextual | Flavour, variant or product-state colour |
| Dynamic soft accent | Contextual | Atmosphere, shadows and large fields |

Keep a strong ink colour across every theme. Accent colours may change, but contrast and information hierarchy should not.

## Page rhythm

1. **Compact navigation:** wordmark, three anchor links and one small status tag.
2. **Interactive hero:** one product object, one strong headline and one variant selector.
3. **Editorial still life:** a full-width image with copy placed in intentional negative space.
4. **Dark manifesto:** state the human problem before explaining the product.
5. **Ingredient or feature matrix:** use bordered cells, meaningful quantities and one symbol per item.
6. **Dense information table:** consolidate the full technical story in a scan-friendly format.
7. **Split persona field:** contrast two complementary motivations without assigning product variants by gender.
8. **Variant runway:** let each flavour, finish or product mode own a distinct colour field.
9. **Position and guardrails:** state what the concept is and what it refuses to become.
10. **Oversized closing lockup:** finish with brand memory, metadata and a restrained disclaimer.

## Signature interaction

The active variant changes three things together:

- The product-pack accent
- The surrounding atmosphere
- The short sensory caption

It does not change the core nutrition or technical promise. This makes the interaction meaningful to the concept rather than a visual gimmick.

For another project, replace flavour with any bounded state such as finish, material, mode, audience scenario or product configuration.

## Component rules

### Product stage

- Use one large circular field behind the object.
- Add one or two orbit lines or micro-labels to create motion.
- Keep the product illustration near the centre, with supporting objects allowed to break the circle.
- Use CSS geometry when a conceptual pack is more useful than a literal production render.

### Technical cards

- Put the dose or primary number near the bottom of each card.
- Keep the role statement short.
- Use borders instead of floating cards and generic shadows.
- Reserve the final full-width cell for the system-level takeaway.

### Technical table

- Lead with the serving basis.
- Keep the quantity column visually strongest.
- Separate component, amount and form or basis.
- Add one clear note explaining which values are targets and which are analytically confirmed.

### Persona split

- Use a strict 50:50 field on desktop.
- Give each side one motivational territory and three short attributes.
- Treat persona language as a design principle unless it is a sourced quotation.
- Join both sides with one shared product truth.

## Motion

- Use one slow ambient orbit animation.
- Variant changes should transition in 350 to 400 milliseconds.
- Hover movement should be small and purposeful.
- Respect `prefers-reduced-motion` and remove non-essential animation.

## Responsive behaviour

- Collapse the hero into copy followed by product stage.
- Keep the variant selector reachable by touch and allow horizontal overflow if required.
- Preserve two-column technical cards until narrow mobile widths.
- Turn the persona split and variant runway into a single column.
- Keep dense tables horizontally scrollable rather than compressing labels into illegibility.

## Reuse checklist

Replace these project-specific elements before using the system elsewhere:

- Wordmark and product name
- Hero promise and proof points
- Product-pack geometry or photography
- Dynamic accent palette
- Technical-card content
- Persona territories
- Variant names and sensory language
- Claims, guardrails and disclaimers

Preserve these structural qualities:

- One dominant idea per section
- Alternating light, dark and high-colour fields
- Strong numeric hierarchy
- Minimal rounded containers
- One signature interaction tied to the product logic
- Honest separation between concept targets and validated facts

## Source map

- `app/page.tsx` contains the reusable narrative sequence and interaction model.
- `app/globals.css` contains tokens, component styling, motion and responsive behaviour.
- `public/og.png` demonstrates the full-width still-life treatment and intentional text space.
