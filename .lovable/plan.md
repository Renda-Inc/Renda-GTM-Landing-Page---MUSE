## Scope

Two areas: Footer spacing/hover, and a full redesign of the Careers "Culture & Values / What we believe" section into a vertical image accordion.

---

## 1. Footer (`src/components/landing/Footer.tsx`)

**Column spacing**
- Increase the horizontal gap in the columns grid from `gap-x-8` to a larger value (`gap-x-14 lg:gap-x-20`) so headings like "Personal Banking" / "Business Banking" stay on one line.
- Keep vertical spacing (`gap-y-10`) and per-link spacing (`space-y-2`) untouched.
- Consider widening the container from `max-w-6xl` to `max-w-7xl` to accommodate the wider gaps without squeezing columns.

**Hover state**
- Remove the current `hover:font-semibold` / weight-and-size shift on links and headings.
- New behavior: links default to `text-background` (white). On hover of the columns area, non-hovered links dim to `text-background/60`; the hovered link stays fully white. Implement with a `group` on the columns wrapper and `group-hover:text-background/60 hover:!text-background` on each link. No font-weight or size change.
- Headings remain unchanged (bold white, static).

---

## 2. Culture & Values redesign (`src/components/careers/CultureValues.tsx`)

Replace the current sticky-scroll stacked-cards layout with a horizontal row of six vertical image accordion panels, styled after the editorial overlay from `WorkingPrinciples`.

**Layout**
- Section keeps the "Culture & Values" eyebrow and "What we believe." heading above the accordion (static, left-aligned, matching current typography).
- Below the heading: one row containing six vertical panels inside a `max-w-7xl` container.
- Panel row height: `h-[520px] lg:h-[640px]`, `rounded-2xl overflow-hidden`, `gap-3`, `flex w-full`.
- Panels use `flex-grow` transitions:
  - Active panel: large flex value (e.g. `flex: 6`).
  - Collapsed panels: small flex value (e.g. `flex: 1`), rendering as narrow vertical strips (~80–110px wide depending on viewport).
- Smooth width transitions: `transition-[flex-grow] duration-700 ease-in-out` (use inline `style={{ flexGrow }}` since Tailwind can't animate arbitrary flex values reliably; combine with `transition-all duration-700 ease-in-out`).

**Panel content — active state**
- Full background image of the value's theme (see image list below).
- Dark editorial gradient overlay: `bg-gradient-to-br from-black/70 via-black/35 to-transparent`, matching the "How we work" hero.
- Overlay content anchored top-left with padding `p-8 lg:p-12`:
  - Value title in white, SF Pro Medium, `text-3xl md:text-4xl lg:text-5xl`, tight leading.
  - Supporting description below, white/85, `text-base md:text-lg`, `max-w-md`, comfortable leading.
  - Short horizontal accent line: `h-[3px] w-16 rounded-full` with inline `backgroundColor: "#EB8F00"`.
- Fade content in with `opacity` transition tied to active state.

**Panel content — collapsed state**
- Solid `bg-[#111111]` (image hidden behind it, or image swapped for a flat dark layer via `opacity-0` on the img plus the dark base).
- Only the title is visible, rotated vertically: `writing-mode: vertical-rl; transform: rotate(180deg)` (achieved via inline style), white SF Pro Medium, centered along the strip, small size (`text-sm md:text-base`, tracking-wide).
- Optional small icon at the top (skip if it clutters — plan will use title only for a cleaner look).
- Cursor pointer to signal interactivity.

**Auto-rotation**
- `setInterval` advances the active index every 4000ms, looping 0→5→0.
- Interval is cleared and restarted 6s after any manual click (pause-then-resume).
- Cleanup on unmount.

**Manual interaction**
- Clicking any panel sets it active immediately; previous panel collapses via the same transition.

**Navigation dots**
- Move from the right-middle to bottom-center: a `flex justify-center gap-2 mt-8` row directly under the accordion.
- Preserve current styling (`w-2 h-2` inactive with `bg-black/25`, active becomes `w-6 h-2 bg-foreground rounded-full`, `transition-all duration-300`).
- Clicking a dot also switches the active panel (same handler as panel click).

**Values → imagery mapping** (reuse existing careers imagery to avoid new asset generation; if a value has no obvious fit, use the nearest team photo already in `src/assets/careers/`):
- Intelligence Over Activity → `team-1.jpg`
- Responsibility at Scale → `team-2.jpg`
- Long-Term Over Short-Term → `team-3.jpg`
- Ownership Without Ego → `team-4.jpg`
- Clarity is Kindness → `team-5.jpg`
- Inclusion Improves Intelligence → `team-6.jpg`

(If any of those files don't exist, fall back to the ones referenced today — `team-1.jpg` and `team-5.jpg` — and reuse across missing slots. I'll confirm which files exist during implementation and adjust.)

**Removed**
- Sticky-scroll wrapper, per-scroll active calculation, side dots, the left static image column, and the stacked absolute-positioned value cards.
- The tall `${values.length * 60 + 100}vh` scroll spacer.

---

## Technical notes

- All colors stay in tokens or the two explicit hexes already used elsewhere: `#111111` for collapsed panels, `#EB8F00` for the accent line.
- Typography stays SF Pro via the ancestor `font-family` inherited from the Careers page wrapper.
- Section vertical spacing (`py-16 lg:py-20`) and the surrounding `Divider`s in `src/pages/Careers.tsx` are untouched.
- No other files change beyond `Footer.tsx` and `CultureValues.tsx`.
