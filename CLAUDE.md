# NohoRooms

## Project Description
Property management website targeting young professionals. Airbnb-inspired design — friendly, warm, and clean. Bare-bones approach: landing page routes visitors to the right experience. Static site, no backend.

## Tech Stack
- HTML5 (semantic markup)
- CSS3 (custom properties, flexbox/grid, mobile-first)
- Vanilla JavaScript (no frameworks, no build tools)
- Google Fonts: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) (Airbnb Cereal-style)

## Design System

### Colors
| Token              | Value     | Usage                        |
|--------------------|-----------|------------------------------|
| `--color-primary`  | `#ff385c` | Coral — logo, accents        |
| `--color-primary-hover` | `#e0314f` | Darker coral for hover states |
| `--color-dark`     | `#222222` | Headings, body text          |
| `--color-white`    | `#ffffff` | Card surfaces                |
| `--color-bg`       | `#f7f7f7` | Page background              |
| `--color-border`   | `#dddddd` | Card borders                 |
| `--color-text-light` | `#717171` | Secondary text, captions   |

### Typography
- Font family: `'Nunito Sans', sans-serif`
- Headings: 700 weight
- Body: 400 weight, 1.6 line-height

### Components
- Cards: white background, `border-radius: 12px`, subtle shadow + lift on hover, clickable as links
- Landing logo: centered, primary color, 2.5rem

## File Structure
```
nohorooms/
├── CLAUDE.md
├── .gitignore
├── index.html          # Landing page — 3 routing cards
├── css/
│   └── styles.css      # Single stylesheet
├── js/
│   └── main.js         # Shared JS (minimal for now)
└── images/             # Static image assets
```

## Pages

### Landing (`index.html`)
- Centered layout (full viewport height)
- "NohoRooms" logo at top
- 3 card-style buttons: For Tenants, For Owners, For Everyone Else
- Cards use `.card` component with `<a>` tags (placeholder `#` links for now)
- Sub-pages (tenants, owners, etc.) will be added later

## Conventions
- Semantic HTML elements
- CSS class names: kebab-case (e.g., `.card-grid`, `.card-icon`)
- CSS custom properties in `:root` for all design tokens
- Mobile-first responsive design (base = mobile, `min-width` media queries for larger)
- All pages link to `css/styles.css` and `js/main.js`
- Google Fonts loaded via `<link>` in `<head>`
