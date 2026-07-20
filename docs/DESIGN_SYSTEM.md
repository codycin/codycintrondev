# Portfolio Design System

## Character

Dark-first, modern, and technically credible. The interface should feel like a well-built product surface—not a gaming dashboard, résumé template, or cyberpunk theme. Surfing appears through abstract current and contour lines. Strength training and nutrition appear through relevant project content.

## Color tokens

| Role                 | Value     |
| -------------------- | --------- |
| Page background      | `#06101F` |
| Alternate background | `#081629` |
| Primary surface      | `#0D1E34` |
| Raised surface       | `#122842` |
| Primary blue         | `#3B82F6` |
| Bright blue          | `#60A5FA` |
| Deep blue            | `#1D4ED8` |
| Primary text         | `#EDF5FF` |
| Secondary text       | `#B3C3D6` |
| Muted text           | `#8498AF` |
| Construction amber   | `#F59E0B` |
| Active green         | `#34D399` |

Amber is reserved for Build Lab state. Green indicates approved active availability or status. Neither color is used without a text label.

## Typography

- System sans-serif for all product and editorial copy.
- Monospace only for compact labels, statuses, route numbers, and technical annotations.
- Route headings use fluid `clamp()` sizing and tight letter spacing.
- Body text remains left-aligned with comfortable line lengths.

## Surfaces and layout

- Maximum content width: `1180px`.
- Dark navy replaces pure black.
- Borders communicate grouping and status; they are not applied to every element.
- Cards use small elevation, restrained surface changes, and no essential hover-only content.
- Section spacing is generous and fluid across viewports.

## Motion

- CSS transforms and opacity only for primary interaction feedback.
- Hero contours, status pulses, and the Build Lab crane are intentionally subtle.
- Route changes use React Router view transitions where supported.
- `prefers-reduced-motion: reduce` collapses animation and transition durations.

## Accessibility

- Every route has one primary `h1`.
- All interactive controls have visible `:focus-visible` outlines.
- A skip link targets `#main-content`.
- Status always includes text, not color alone.
- Mobile navigation exposes `aria-expanded`, closes on Escape and route selection, and prevents background scrolling.
- Sticky navigation is accounted for through `scroll-padding-top`.

## Responsive checkpoints

Validate at 360, 390, 768, 1024, and 1440 pixels. Cards collapse from three columns to two and then one. Project screenshots use intrinsic dimensions. No component may introduce horizontal page overflow.
