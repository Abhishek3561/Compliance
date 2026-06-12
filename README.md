# Compliance Website — React Frontend

A responsive landing page built with React for a compliance services company targeting research analysts. The project covers three core sections: Navbar, Hero, and Features.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   └── Features/
│       ├── Features.jsx
│       ├── FeatureCard.jsx
│       └── Features.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css

public/
└── assets/
    ├── Logo.png
    ├── Contact-icon.png
    ├── Menu.png
    ├── Banner Image.png
    ├── underline-Vector.png
    ├── Vector1.png
    ├── Vector2.png
    ├── Section2-Image.png
    ├── check-sign.png
    ├── Regulatory Clarity.png
    ├── Hassle-Free Filings Clarity.png
    └── Risk Protection.png
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## Tech Stack

- **React 18** with Vite
- **Plain CSS** (no CSS framework)
- **Google Fonts** — Roboto (loaded via `index.css`)

---

## Components

### Navbar

- Displays logo, nav links, and a "Contact Us" button on desktop
- At **≤ 992px** (tablet): contact button hides, hamburger menu appears
- At **≤ 768px** (mobile): slide-in drawer with close button, overlay backdrop, and contact button inside the drawer
- Active link highlighted in blue (`#4c5ceb`)

### Hero

- Two-column layout: content on the left, banner image on the right
- H1 typography follows design spec: **64px desktop / 54px tablet / 38px mobile**
- "Compliance" text is highlighted in blue with an underline vector image
- Three bullet points with check icons
- Two CTA buttons: "Get Started" (filled) and "Book A Consultation" (outlined)
- The banner image (`Banner Image.png`) already contains the rating card, trusted-by card, and arrow decorations — no duplicate HTML elements needed

### Features

- Light blue-gray section background (`#f8f9fd`)
- Two-column header: heading with decorative arrow on the left, description paragraph on the right
- Below that: illustration image on the left, three feature cards on the right
- Cards are white with a blue border highlight on hover
- `Vector1.png` (decorative shape) is hidden on tablet and mobile to prevent layout overflow
- Arrow (`Vector2.png`) is absolutely positioned below the heading

---

## Typography Scale

All sizes use **Roboto** font.

| Element | Desktop | Tablet | Mobile | Weight |
|---|---|---|---|---|
| H1 | 64px / lh 85px | 54px / lh 75px | 38px / lh 48px | 700 |
| H2 | 48px | 40px | 30px | 700 |
| Body | 18px / lh 32px | 18px / lh 32px | 16px / lh 28px | 400 |
| Body Medium | 18px | 18px | 16px | 500 |

---

## Color Palette

| Name | Hex | Usage |
|---|---|---|
| Primary Blue | `#4c5ceb` | Buttons, active links, accents |
| Dark Text | `#111827` | Headings |
| Body Text | `#1a1a1a` | Nav links |
| Muted Text | `#6b7280` | Card descriptions |
| Section Bg | `#f8f9fd` | Features section background |
| Card Border | `#e6e9f5` | Feature card default border |

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 992px` | Full desktop layout |
| `≤ 992px` | Tablet — stacked hero, hamburger menu shown, features stack vertically |
| `≤ 768px` | Mobile drawer nav activated |
| `≤ 576px` | Mobile features layout |
| `≤ 480px` | Mobile hero layout, buttons go full width |

---

## Known Design Decisions

- The floating cards (rating and trusted-by) visible in the hero are **part of the `Banner Image.png` asset**, not separate HTML elements. Do not add HTML cards on top of the image.
- `Vector1.png` is hidden below 992px — its `position: absolute` with negative offsets causes overflow in stacked/column layout.
- The Features section arrow (`Vector2.png`) uses `position: absolute` and is hidden on tablet/mobile via `display: none`.
