# Business Hero Alignment and Site Consistency

## Scope
- Match all three Business Banking hero messages to the exact About hero text anchor, width, typography, and responsive placement.
- Make the scroll sequence snap promptly between messages while preserving one continuous hero image and natural exit into the next section.
- Audit the live site and source for clear runtime, interaction, accessibility, and visual-token inconsistencies, then fix only issues that follow the established Renda editorial system.

## Implementation
1. Reuse the About hero geometry in the sticky Business hero: vertically centered content, `max-w-7xl`, matching horizontal padding, heading width, size, weight, and line-height.
2. Replace the continuously interpolated message state with three deliberate scroll stages and short opacity/position transitions; synchronize the vertical progress dots to those stages.
3. Normalize obvious cross-page inconsistencies found in the audit, including dark-surface color use, invalid/dead controls, accessible labels, and token/font-loading issues without redesigning page content.
4. Verify the Business hero at desktop and mobile sizes, exercise affected interactions, and confirm the preview build and runtime console are clean.
