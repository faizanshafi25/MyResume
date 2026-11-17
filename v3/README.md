# Faizan Shafi — Portfolio

A responsive, single-page portfolio built with plain **HTML, CSS and JavaScript**. No frameworks and no build step: open `index.html` and it works.

![Portfolio preview](assets/preview.png)

**Live site:** _add your link after deploying (see [Deployment](#deployment))_

## About the site

This is the personal site of Faizan Shafi, a BCA student at Amar Singh College, Srinagar, who is learning web development. It presents who he is, what he has worked on, and where he is heading.

| Section | What it shows |
| --- | --- |
| Hero | Name, a rotating "Currently" line and a Snapshot card (studying, worked on, learning) |
| About | Short bio and a skills list with honest levels (Completed, Learning, Foundational, Basic) |
| Experience | Software testing, business development and client support at Ematrix Software Solutions (EmvoraERP), with a full write-up and a breakdown of duties |
| Roadmap | Four-step career path from front-end foundations to forward deployed engineering |
| Contact | Email and GitHub links |

## Features

- **Experience-first design:** the Experience section sits on a dark band with a large card: company details, a 7-line summary and four duty blocks
- **Bold, high-contrast look:** cobalt blue, lime and ink, with thick outlines and hard shadows; an animated skills strip and a rotating hero line
- **Fully responsive** layout, tested from phone width up to desktop
- **Accessible by default:** skip link, semantic landmarks, visible keyboard focus, labelled mobile menu (`aria-expanded`, closes with Esc) and `prefers-reduced-motion` support
- **Active-section highlight** in the navigation while scrolling
- **Gentle reveal-on-scroll** using `IntersectionObserver` (disabled for reduced-motion users)
- **Standard cursor** and no loading screen, so nothing gets in the way of the content

## Tech stack

| Area | Details |
| --- | --- |
| Markup | Semantic HTML5 |
| Styling | CSS custom properties, Grid, Flexbox, hard-shadow styling, keyframe animation |
| Behaviour | Vanilla JavaScript (ES6+) |
| Fonts | [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) and [Manrope](https://fonts.google.com/specimen/Manrope) via Google Fonts, with system-font fallbacks |

## Project structure

```
myResume/
├── index.html      # Page content and structure
├── style.css       # Design tokens, layout, themes, responsive rules
├── script.js       # Mobile menu, active nav link, rotating hero line, reveal on scroll
├── assets/
│   └── preview.png # Screenshot used in this README
└── README.md
```

## Run locally

```bash
git clone https://github.com/faizanshafi25/MyResume.git
cd MyResume

# Option 1: just open index.html in your browser
# Option 2: serve it locally
python -m http.server 8000      # then visit http://localhost:8000
```

## Customise

**Colours.** All colours are tokens at the top of `style.css`.

```css
:root {
    --blue: #2433f5;   /* hero, nav, contact */
    --lime: #d4f34a;   /* accent */
    --ink: #0a0d2e;    /* text and Experience background */
}
```

**Add an experience entry.** Copy the `<article class="job reveal">` block in `index.html` and change the company details, summary and duties.

**Roadmap.** Copy a `<li class="step reveal">`. Add `is-current` to highlight the active step.

## Deployment

Because the site is static, any static host works.

**GitHub Pages:** open the repository on GitHub, go to *Settings → Pages*, choose *Deploy from a branch*, select `main` and `/ (root)`, then save. The site will be served at `https://faizanshafi25.github.io/MyResume/`.

**Netlify or Vercel:** import the repository. No build command is needed, and the publish directory is the project root.

## Browser support

Current versions of Chrome, Edge, Firefox and Safari.

## Contact

- GitHub: [@faizanshafi25](https://github.com/faizanshafi25)
- Email: hello@faizanshafi.dev

## License

All rights reserved © 2026 Faizan Shafi. If you want others to reuse the code, add a licence file such as MIT.
