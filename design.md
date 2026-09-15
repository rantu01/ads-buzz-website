# Agency Ad Accounts | Unlimited Spend + Support | Uproas — Style Reference
> Extracted 2026-09-15 from https://www.uproas.io/#pricing-section-new

**Theme:** dark

Agency Ad Accounts | Unlimited Spend + Support | Uproas (www.uproas.io) reads as a dark, layered interface built on a Inter/Arial type pairing. Structurally it relies on fully-rounded pill shapes as its signature geometry, and soft shadows lift key surfaces off the canvas — while brand accent (#5f57ff) carries the interactive energy. Motion is measured and smooth, averaging 275ms on interactive transitions. Typography runs from 22px up to 48px across 8 steps, and the spacing system sits on a 8-unit base with 20px container padding.

## Contents

- [Tokens — Colors](#tokens-colors)
- [Tokens — Typography](#tokens-typography)
- [Iconography](#iconography)
- [Tokens — Spacing & Shapes](#tokens-spacing-shapes)
- [Effects & Treatments](#effects-treatments)
- [Tokens — Motion](#tokens-motion)
- [Design Token System](#design-token-system)
- [Scroll & Reveal Motion](#scroll-reveal-motion)
- [Micro-interactions](#micro-interactions)
- [Component State Matrix](#component-state-matrix)
- [Overlays & Portals](#overlays-portals)
- [Components](#components)
- [Component Census](#component-census)
- [Component API Sketch](#component-api-sketch)
- [Do's and Don'ts](#dos-and-donts)
- [Surfaces](#surfaces)
- [Elevation](#elevation)
- [Imagery](#imagery)
- [Assets & Media](#assets-media)
- [Layout](#layout)
- [Page Blueprint](#page-blueprint)
- [Grid & Composition](#grid-composition)
- [Landing Page Anatomy](#landing-page-anatomy)
- [Hero & Conversion](#hero-conversion)
- [Signature Devices](#signature-devices)
- [Content & Copy](#content-copy)
- [Accessibility Profile](#accessibility-profile)
- [Responsive](#responsive)
- [Responsive Behaviour](#responsive-behaviour)
- [Agent Prompt Guide](#agent-prompt-guide)
- [Quick Start](#quick-start)
- [Rebuild Checklist](#rebuild-checklist)
- [Extraction Coverage](#extraction-coverage)
- [Known Gaps](#known-gaps)

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Canvas | `#040719` | `--color-bg-canvas` | Page background — the base layer every other surface floats on · 1.27% of usage |
| Primary Text | `#ffffff` | `--color-text-primary` | Primary copy, headings, high-emphasis UI labels — 20.0:1 against canvas · 78.63% of usage |
| Secondary Text | `#999999` | `--color-text-secondary` | Supporting copy and descriptions — 7.0:1 against canvas · 5.95% of usage |
| Muted Text | `#ffffffcc` | `--color-text-muted` | Captions, placeholders, low-emphasis meta — 20.0:1 against canvas · 2.68% of usage |
| Brand Accent | `#5f57ff` | `--color-accent` | Primary interactive color — buttons, links, key fills carry the brand energy · 1.83% of usage |
| Surface | `#000111` | `--color-bg-surface` | Elevated container fill — cards, nav bars, panels sitting on the canvas · 1.02% of usage |
| Border | `#ffffff1f` | `--color-border` | Hairline separators and card outlines · 3.29% of usage |
| Gray Near-black | `#000000` | `--color-gray-deep` | Supporting text or icon color · 1.8% of usage |
| Blue Dark | `#0788f5` | `--color-blue-dark` | Supporting text or icon color · 1.36% of usage |
| Blue Near-black | `#0a132b` | `--color-blue-deep` | Supporting surface / fill color · 0.68% of usage |
| Blue Dark | `#7061fb` | `--color-blue-dark` | Supporting text or icon color · 0.44% of usage |
| Green Dark | `#14701b` | `--color-green-dark` | Supporting text or icon color · 0.39% of usage |

**Gradients in use:**
- `linear-gradient(rgb(255, 255, 255), rgb(153, 160, 174))` (12 uses)
- `linear-gradient(rgba(96, 174, 255, 0.12), rgb(96, 174, 255))` (12 uses)
- `linear-gradient(rgb(13, 21, 46), rgb(20, 33, 62))` (10 uses)

## Tokens — Typography

### Inter — display+body family
- **Weights:** 400, 500, 600, 700
- **Sizes:** 48px, 46px, 42px, 38px, 32px, 30px, 24px, 22px
- **Role:** Workhorse family — used for both display headlines and body/UI text across weights 400/500/600/700.

### Arial — supporting family
- **Weights:** 400
- **Sizes:** 16px, 13px
- **Role:** Supporting family for accents and specialized text.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Weight | Family |
|------|------|-------------|----------------|--------|--------|
| display | 48px | 1.25 | — | 600 | Inter |
| heading-lg | 46px | 1.15 | -1px | 600 | Inter |
| heading | 42px | 1.15 | -1px | 600 | Inter |
| heading-sm | 38px | 1.25 | — | 600 | Inter |
| subheading | 32px | 1.25 | -0.3px | 600 | Inter |
| body | 30px | 1.3 | — | 500 | Inter |
| small | 24px | 1.3 | — | 600 | Inter |
| caption | 22px | 1.3 | — | 500 | Inter |

## Iconography

- **Style:** filled, 1.6px strokes
- **Size scale:** 16 / 20 / 24px (148 icons measured)
- **Delivery:** inline SVG
- **Illustration:** 56 larger vector graphics present (spot/ambient illustration is part of the language)

## Tokens — Spacing & Shapes

**Density:** compact

### Border Radius

| Context | Value | Usage |
|---------|-------|-------|
| other | 1px | 298 elements |
| tag | 4px | 76 elements |
| card | 16px | 73 elements |
| image | 50px | 41 elements |
| button | 8px | 29 elements |
| input | 12px | 4 elements |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgb(136, 136, 136) 0px 0px 1px 0px` | `--shadow-sm` |
| md | `rgba(96, 174, 255, 0.16) 0px -5.48px 8px 0px inset, rgba(96, 174, 255, 0.16) 0px 2.61px 2.61px 0px inset` | `--shadow-md` |
| lg | `rgba(14, 18, 27, 0.5) 0px 2px 4px 0px` | `--shadow-lg` |
| xl | `rgba(0, 0, 0, 0.02) 0px 1px 1px 1px` | `--shadow-xl` |
| shadow-4 | `rgba(0, 0, 0, 0.25) 0px 4px 16px 0px` | `--shadow-4` |

### Layout

- **Page max-width:** 1340px
- **Section gap:** not detected
- **Card padding:** 20px
- **Element gap:** 8px
- **Spacing base unit:** 8px

## Effects & Treatments

- **Glassmorphism:** `backdrop-filter: blur(5px)` (3 surfaces) — frosted translucent panels
- **Gradients:** linear ×77, radial ×1
- **Masks & shapes:** 6 masked elements, 26 clip-paths
- **Blend modes:** lighten ×5, background-normal, normal, normal ×1 (duotone/tinting treatment)
- **Filters:** 7 filtered elements

## Tokens — Motion

### Duration scale

| Token | Value | Use |
|-------|-------|-----|
| `--duration-fast` | 200ms | hover/color transitions (6 observed) |
| `--duration-base` | 300ms | default UI transitions (5 observed) |
| `--duration-moderate` | 600ms | panels, accordions, toasts (2 observed) |
| `--duration-slow` | 2000ms | hero reveals, page-level (1 observed) |

### Easing

| Token | Value | Character |
|-------|-------|-----------|
| `--ease-custom-1` | `ease` | used 134× |
| `--ease-custom-2` | `cubic-bezier(0.01, 0.81, 0.80, 1.01)` | used 6× |
| `--ease-custom-3` | `cubic-bezier(0.34, 1.56, 0.64, 1.00)` | used 6× |
| `--ease-custom-4` | `linear` | used 1× |

### Animation recipes (paste-ready)

```css
/* BigControls__pulse — trigger: on load; 2000ms linear, infinite */
@keyframes bigcontrols--pulse {
  from { opacity: 0.5; }
  70% { opacity: 0; }
  to { opacity: 0; }
}
/* animation: transform — trigger: scroll; 300ms ease; target: div.navbar7_component */
```

**Reduced motion:** no `prefers-reduced-motion` handling detected; add one when rebuilding.

## Design Token System

**Naming fingerprint:** bespoke — these 62 custom properties match no framework convention (Tailwind, shadcn/ui, MUI, Chakra, Bootstrap, Ant, Mantine, Material 3 and Open Props were all tested), and read as hand-authored: `--_typography---body`, `--_typography---heading`, `--_typography---heading--h1`, `--_typography---heading--h1-large`, `--_typography---heading--h1-small`.

**Scopes captured:** `body, :root` → dark (62 vars).

### Variable groups

| Group | Kind | Count | Examples |
|---|---|---|---|
| `--_ui-styles` | size | 26 | `--_ui-styles---ra…: 2rem` `--_ui-styles---…` |
| `--_typography-heading` | size | 10 | `--_typography---h…: Inter,Arial,s…` `--_ty…` |
| `--blue` | color | 9 | `--blue--1000: #000111` `--blue--400: #0059…` |
| `--neutral` | color | 5 | `--neutral--100: #dcdfea` `--neutral--200: …` |
| `--border-white` | color | 2 | `--border--white-12: #ffffff1f` `--border--…` |
| `(ungrouped)` | mixed | 10 | `--_typography---b…: Inter,Arial,s…` `--bla…` |

### Detected numeric scales

- `--blue` — #0059ff / #5f57ff / #4958ff / #36395e / #191d4b / #0b0c1f / #03051a / #040719 / #000111 (9 steps, colour ramp)
- `--neutral` — #f4f4f4 / #e7e7e7 / #dcdfea / #d2d4df / #d2dfd4 (5 steps, colour ramp)

**Tokenised coverage:** 92% of the page's most-used colours resolve to a variable — this design is genuinely tokenised, so rebuild against the variables rather than the hex values.

### Paste-ready token block

```css
:root {
  /* color */
  --neutral--white: #fff;
  --blue--1000: #000111;
  --blue--500: #5f57ff;
  --blue--800: #0b0c1f;
  --blue--950: #040719;
  --neutral--200: #d2d4df;
  --blue--700: #36395e;
  --blue--400: #0059ff;
  --border--white-12: #ffffff1f;
  --border--white-14: #ffffff24;
  --neutral--50: #e7e7e7;
  --blue--600: #4958ff;
  --neutral--300: #d2dfd4;
  --blue--750: #191d4b;
  --blue--900: #03051a;
  --grey-border: #fff3;
  --neutral--100: #dcdfea;
  --neutral--25: #f4f4f4;
  --swiper-theme-color: #007aff;
  /* radius */
  --_ui-styles---radius--medium: 1.5rem;
  --_ui-styles---radius--small: .5rem;
  --_ui-styles---radius--large: 2rem;
  --_ui-styles---radius--regular: 1rem;
  --_ui-styles---radius--xsmall: .25rem;
  /* size */
  --_ui-styles---size--12px: .75rem;
  --_ui-styles---size--16px: 1rem;
  --_ui-styles---size--8px: .5rem;
  --_ui-styles---size--32px: 2rem;
  --_ui-styles---size--14px: .875rem;
  --_ui-styles---size--20px: 1.25rem;
  --_ui-styles---size--24px: 1.5rem;
  --_ui-styles---size--2px: .125rem;
  --_typography---heading--h2: clamp(2.5rem,3.4vw,3rem);
  --_typography---heading--h2-small: clamp(2.1rem,3.3vw,2.625rem);
  --_typography---heading--h5: 1.5rem;
  --_ui-styles---size--18px: 1.125rem;
  --_typography---heading--h1: clamp(3rem,3.7vw,3.5rem);
  --_typography---heading--h1-large: clamp(3.25rem,4.2vw,4rem);
  --_typography---heading--h1-small: clamp(2.75rem,3.5vw,3.375rem);
  --_typography---heading--h3: clamp(1.875rem,3.15vw,2.375rem);
  --_typography---heading--h4: clamp(1.5rem,3vw,2rem);
  --_typography---heading--h6: 1.25rem;
  --_ui-styles---size--10px: .625rem;
  --_ui-styles---size--22px: 1.375rem;
  --_ui-styles---size--28px: 1.75rem;
  --_ui-styles---size--40px: 2.5rem;
  --_ui-styles---size--44px: 2.75rem;
  --_ui-styles---size--48px: 3rem;
  --_ui-styles---size--4px: .25rem;
  --_ui-styles---size--56px: 3.5rem;
  --_ui-styles---size--64px: 4rem;
  --_ui-styles---size--6px: .375rem;
  --_ui-styles---size--72px: 4.5rem;
  /* other */
  --_typography---heading: Inter,Arial,sans-serif;
  --paragraph: Inter,Arial,sans-serif;
  --headings: Inter,Arial,sans-serif;
  --_typography---body: Inter,Arial,sans-serif;
}
```

**Caveats:** 6 component/width-scoped var blocks skipped · page captured in dark mode; no light variant found

## Scroll & Reveal Motion

The page reveals content as it scrolls. Measured over a full end-to-end scroll pass:

- **slide up** — 1 element (100% of 1 reveals)

### Reveal inventory

| Animation | Properties | Duration | Easing | Target |
|---|---|---|---|---|
| `transform` | `transform` | 300ms | `ease` | `div.navbar7_component` ×1 |

### Paste-ready reveal CSS

```css
.reveal {
  opacity: 0;
}
.reveal.is-visible {
  animation: transform 300ms ease both;
}
```

### How to wire it

- Observe with a single `IntersectionObserver` at `threshold: 0.15` and `rootMargin: "0px 0px -10% 0px"`, add `is-visible`, then `unobserve` — every measured reveal fired once on entry, none replayed on scroll-back.
- The page declares **no** `prefers-reduced-motion` handling. Add the guard above anyway — it costs nothing and the original is worse for the omission.
- 7 in-page anchor links navigate between bands, so scroll-margin on section targets matters.

## Micro-interactions

### Declared transitions

| Properties | Duration | Easing | Applies to |
|------------|----------|--------|------------|
| `all` | 200ms | `ease` | button (37 elements) |
| `all` | 300ms | `ease` | link (22 elements) |
| `opacity` | 200ms | `ease` | link (16 elements) |
| `transform, opacity` | 250ms | `ease` | button (13 elements) |
| `filter` | 200ms | `ease` | element (9 elements) |
| `color` | 200ms | `ease` | link (9 elements) |
| `color` | 300ms | `ease` | button (8 elements) |
| `opacity` | 250ms | `ease` | element (7 elements) |

### Hover states (from live stylesheets)

- `a:hover` (130 elements) → outline-width: 0px
- `.blog-list-image:hover` (9 elements) → filter: brightness(85%)
- `.blog-list-link:hover` (9 elements) → color: rgb(102, 137, 243)
- `.cta-btn:hover` (1 elements) → background-color: rgb(233, 233, 233)
- `.button:hover` (39 elements) → border-bottom-color: rgba(255, 255, 255, 0.49); border-top-color: rgba(255, 255, 255, 0.49); filter: brightness(125%)
- `.button:hover:where(.w-variant-7e2d6561-5613-6797-d35c-14551858a15f)` (2 elements) → background-color: var(--blue--800); border-bottom-color: rgba(255, 255, 255, 0.12); border-top-color: rgba(255, 255, 255, 0.12)
- `.button:hover:where(.w-variant-59d0ea14-9528-a95b-3b09-ed3df52b693f)` (1 elements) → background-color: var(--blue--800); border-bottom-color: rgba(255, 255, 255, 0.12); border-top-color: rgba(255, 255, 255, 0.12)
- `.button.is-whatsapp:hover:where(.w-variant-1147766b-c563-9276-72c4-1e9ac0f461dc)` (5 elements) → background-color: rgb(14, 25, 54)

### Active / pressed states

- `a:active` → outline-width: 0px
- `.LoaderPlay__button:active` → transform: scale(1)
- `.StorySeekBoundary__area-left:active::before` → opacity: 0.25
- `.StorySeekBoundary__area-right:active::before` → opacity: 0.25

### Interaction patterns

- **Hover language:** predominantly *tint* (75% of 60 hover rules)
- **Cursor language:** pointer, default, text

## Component State Matrix

### Actions

**Primary button** — 2 instances · exemplar `a.button` · measured 169×48px

| State | Border | Other |
|---|---|---|
| **Base** | `none` | radius 10px · padding 12px 12px |
| Hover | border-right-color:rgba(255, 255,… | filter brightness(125%) · outline outline… |
| Active / pressed | — | outline outline-width:0px |

Transition recipe: `transition: all 0.2s ease`

**Secondary button** — 6 instances · exemplar `a.button` · measured 273×50px

| State | Border | Other |
|---|---|---|
| **Base** | `1px solid` | radius 8px · padding 12px 24px |
| Hover | border-right-color:rgba(255, 255,… | filter brightness(125%) · outline outline… |
| Active / pressed | — | outline outline-width:0px |

Transition recipe: `transition: all 0.2s ease`

**Ghost button** — 10 instances · exemplar `a.swiper-btn-prev` · measured 40×618px

| State | Other |
|---|---|
| **Base** | radius 0px · padding 0px 0px |
| Hover | outline outline-width:0px |
| Focus (`:focus-visible`) | outline o… |
| Active / pressed | outline outline-width:0px |

**Icon button** — 9 instances · exemplar `a.swiper-btn-prev` · measured 48×48px

| State | Other |
|---|---|
| **Base** | radius 0px · padding 0px 0px |
| Hover | outline outline-width:0px |
| Focus (`:focus-visible`) | outline o… |
| Active / pressed | outline outline-width:0px |

**Primary button** — 1 instance · exemplar `a.button` · measured 273×41px

| State | Background | Border | Other |
|---|---|---|---|
| **Base** | `#8b7b29` | `none` | radius 12px · padding 10px 24px |
| Hover | rgba(139, 123, 41, 0.9) | border-right-color:rgba(255, 255,… | outline outline-width:0px |
| Active / pressed | — | — | outline outline-width:0px |

Transition recipe: `transition: all 0.2s ease`

**Secondary button** — 2 instances · exemplar `a.button` · measured 136×50px

| State | Background | Border | Other |
|---|---|---|---|
| **Base** | `#ffffff0d` | `1px solid` | radius 8px · padding 12px 24px |
| Hover | #0b0c1f | border-right-color:rgba(255, 255,… | outline outline-width:0px |
| Active / pressed | — | — | outline outline-width:0px |

Transition recipe: `transition: all 0.2s ease`

**Ghost button** — 3 instances · exemplar `div#w-dropdown-toggle-0.navbar7_d…` · measured 155×88px

| State | Text | Other |
|---|---|---|
| **Base** | `#ffffff` | radius 0px · padding 4px 2px 4px 8px |
| Hover | #d2d4df | — |
| Focus | — | outline o… |

Transition recipe: `transition: color 0.3s ease`

### Form controls

**Text input** — 1 instance · exemplar `input#Email.footer2_form-field` · measured 253×40px

| State | Background | Border | Other |
|---|---|---|---|
| **Base** | `image over #00011199` | `1px solid` | radius 12px · padding 10px 12px 10px … |
| Focus | — | border-right-color:rgba(255, 255,… | outline outline-width:0px |
| Disabled | #eeeeee | — | — |

_Also changed but not modelled here: `cursor`._

### Navigation

**Link** — 36 instances · exemplar `a.youtube1_card` · measured 358×269px

| State | Transform | Other |
|---|---|---|
| **Base** | `none` | radius 0px · padding 0px 0px |
| Hover | translateY(-6px) | outline outline-width:0px |
| Active / pressed | — | outline outline-width:0px |

Transition recipe: `transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)`

**Nav item** — 2 instances · exemplar `a.navbar7_link` · measured 134×32px

| State | Text | Other |
|---|---|---|
| **Base** | `#ffffff` | radius 0px · padding 4px 8px |
| Hover | #d2d4df | outline outline-width:0px |
| Active / pressed | — | outline outline-width:0px |

Transition recipe: `transition: color 0.3s ease`

**Link** — 9 instances · exemplar `a.blog-list-link` · measured 90×24px

| State | Text | Other |
|---|---|---|
| **Base** | `#5f57ff` | radius 0px · padding 0px 0px |
| Hover | #6689f3 | outline outline-width:0px |
| Active / pressed | — | outline outline-width:0px |

Transition recipe: `transition: color 0.2s ease`

_+5 further archetypes were measured but not tabled._

### Interaction language

- **Hover language:** dominantly *color*. Of the 13 of 17 archetypes that respond to hover, 77% shift color, 15% shift filter, 15% shift other, 8% shift shadow (one archetype can move several at once); 4 archetypes change nothing on hover.
- **Focus policy:** a real `outline` on 4 of 17 archetypes, scoped to `:focus-visible` so mouse clicks stay quiet, ring colour `#4d65ff`.
- **Warning:** 22 rules set `outline: none` — the design relies on its replacement ring existing. Never port the suppression without the ring.
- **Tap targets:** median 136×50px over 85 interactive elements; 32 (38%) fall under the 44px guidance — smallest: `button.swiper-pag-btn` 24×4px, `button.swiper-pag-btn` 24×4px.
- **Cursor language:** Chip / badge → `pointer`, Ghost button → `pointer`, Icon button → `pointer`, Link → `pointer`, Nav item → `pointer`. 201 non-interactive elements also carry `cursor: pointer` — the page signals clickability broadly.

## Overlays & Portals

These surfaces are `display:none` at rest; they were temporarily forced measurable off-screen and restored. Every value below is real, not inferred.

| Kind | Background | Radius | Shadow | Padding | Width |
|---|---|---|---|---|---|
| Menu — Agency ad accountsF… | `#040719cc` | `0px` | `none` | `0px 0px` | `1335px` |
| Menu — Agency ad accountsF… | `#00000000` | `0px` | `none` | `0px 0px` | `0px` |
| Menu — Agency ad accountsF… | `#00000000` | `0px` | `none` | `32px 0px` | `0px` |
| Menu — Agency ad accountsF… | `#00000000` | `0px` | `none` | `0px 0px` | `0px` |
| Menu — Agency ad accounts | `#00000000` | `0px` | `none` | `0px 0px` | `0px` |
| Menu — Facebook Agency Ad … | `#00000000` | `0px` | `none` | `0px 0px` | `0px` |
| Menu — Facebook Agency Ad … | `#000111` | `20px` | `none` | `12px 12px` | `0px` |
| Menu — Google Agency Ad Ac… | `#000111` | `20px` | `none` | `12px 12px` | `0px` |

### Layer, backdrop & entry

- **Menu** — `backdrop-filter: blur(32px)`, text `#ffffff`, 14px type, transitions `all`.
- **Menu** — text `#ffffff`, 14px type, transitions `all`.
- **Menu** — text `#ffffff`, 14px type, transitions `all`.
- **Menu** — text `#ffffff`, 14px type, transitions `all`.
- **Menu** — text `#ffffff`, 14px type, transitions `all`.
- **Menu** — text `#ffffff`, 14px type, transitions `all`.
- **Menu** — 1px solid border, text `#ffffff`, 14px type, transitions `all` over 0.3s.
- **Menu** — 1px solid border, text `#ffffff`, 14px type, transitions `all` over 0.3s.

**Scrim:** modal surfaces sit on a full-screen backdrop — fill `#040719cc`, 80% opaque, `blur(32px)`. The page behind is dimmed, not hidden; keep it in the DOM and inert.

## Components

### Ghost / outline button
**Role:** primary action

#00000000 background, #ffffff text, border-radius 0px, padding 1px 6px, Inter 400 16px. Transitions: transform, opacity 0.2s, 0.25s.

### Ghost / outline button
**Role:** secondary variant (10 instances)

#00000000 background, #ffffff text, border-radius 8px, padding 12px 24px, Inter 400 16px, 1px solid rgba(255, 255, 255, 0.12) border. Transitions: all 0.2s.

### Ghost / outline button
**Role:** secondary variant (8 instances)

#00000000 background, #ffffff text, border-radius 0px, padding 4px 8px, Inter 400 14px. Transitions: color 0.3s.

### Card — `.benefit1_card` (11 instances)

#040719 background, border-radius 16px, padding 20px 20px, 1px solid rgba(255, 255, 255, 0.15) border, no shadow.

### Card — `.comparison_table-cell` (9 instances)

#0b0c1f background, border-radius 0px, padding 24px 8px, no shadow.

### Card — `.testimonial4_card-video` (7 instances)

#000000 background, border-radius 0px, padding 0px 0px, no shadow.

### Card — `.service2_card` (6 instances)

#040719 background, border-radius 16px, padding 20px 20px, 1px solid rgba(255, 255, 255, 0.14) border, no shadow.

### Input — input[radio] (7 instances)

#00000000 background, 0px none rgb(255, 255, 255) border, border-radius 0px, 13px tall, Inter 14px.

### Input — input[email] (2 instances)

#0d152ecc background, 1px solid rgba(255, 255, 255, 0.12) border, border-radius 12px, 0px tall, Inter 16px. Placeholder: "johndoe32@gmail.com".

### Input — input[range] (1 instances)

#00000000 background, 0px none rgb(255, 255, 255) border, border-radius 0px, 16px tall, Arial 16px.

### Text link (52 instances)

#ffffff text, no underline by default, Inter 400 16px. Hover transition: all 0s.

### Heading stack

| Level | Sample | Font | Size | Line Height | Tracking |
|-------|--------|------|------|-------------|----------|
| H1 | Unlock Limitless Advertising w | Inter 600 | 42px | 48.3px | -1px |
| H2 | Limitless Scaling with Agency  | Inter 600 | 42px | 48.3px | -1px |
| H3 | Meta Agency Ad Accounts | Inter 600 | 20px | 28px | normal |

## Component Census

Additional UI inventory detected on the page, with a measured exemplar per category:

| Component | Count | Measured exemplar |
|-----------|-------|-------------------|
| Accordions / disclosures | 4 | pad 4px 8px |
| Alerts / live regions | 4 | structural |
| Skeleton loaders | 1 | pad 339px 0px |
| Tooltips | 32 | bg rgba(25, 52, 113, 0.9) · radius 8px |
| Avatars | 6 | radius 99px |
| Badges / chips | 8 | structural |
| Carousels | 59 | structural |

## Component API Sketch

### Props, from the measured variants

```ts
// Every union member below was measured on this page. Nothing is invented.
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';  // measured heights: 40 / 41 / 48 / 50px

interface ButtonProps {
  variant?: ButtonVariant;   // "primary" is the default — 13 instances
  size?: ButtonSize;
  iconOnly?: boolean;      // a square icon-only variant was measured
  disabled?: boolean;      // measured disabled state exists
  children: React.ReactNode;
}

type CardVariant = 'benefit1_card' | 'comparison_table-cell' | 'testimonial4_card-video' | 'service2_card';
interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
}

interface FieldProps {
  type: 'input[radio]' | 'input[email]' | 'input[range]';
  // a measured :focus state exists — see the state matrix for the exact ring
  label: string;
  placeholder?: string;
}
```

### React + Tailwind, using the measured values

```jsx
// Primary button — measured: #00000000 fill, #ffffff text, 0px radius, 1px 6px padding, Inter 400 16px
export function Button({ children, ...props }) {
  return (
    <button
      className="inline-flex items-center justify-center font-normal text-base rounded-none px-1.5 py-[1px] bg-[#00000000] text-[#ffffff] transition-colors duration-[200ms] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4d65ff]"
      {...props}
    >
      {children}
    </button>
  );
}

// Card — measured: #040719 surface, 16px radius, 20px 20px padding, #ffffff26 border, flat, 11 instances
export function Card({ children }) {
  return <div className="bg-[#040719] rounded-2xl px-5 py-5 border border-[#ffffff26]">{children}</div>;
}
```

_Arbitrary values (`px-[18px]`, `bg-[#4f46e5]`) appear wherever the measured number has no Tailwind scale token — that is deliberate; rounding them to the nearest token changes the design._

## Do's and Don'ts

### Do
- Use `#040719` as the canvas and build every surface from the token table above — never invent intermediate grays
- Use #5f57ff exclusively for interactive moments (buttons, links, key fills) — it is the energy of the system
- Snap all spacing to the 8px base unit grid
- Use fully-rounded (pill, 9999px) radii for buttons and tags
- Default interactive transitions to 300ms with the extracted easing tokens

### Don't
- Do not introduce colors outside the 12-token palette extracted above
- Do not add springy/bounce motion — the source uses the timing functions listed under Tokens — Motion
- Do not stack multiple shadows

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#040719` | Page background — the base layer |
| 1 | Surface | `#000111` | Cards, nav bars, panels floating on the canvas |
| 2 | Accent fill | `#5f57ff` | Filled CTAs, highlight containers, brand moments |

## Elevation

- **Low:** `rgb(136, 136, 136) 0px 0px 1px 0px` (245 uses)
- **Mid:** `rgba(96, 174, 255, 0.16) 0px -5.48px 8px 0px inset, rgba(96, 174, 255, 0.16) 0px 2.61px 2.61px 0px inset` (12 uses)
- **High:** `rgba(14, 18, 27, 0.5) 0px 2px 4px 0px` (6 uses)
- **Highest:** `rgba(0, 0, 0, 0.02) 0px 1px 1px 1px` (4 uses)
- **Level 4:** `rgba(0, 0, 0, 0.25) 0px 4px 16px 0px` (4 uses)

## Imagery

230 raster images and 0 inline SVGs were found. Dominant aspect ratios: 1:1, 1.5:1, 1.68:1, 0.88:1. Media is rounded at ~50px or more. Photography or rendered imagery carries the visual weight.

## Assets & Media

### Image inventory

| Role | Rendered | Aspect | Fit | Loading | Alt |
|---|---|---|---|---|---|
| Hero (above fold) | 1937×794px · avif | 2.44:1 | — | lazy · srcset | Dark blue gradient background… |
| Hero (above fold) | 1335×671px @1.3x · svg | 1.99:1 | cover | eager | background grid |
| Illustration | 1024×516px @1x · svg | 1.98:1 | — | eager | **missing** |
| Illustration | 682×553px @1x · svg | 1.23:1 | — | lazy | **missing** |
| Logo | 643×505px @2.1x · avif | 1.27:1 | — | lazy · srcset | Uproas Team. Two men sitting … |
| Content | 644×415px @2.1x · avif | 1.55:1 | — | lazy · srcset | Bar chart showing total ad sp… |
| Icon | 694×250px @2x · avif | 2.78:1 | — | lazy · srcset | Central Uproas icon connected… |
| Content | 275×490px @4.9x · avif | 0.56:1 | cover | lazy · srcset | Lukas Lainsalu - Sales Manage… |
| Content | 392×261px @3.1x · avif | 1.5:1 | — | lazy | Ad Revenue Explained: How It … |
| Content | 392×261px @3.1x · avif | 1.5:1 | — | lazy | Display Ad Networks: The Type… |
| Content | 392×261px @3.1x · avif | 1.5:1 | — | lazy | Social Media Retargeting: How… |
| Content | 392×261px @3.1x · avif | 1.5:1 | — | lazy | PPC Statistics 2026: The Numb… |

_+150 further images on the page._

**Image pipeline:** 162 images (40 measured in detail); 51% ship a 2× source; 81% are lazy-loaded; 100% carry alt text; average aspect 2.5:1; formats avif ×87, svg ×67, png ×7.

### Background images

- **Card** on `div.testimonial1-wrapper` — `685daf752e5ec8eb125def18_card bac…` · `background-size: cover`, position 50% 0px, repeat
- **Decor** on `div.Thumbnail__image` — `thumbnail-5_0.jpg` · `background-size: contain`, position 50% 50%

### Icon system

The icons fingerprint as **bootstrap** (medium confidence) — viewBox 0 0 16 16, stroke-width 1.6 round. Install that set rather than redrawing: the geometry will match for free. They are fill-first (only 19% of shapes are stroked) — solid glyphs, painted with `currentColor` on the fill.

| Icon property | Measured value |
|---|---|
| Icons sampled | 205 |
| Box sizes | 16 / 20 / 24px |
| Stroke width | 1.6 |
| Corners / caps | round |
| Delivery | mixed |
| Icon fonts | 57 glyphs (generic ×57) |

### Web fonts

| Family | Format | Weight | Display | Host |
|---|---|---|---|---|
| webflow-icons | ttf | 400 | — | data: |
| Inter | woff2 | 400 | swap | same-origin |
| Inter | woff2 | 600 | swap | same-origin |
| Inter | woff2 | 500 | swap | same-origin |

The resolved fallback stacks — copy them verbatim; the fallbacks are what the page shows before the webfont lands:

```css
--font-body: Inter, Arial, sans-serif;
--font-heading: Inter, Arial, sans-serif;
```

_Headings and body share one family — the hierarchy is carried by weight and size alone._

**Font delivery:** self-hosted from `same-origin`. 4 faces registered, 3 actually loaded and 1 never used — do not ship the dead weight.

**Brand marks:** apple-touch-icon present.

### Rich media

- **Video:** 8 elements, 7 with controls; sample renders 602×339px with `object-fit: contain`.
- **Embeds:** 3 iframes (other ×3).

_Asset notes: background-image hunt capped at 1200 elements · 16 cross-origin stylesheets could not be read for @font-face rules._

## Layout

Content is centered in a ~1340px max-width container. Cards use ~20px padding. The hero heading is start-aligned.

## Page Blueprint

```text
┌──────────────────────────────────────────────────────────┐
│ HEADER                            fixed · 89px · #000111 │
├──────────────────────────────────────────────────────────┤
│ 1. HERO                                   671px · 71% vh │
│   #000111 (dark) · 1 col · 602px container               │
├──────────────────────────────────────────────────────────┤
│ 2. CONTENT                                176px · 19% vh │
│   #000111 (dark) · 2 cols · 1255px container             │
├──────────────────────────────────────────────────────────┤
│ 3. CONTENT                                794px · 84% vh │
│   #000111 (dark) · 3 cols · 998px container              │
├──────────────────────────────────────────────────────────┤
│ 4. CONTENT                                757px · 80% vh │
│   #000111 (dark) · 3 cols · 1255px container             │
├──────────────────────────────────────────────────────────┤
│ 5. FEATURES                             2204px · 232% vh │
│   #000111 (dark) · 2 cols · 1255px container             │
├──────────────────────────────────────────────────────────┤
│ 6. CONTENT                              1185px · 125% vh │
│   #000111 (dark) · 2 cols · 1127px container             │
├──────────────────────────────────────────────────────────┤
│ 7. CONTENT                                487px · 51% vh │
│   #000111 (dark) · 3 cols · 1255px container             │
├──────────────────────────────────────────────────────────┤
│ 8. PRICING                              1805px · 190% vh │
│   #000111 (dark) · 1 col · 1255px container              │
├──────────────────────────────────────────────────────────┤
│ 9. CONTENT                                756px · 80% vh │
│   #000111 (dark) · 1024px container                      │
├──────────────────────────────────────────────────────────┤
│ 10. CONTENT                             1136px · 120% vh │
│   #000111 (dark) · 1 col · 1255px container              │
├──────────────────────────────────────────────────────────┤
│ 11. CONTENT                               846px · 89% vh │
│   #000111 (dark) · 1 col · 1221px container              │
├──────────────────────────────────────────────────────────┤
│ 12. CONTENT                               641px · 68% vh │
│   #000111 (dark) · 2 cols · 1189px container             │
├──────────────────────────────────────────────────────────┤
│   … 5 further bands below, same rhythm                   │
└──────────────────────────────────────────────────────────┘
```

| # | Band | Height | Container | Padding | Columns |
|---|---|---|---|---|---|
| 1 | Hero | 671px (71% vh) | 602px / 0px gutter | 0px | 1 |
| 2 | Content | 176px (19% vh) | 1255px / 0px gutter | 0px | 2 |
| 3 | Content | 794px (84% vh) | 998px / 0px gutter | 0px | 3 |
| 4 | Content | 757px (80% vh) | 1255px / 0px gutter | 80px | 3 |
| 5 | Features | 2204px (232% vh) | 1255px / 0px gutter | 80px | 2 |
| 6 | Content | 1185px (125% vh) | 1127px / 64px gutter | 0px | 2 |
| 7 | Content | 487px (51% vh) | 1255px / 0px gutter | 80px | 3 |
| 8 | Pricing | 1805px (190% vh) | 1255px / 0px gutter | 80px | 1 |
| 9 | Content | 756px (80% vh) | 1024px / 0px gutter | 80px | — |
| 10 | Content | 1136px (120% vh) | 1255px / 0px gutter | 80px | 1 |
| 11 | Content | 846px (89% vh) | 1221px / 16px gutter | 80px | 1 |
| 12 | Content | 641px (68% vh) | 1189px / 32px gutter | 80px | 2 |
| 13 | Content | 1333px (141% vh) | 648px / 0px gutter | 80px | 1 |
| 14 | Content | 1133px (119% vh) | 1255px / 0px gutter | 80px | 2 |
| 15 | Content | 847px (89% vh) | 1255px / 0px gutter | 80px | 1 |
| 16 | Content | 748px (79% vh) | 1138px / 0px gutter | 0px | 1 |
| 17 | Content | 642px (68% vh) | 1195px / 30px gutter | 64px / 80px | 1 |

_Identical on all 17 bands: background #000111 dark._

### How to rebuild each band

**1 · Hero** — 671px tall, about 71% of the viewport. Background `#000111` (dark); inner surfaces use `#11195b` on 38% of its elements and `#3974ff` on 25% of its elements. Content sits in a 602px container with 0px side padding, vertical padding 0px top / 0px bottom, a single column. Text is `#ffffff` at 20.7:1 against the band, set in Inter 500 10px/10px on 32% of its text and Inter 400 8px/8px on 32% of its text.

**2 · Content** — 176px tall. Background `#000111` (dark). Content sits in a 1255px container with 0px side padding, vertical padding 0px top / 0px bottom, 2 columns at a 0px gap, items no narrower than 1814px.

**3 · Content** — 794px tall, about 84% of the viewport. Background `#000111` (dark). Content sits in a 998px container with 0px side padding, vertical padding 0px top / 0px bottom, 3 columns at a 0px gap, items no narrower than 3px. Text is `#ffffff` at 20.7:1 against the band, set in Inter 600 16px/24px on 100% of its text.

**4 · Content** — 757px tall, about 80% of the viewport. Background `#000111` (dark); inner surfaces use `#040719` on 86% of its elements and `#ffffff` on 14% of its elements. Content sits in a 1255px container with 0px side padding, vertical padding 80px top / 80px bottom, 3 columns at a 24px gap, items no narrower than 402px. Text is `#ffffff` at 20.7:1 against the band, set in Inter 400 14px/21px on 35% of its text and Inter 600 20px/28px on 35% of its text.

**5 · Features** — 2204px tall, about 232% of the viewport. Background `#000111` (dark); inner surfaces use `#040719` on 100% of its elements. Content sits in a 1255px container with 0px side padding, vertical padding 80px top / 80px bottom, 2 columns at a 64px gap, items no narrower than 596px. Text is `#ffffff` at 20.7:1 against the band, set in Inter 400 16px/24px on 48% of its text and Inter 600 24px/31px on 41% of its text.

**6 · Content** — 1185px tall, about 125% of the viewport. Background `#000111` (dark); inner surfaces use `#000000` on 64% of its elements and `#0d0f2b` on 36% of its elements. Content sits in a 1127px container with 64px side padding, vertical padding 0px top / 0px bottom, 2 columns at a 72px gap, items no narrower than 80px. Text is `#ffffff` at 20.7:1 against the band, set in Inter 400 14px/21px on 35% of its text and Inter 400 16px/24px on 35% of its text.

**7 · Content** — 487px tall. Background `#000111` (dark); inner surfaces use `#040719` on 50% of its elements and `#70ed7c` on 50% of its elements. Content sits in a 1255px container with 0px side padding, vertical padding 80px top / 80px bottom, 3 columns at a 24px gap, items no narrower than 402px. Text is `#ffffff` at 20.7:1 against the band, set in Inter 400 10px/10px on 25% of its text and Inter 400 14px/21px on 25% of its text.

**8 · Pricing** — 1805px tall, about 190% of the viewport. Background `#000111` (dark); inner surfaces use `#141831` on 75% of its elements and `#ebd67c` on 25% of its elements. Content sits in a 1255px container with 0px side padding, vertical padding 80px top / 80px bottom, a single column. Text is `#ffffff` at 20.7:1 against the band, set in Inter 400 16px/24px on 27% of its text and Inter 400 14px/21px on 21% of its text.

### Page chrome

- **Header** — 89px tall, `position: fixed`, background `#000111`, 1px solid bottom border, 1223px inner container, 40px side padding, z-index 1000, overlaps the hero rather than pushing it down.

## Grid & Composition

**Container widths:** 1260px on 8 bands · 600px on 1 band · 640px on 1 band. The widest measured column is 1260px — build the shell at that width and let narrower bands opt down.

### Grid recipes

| Where | Display | Columns | Gap | Align / justify |
|---|---|---|---|---|
| `div.home_hero2-content` | flex / column | 1 | 40px | normal / normal |
| `div.marquee_track` | flex / row | 2 | 0px | normal / normal |
| `div.booking1_form-lines` | flex / row | 3 | 0px | flex-start / center |
| `div.service2_list` | grid | 3 · `repeat(3, 1fr)` | 24px | normal / normal |
| `div.header2-wrapper` | grid | 2 · `repeat(2, 1fr)` | 64px | normal / normal |
| `div.testimonial1-wrapper` | flex / column | 2 | 72px | center / center |
| `div.grid-3x1` | grid | 3 · `repeat(3, 1fr)` | 24px | normal / normal |
| `div.w-layout-vflex` | flex / column | 1 | 80px | stretch / flex-start |
| `div.header3-wrapper` | flex / column | 1 | 16px | center / flex-start |
| `div.booking2-container` | flex / column | 1 | 32px | normal / normal |

_+6 further measured containers._

### Z-index layer stack

| z | Role | Position | Element |
|---|---|---|---|
| 1999 | Scrim | fixed | `div.testimonial4_wall-p…` · 1335×949px · #… |
| 1000 | Header | fixed | `div.navbar7_component` · 1335×89px · #0001… |
| 21 | Decor | fixed | `div.w-layout-vflex` · 219×114px |
| 5 | Decor | absolute | `a.swiper-btn-prev` · 40×618px |
| 5 | Decor | absolute | `a.swiper-btn-next` · 40×618px |
| 3 | Scrim | absolute | `div.testimonial1-overla…` · 80×1025px · #0… |
| 3 | Scrim | absolute | `div.testimonial1-overla…` · 80×1025px · #0… |
| 3 | Decor | absolute | `div.outer-border` · 374×48px · #000111 |
| 3 | Decor | absolute | `div.outer-border` · 330×48px · #000111 |
| 3 | Decor | absolute | `div.outer-border` · 286×48px · #000111 |

**Z-index scale in use:** `-1` · `0` · `1` · `2` · `3` · `5` · `21` · `1000` · `1999` — reuse exactly these 9 steps, do not invent intermediate values.

**Vertical rhythm:** bands sit a median 0px apart, most commonly 0px, across 17 bands and section padding clusters at 80px (top: 80px ×11, 64px ×1).

## Landing Page Anatomy

The page tells a conversion story in this order — rebuild sections in this sequence:

| Order | Section | Heading / evidence | Key elements |
|-------|---------|--------------------|--------------|
| 1 | Hero | Unlock Limitless Advertising with Whitelisted Agency Ad Accounts | CTA: "Chat with us" + "Book a Call" · 40 images |
| 2 | Testimonials | document.addEventListener("DOMContentLoaded", () => { docume | 46 images |
| 3 | Media block | Get Your Current Setup ReviewedFree Access to E-Books ($4,24 | 7 images |
| 4 | Content section | Limitless Scaling with Agency Ad Accounts Across All Platforms | CTA: "Learn more" + "Get Started" · 19 images |
| 5 | Testimonials | Break Free from Spending Limits, Rejections, and Bans | CTA: "View Pricing" + "See More" · 12 images |
| 6 | Testimonials | Success Stories from Our Clients | 57 images |
| 7 | How it works | Get your Agency Ad Accounts in 3 Simple Steps | 3 images |
| 8 | Testimonials | Get Your Agency Account Today! | CTA: "Check Availability" + "Check Availability" + "Check Availability" · 98 images |
| 9 | Content section | All Packages Come with Guarantees | 2 images |
| 10 | Content section | Comparison | 11 images |
| 11 | Content section | Book A Quick Call & Get Your Accounts Ready | 2 images |
| 12 | Content section | Get Rewarded for Your Ad Spend | CTA: "See This Month’s Leaders" + "How to Claim" · 2 images |
| 13 | Testimonials | What Our Clients Say | 15 images |
| 14 | Content section | Meet The Team | CTA: "Meet the Uproas Team" + "Meet the Uproas Team" · 10 images |
| 15 | Testimonials | Latest blogs | CTA: "View all" · 12 images |
| 16 | Content section | Follow Us on Youtube | 14 images |

**Section flow:** hero → testimonials → media → content → testimonials → testimonials → how-it-works → testimonials → content → content → content → content → testimonials → content → testimonials → content

## Hero & Conversion

- **Headline:** "Unlock Limitless Advertising with Whitelisted Agency Ad Accounts"
- **Subheadline:** "We Rent Agency Ad Accounts for Facebook, Google, TikTok & More."
- **Hero visual:** product screenshot (hero block ≈671px tall)
- **Nav anatomy:** "facebook" logo · 5 links ("Telegram", "WhatsApp", "Pricing", "Affiliates25%", "Get Started") · CTA: "Agency Accounts", "Telegram"
- **CTA repetition:** "Telegram" ×5, "WhatsApp" ×5, "Check Availability" ×4, "Get Started" ×3, "Book a Call" ×3, "Chat with us" ×2, "Meet the Uproas Team" ×2 — the same conversion ask returns at every scroll depth
- **Full CTA copy inventory:** "Telegram" · "WhatsApp" · "Check Availability" · "Get Started" · "Book a Call" · "Chat with us"

## Signature Devices

These patterns define the site's identity — repeat them across every new page:

1. **The Pill Button Language** — every interactive element is fully rounded (9999px radius) — buttons, tags, inputs and badges share one geometry
2. **Card-on-Canvas Contrast** — #000111 surfaces float on a #040719 canvas — separation comes from background contrast, not shadows

## Content & Copy

### Copy per band

| Band | Eyebrow | Heading | CTA |
|---|---|---|---|
| Hero | — | Unlock Limitless Advertising with Whitelist… | "Chat with us" + "Book a Call" |
| Content | Enterprise Ad Solutions | Limitless Scaling with Agency Ad Accounts A… | "Learn more" + "Get Started" |
| Content | Benefits | Break Free from Spending Limits, Rejections… | "View Pricing" |
| Content | TESTIMONIALS | Success Stories from Our Clients | "Play video" + "Previous slide" |
| How it works | HOW IT WORKS | Get your Agency Ad Accounts in 3 Simple Ste… | — |
| Content | — | Get Your Agency Account Today! | "Check Availability" + "Book a Call" |
| Content | — | All Packages Come with Guarantees | — |
| Content | UPROAS VS OTHERS | Comparison | — |
| Content | — | Book A Quick Call & Get Your Accounts Ready | — |
| Content | — | Get Rewarded for Your Ad Spend | "See This Month’s Lead…" + "How to Claim" |
| Testimonials | Testimonials | What Our Clients Say | — |
| Content | Built by people who care | Meet The Team | "Meet the Uproas Team" |

_2 further bands carried no headline copy._

### Navigation copy

- **Items:** "Pricing" (dropdown) → `/` · "Affiliates 25%" → `/affiliate`
- **Actions:** "Agency Accounts" (secondary) · "Other Services" (secondary) · "Resources" (secondary)
- **Shape:** right alignment

### Pricing table

| Tier | Price | Badge | CTA | Key features |
|---|---|---|---|---|
| — | $299 PER MONTH | — | Check Availability | — |
| — | $699 PER MONTH | — | Check Availability | — |

### Forms

- **Other form** — Low-Risk (radio), Medium-Risk (radio), Tiktok (radio), Google (radio), Bing (radio), Taboola (radio) via GET.
- **Newsletter form** — Where should we email i… (email, required); submits with "Get Access" via GET.

### FAQ

- "Agency Accounts"
- "Other Services"
- "Resources"

_Built with `accordion` disclosures._

### Testimonials

> Sorry, your browser doesn't support the video tag.

> Oliver is the founder and CEO of Bustem.com - A software & agency that protects e-commerce brands take down copycats that steal your revenue. Oliver has worked…

> Ecom King is a leading e-commerce mentor known for helping thousands start and scale online stores, building multiple successful brands and generating millions…

**Logo wall:** wellcopy · Floxy · Foreplay · Doplhin{anty} · Wetracked.io · Earn Task · Makeugc · Accelerated · Chargeback · RedShield · Bustem · Incognition — 12 marks shown as social proof.

### Voice & tone

- **Heading case:** Title Case — 10 sentence, 90 title, 0 upper across 100 headings. Match the dominant one exactly; mixing reads as a different brand.
- **Heading length:** 5.5 words on average over 51 headings — medium; a full clause per heading.
- **Person:** second person — the copy addresses the reader directly (you ×56, we ×44).
- **Questions:** 2% of headlines are questions.
- **Reading level:** dense — 30.5 words per sentence, 5.2 letters per word.
- **Jargon:** low (0% of words) — house terms: "unlock".
- **CTA verbs:** "check" ×3, "book" ×2, "get" ×2, "learn" ×1, "view" ×1, "see" ×1 — every button starts with one of these.
- **Signature phrases:** "unlock limitless" ×2, "limitless advertising" ×2, "whitelisted agency" ×2, "limitless scaling" ×2, "accounts across" ×2, "break free" ×2 — repeat them; they are the vocabulary of the brand.
- **Punctuation & emoji:** 3 exclamation marks and 0 emojis in the captured copy — stay inside that budget.

**Document metadata:** title "Agency Ad Accounts | Unlimited Spend + Support | Uproas"; description "Get premium agency ad accounts with unlimited spend, zero bans, and instant approval. Scale your campaigns without limits. Start today with…"; heading hierarchy H1 ×1 · H2 ×14 · H3 ×30; lang `en`.

## Accessibility Profile

- **Contrast discipline:** 96% of measured text usage clears WCAG AA (4.5:1)
- **Focus design:** 45 :focus rules in stylesheets
- **Reduced motion:** no `prefers-reduced-motion` handling found — add it when rebuilding
- **Semantics:** 6 landmarks · 438 ARIA-carrying elements · 100% of images have alt text

## Responsive

Breakpoints declared in stylesheets: `479px`, `767px`, `768px`, `991px`, `1280px`, `1440px`, `1920px`.

Current viewport analyzed at 1350×949 (desktop-scale view).

## Responsive Behaviour

**Strategy:** mixed — both `min-width` and `max-width` ladders are in play — 79 min-width rules, 132 max-width rules.

**Ladder:** the 7 breakpoints match no standard scale — they are custom to this site.

### Breakpoint matrix

| Tier | Query | Layout | Spacing | Type | Hidden / shown |
|---|---|---|---|---|---|
| <xs | `≤479px` | 1 col | space -33% | type -19% | −3/+2 desktop-only,… |
| <md | `≤767px` | 1 col | space -25% | type -19% | −2/+1 desktop-only,… |
| md | `≥768px` | height 96vh | margin-top 2vh | — | −2 |
| <lg | `≤991px` | 2 col | margin-bottom 16px | font-size 3rem | −2/+2 nav |
| xl | `≥1280px` | 2 col | column-gap 1.25rem | font-size 3.25rem | — |
| 2xl | `≥1440px` | 3 col | padding-left 0% | type +23% | — |
| 2xl | `≥1920px` | 2 col | padding-top 40px | line-height 1.3 | −1 |

Across the 7 stops the ladder rewrites 347 declarations in 211 rules, the heaviest being `2xl` at 98. Nothing else moves — anything not in the matrix above holds at every width.

### Mobile adaptation

- **Navigation:** is swapped by width rather than by a menu button — `'.w-nav[data-collapse="tiny"] .w-…`, `'.w-nav[data-collapse="tiny"] .w-…`.
- **Grid collapse:** 4 grids drop to a single column and 3 flex rows turn into columns.
- **Spacing:** shifts -29% at mobile widths — padding and gaps shrink by roughly that much, not to an arbitrary smaller value.
- **Type:** shifts -19% at mobile widths — the whole scale moves, so keep the ratios.
- **Visibility:** 10 selectors hidden and 5 revealed by width (desktop-only, other, nav).

### Modern CSS in play

- **Coarse-pointer** rules (`pointer: coarse` / `hover: none`) exist — hover affordances have touch fallbacks.
- **Feature queries:** `(any-hover: none)` — progressive enhancement is deliberate here.

**Fluid type:** sizes interpolate with `clamp()` / viewport units rather than stepping at breakpoints — copy the real expressions:

```css
--_typography---heading--h2: clamp(2.5rem,3.4vw,3rem);
--_typography---heading--h1: clamp(3rem,3.7vw,3.5rem);
--_typography---heading--h1-large: clamp(3.25rem,4.2vw,4rem);
```

_Caveats: rem/em lengths were converted at the assumed 16px root font size._

## Agent Prompt Guide

**Quick Color Reference**
- canvas: #040719
- primary text: #ffffff
- secondary text: #999999
- muted text: #ffffffcc
- brand accent: #5f57ff
- surface: #000111
- border: #ffffff1f
- gray near-black: #000000

**Example Component Prompts**

1. Rebuild the full landing page in exactly this order: hero → testimonials → media → content → testimonials → testimonials → how-it-works → testimonials → content → content → content → content → testimonials → content → testimonials → content. Use the Hero & Conversion spec for the first screen, one component recipe per section, and the section rhythm from the Layout metrics.
2. Create the primary button: #00000000 background, #ffffff text, border-radius 0px, padding 1px 6px, font Inter 400 16px. On hover, transition transform, opacity 0.2s, 0.25s.
3. Create a card: #040719 background, border-radius 16px, padding 20px 20px, no shadow, 1px solid rgba(255, 255, 255, 0.15) border.
4. Create the display heading: Inter weight 600, 48px, line-height 1.25, #ffffff on #040719.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-bg-canvas: #040719;
  --color-text-primary: #ffffff;
  --color-text-secondary: #999999;
  --color-text-muted: #ffffffcc;
  --color-accent: #5f57ff;
  --color-bg-surface: #000111;
  --color-border: #ffffff1f;
  --color-gray-deep: #000000;
  --color-blue-dark: #0788f5;
  --color-blue-deep: #0a132b;
  --color-blue-dark: #7061fb;
  --color-green-dark: #14701b;

  /* Typography — Font Families */
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-display: 48px;
  --leading-display: 1.25;
  --text-heading-lg: 46px;
  --leading-heading-lg: 1.15;
  --tracking-heading-lg: -1px;
  --text-heading: 42px;
  --leading-heading: 1.15;
  --tracking-heading: -1px;
  --text-heading-sm: 38px;
  --leading-heading-sm: 1.25;
  --text-subheading: 32px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.3px;
  --text-body: 30px;
  --leading-body: 1.3;
  --text-small: 24px;
  --leading-small: 1.3;
  --text-caption: 22px;
  --leading-caption: 1.3;

  /* Layout */
  --page-max-width: 1340px;
  --card-padding: 20px;
  --element-gap: 8px;
  --spacing-unit: 8px;

  /* Border Radius */
  --radius-pill: 9999px;
  --radius-1: 1px;
  --radius-4: 4px;
  --radius-8: 8px;
  --radius-12: 12px;

  /* Shadows */
  --shadow-sm: rgb(136, 136, 136) 0px 0px 1px 0px;
  --shadow-md: rgba(96, 174, 255, 0.16) 0px -5.48px 8px 0px inset, rgba(96, 174, 255, 0.16) 0px 2.61px 2.61px 0px inset;
  --shadow-lg: rgba(14, 18, 27, 0.5) 0px 2px 4px 0px;
  --shadow-xl: rgba(0, 0, 0, 0.02) 0px 1px 1px 1px;
  --shadow-4: rgba(0, 0, 0, 0.25) 0px 4px 16px 0px;

  /* Motion */
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-moderate: 600ms;
  --duration-slow: 2000ms;
  --ease-custom-1: ease;
  --ease-custom-2: cubic-bezier(0.01, 0.81, 0.80, 1.01);
  --ease-custom-3: cubic-bezier(0.34, 1.56, 0.64, 1.00);
  --ease-custom-4: linear;

  /* Iconography */
  --icon-stroke: 1.6;
  --icon-size: 20px;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-bg-canvas: #040719;
  --color-text-primary: #ffffff;
  --color-text-secondary: #999999;
  --color-text-muted: #ffffffcc;
  --color-accent: #5f57ff;
  --color-bg-surface: #000111;
  --color-border: #ffffff1f;
  --color-gray-deep: #000000;
  --color-blue-dark: #0788f5;
  --color-blue-deep: #0a132b;
  --color-blue-dark: #7061fb;
  --color-green-dark: #14701b;

  /* Typography */
  --font-inter: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --text-display: 48px;
  --text-heading-lg: 46px;
  --text-heading: 42px;
  --text-heading-sm: 38px;
  --text-subheading: 32px;
  --text-body: 30px;
  --text-small: 24px;
  --text-caption: 22px;

  /* Shadows */
  --shadow-sm: rgb(136, 136, 136) 0px 0px 1px 0px;
  --shadow-md: rgba(96, 174, 255, 0.16) 0px -5.48px 8px 0px inset, rgba(96, 174, 255, 0.16) 0px 2.61px 2.61px 0px inset;
  --shadow-lg: rgba(14, 18, 27, 0.5) 0px 2px 4px 0px;
  --shadow-xl: rgba(0, 0, 0, 0.02) 0px 1px 1px 1px;
  --shadow-4: rgba(0, 0, 0, 0.25) 0px 4px 16px 0px;

  /* Motion */
  --animate-duration-fast: 200ms;
  --animate-duration-base: 300ms;
  --animate-duration-moderate: 600ms;
  --animate-duration-slow: 2000ms;
}
```

## Rebuild Checklist

Build in this order. Every item carries the measured numbers it needs — nothing here requires going back to the page.

- [ ] Paste the `:root` block from **Design Token System** — 62 custom properties across 6 naming groups. Nothing below should hard-code a value that exists there.
- [ ] Set the type scale: 48 / 46 / 42 / 38 / 32 / 30 / 24 / 22px over 8 steps, Inter + Arial.
- [ ] Set the spacing scale: 1 / 2 / 4 / 6 / 8 / 12 / 16 / 20px on an 8px base unit.
- [ ] Set the radius scale: 1px (other), 4px (other), 8px (button), 12px (button), 16px (card).
- [ ] Define 5 elevation steps, lightest first: `rgb(136, 136, 136) 0px 0px 1px 0px`, `rgba(96, 174, 255, 0.16) 0px -5.48px 8px 0p…`, `rgba(14, 18, 27, 0.5) 0px 2px 4px 0px`.
- [ ] Build the shell: a 1260px max-width centred container with 0px side gutters.
- [ ] Paint the canvas `#040719` and set the body text colour from the palette — this is a dark page.
- [ ] Build the header: 89px tall, background `#000111`, z-index 1000.
- [ ] Fill the nav with the real labels: "Pricing", "Affiliates 25%" plus "Agency Accounts" / "Other Services" / "Resources" on the right.
- [ ] Band 1 — **Hero**: 671px tall, `#000111` background, 602px container, 0px top padding. Headline: "Unlock Limitless Advertising with Whitelisted Agency Ad Acc…".
- [ ] Band 2 — **Content**: 176px tall, `#000111` background, 1255px container, 0px top padding, 2 columns.
- [ ] Band 3 — **Content**: 794px tall, `#000111` background, 998px container, 0px top padding, 3 columns.
- [ ] Band 4 — **Content**: 757px tall, `#000111` background, 1255px container, 80px top padding, 3 columns. Headline: "Limitless Scaling with Agency Ad Accounts Across All Platfo…".
- [ ] Band 5 — **Features**: 2204px tall, `#000111` background, 1255px container, 80px top padding, 2 columns. Headline: "Break Free from Spending Limits, Rejections, and Bans".
- [ ] Band 6 — **Content**: 1185px tall, `#000111` background, 1127px container, 0px top padding, 2 columns. Headline: "Success Stories from Our Clients".
- [ ] Band 7 — **Content**: 487px tall, `#000111` background, 1255px container, 80px top padding, 3 columns. Headline: "Get your Agency Ad Accounts in 3 Simple Steps".
- [ ] Band 8 — **Pricing**: 1805px tall, `#000111` background, 1255px container, 80px top padding. Headline: "Get Your Agency Account Today!".
- [ ] Band 9 — **Content**: 756px tall, `#000111` background, 1024px container, 80px top padding. Headline: "All Packages Come with Guarantees".
- [ ] Band 10 — **Content**: 1136px tall, `#000111` background, 1255px container, 80px top padding. Headline: "Comparison".
- [ ] Band 11 — **Content**: 846px tall, `#000111` background, 1221px container, 80px top padding. Headline: "Book A Quick Call & Get Your Accounts Ready".
- [ ] Band 12 — **Content**: 641px tall, `#000111` background, 1189px container, 80px top padding, 2 columns. Headline: "Get Rewarded for Your Ad Spend".
- [ ] Build the primary button: `#00000000` on `#ffffff` text, 0px radius, 1px 6px padding, Inter 400 16px — 13 instances on the page.
- [ ] Build the secondary button: 1px solid rgba(255, 255, 255,… border, 8px radius, 12px 24px padding, `#ffffff` text.
- [ ] Build the card: `#040719` surface, 16px radius, 20px 20px padding, 1px solid rgba(255, 255, 255,… border, flat — 11 instances.
- [ ] Build the text input: 13px tall, 0px none #ffffff border, 0px radius, Inter 14px.
- [ ] Wire hover states in the page's own language — *color* on 13 of 17 archetypes. Copy the deltas from the state matrix; do not invent a lift where the page tints.
- [ ] Wire focus: outline scoped to `:focus-visible`, ring `#4d65ff`.
- [ ] Wire disabled states on 1 archetype — copy the exact opacity and cursor from the state matrix rather than graying by eye.
- [ ] Set the transition recipe: fast 200ms, base 300ms, moderate 600ms, easing `ease`.
- [ ] Wire the scroll reveal: `transform` on transform over 300ms, fired once by IntersectionObserver.
- [ ] Add the breakpoint ladder: ≤479px / ≤767px / ≥768px / ≤991px / ≥1280px / ≥1440px / ≥1920px, mixed.
- [ ] At mobile widths: collapse the nav; drop 4 grids to one column; shift spacing -29%; shift type -19%.
- [ ] Accessibility polish before shipping: 96% of text already clears 4.5:1 — fix the remainder rather than copying it; 32 tap targets sit under 44px — pad them out; no `prefers-reduced-motion` handling exists — add it; there is no skip link — add one.

## Extraction Coverage

What was actually measured, and where the measurement stops. Read this before trusting a number above.

- **Scan:** 3724 elements styled · viewport 1350×949px · elapsed 5548ms.
- **Deep pass:** mode `full`, 24 scroll passes over 24 planned steps of 759px.
- **Page:** 17373px tall (18.3 viewports).
- **Lazy loading:** DOM went 3944 → 3944 nodes.
- **Virtualised list detected**. Anything measured inside it is a sample, not the whole list.
- **Frames:** 3 iframes, 2 cross-origin and therefore unreadable.
- **Bands sampled:** 12 viewport-height slices — they do not cover the whole page.
- **Stylesheets:** 14 read, 16 blocked by CORS, 12 recovered by refetch — rules in the blocked sheets are invisible to every section above.
- **States & overlays:** 8 hidden surfaces revealed and measured; 17 component archetypes resolved from 185 indexed pseudo-state rules; 12 live focus probes.
- **Restoration:** verified — every injected style and attribute was removed after measuring.
- **Inventory:** 17 sections · 16 grid containers · 20 stacking layers · 40 images, 4 font faces · 14 copy bands · 62 custom properties · 7 breakpoints analysed.

### Limits reached during the scan

- 2 cross-origin iframes skipped
- 52 further hidden overlays not measured (cap 8)
- background-image hunt capped at 1200 elements
- page has 17 top-level sections; first 14 captured
- 6 component/width-scoped var blocks skipped
- page captured in dark mode; no light variant found

## Known Gaps

- 2 cross-origin iframes skipped
- assets: background-image hunt capped at 1200 elements
- assets: 16 cross-origin stylesheets could not be read for @font-face rules
