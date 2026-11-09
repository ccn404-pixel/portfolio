# Natalia Caicedo Cano — Portfolio

Portfolio site for **Natalia Caicedo Cano**, Marketing Director & Creative Strategist (Cali, Colombia / Remote). The site presents a set of in-depth case studies followed by a broader grid of additional work, spanning brand identity, web design, paid social, motion/data design, and AI-assisted creative direction.

**LinkedIn:** [linkedin.com/in/ncaicedocano](https://linkedin.com/in/ncaicedocano)

## What's inside

Three featured case studies, each with challenge / role / work / result:

- **Soltec Salud (HealthTech)** — positioning and creative direction for an AI clinical layer inside a hospital information system: a typographic motion reel, a webinar data reel, and the HospitalSIIS print brochure.
- **Pediatric Health (US clients)** — web design and paid-social creative making two specialized US pediatric practices (TC TOTs Airway Center, Stuart Pediatric Dentistry) feel approachable to anxious parents.
- **Brand Identity** — identity systems designed to hold up from logo to real-world use, across 4Dmedical, Potus, and Café a.m.

Plus a "More work" grid pulling in additional shipped projects: Saku (app UI/UX), 8M — Women in Tech (paid social), Barra y Licores JL (brand identity), Platero (AI-directed image concepts), Soltec Salud corporate web, Tachyon IT (sub-brand identity), Earth's Healing Colombia (investor editorial), and Ingeniería y Equipos (web design).

## Stack

Plain HTML/CSS/JS — no framework, no build step. Shared project data lives in `data.js`, consumed by `index.html` to render the "More work" grid and media tags.

## Running locally

Just open `index.html` in a browser, or serve it with any static server, e.g.:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

```
index.html          — the site
data.js              — shared project/work data
assets/images/       — case study and work images
assets/videos/       — motion reels used in the Soltec Salud case study
```
