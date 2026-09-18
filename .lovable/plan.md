# Renda code quality and icon refresh

## Outcome
Replace the default site icons with the uploaded Renda mark, then improve maintainability, type safety, accessibility, and production readiness without changing any screen’s design, layout, copy, or behavior.

## Implementation
1. **Brand icons**
   - Create optimized square favicon and Apple touch icon files from the uploaded mark.
   - Replace the existing default favicon and update the static HTML icon links.

2. **Shared foundations**
   - Extract repeated font, reveal, divider, eyebrow, and section-heading implementations into shared modules while retaining each existing visual variant.
   - Move reusable page data and validation logic out of large page render files.

3. **Page modularization**
   - Split the largest custom pages into focused section components, prioritizing Business Banking, Personal Banking, About, and Alfie Platform.
   - Keep each page file as a clear composition of its existing sections.
   - Remove confirmed unreferenced legacy components only after checking all imports.

4. **Type safety and production cleanup**
   - Remove the root non-null assertion and production console output.
   - Fix current lint errors, including the conditional hook call.
   - Strengthen route lookup guards, form validation announcements, and interactive control states.
   - Add a top-level error boundary and lazy-load page routes to reduce the initial bundle.

5. **Verification**
   - Run lint, tests, and the production build.
   - Compare representative desktop and mobile screenshots for the homepage, major product pages, Careers, legal pages, and the standalone Alfie Platform microsite.
   - Confirm icon links and generated public icon files.

## Technical notes
- No new visual treatment, copy, route, or product behavior will be introduced.
- Generated design-system UI files will not be reorganized unless required to resolve an existing lint error.
- Strict compiler settings will only be strengthened where the existing code can be migrated safely in this pass.
