# Quickks Homepage — Frontend Interview Task

React + Vite + Tailwind CSS implementation of the Quickks homepage brief.

## Run in VS Code

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

http://localhost:5173

## Production build

```bash
npm run build
npm run preview
```

## Git submission

```bash
git checkout -b feat/homepage-ui
git add .
git commit -m "feat: add homepage UI"
git push origin feat/homepage-ui
```

Then create a Pull Request from `feat/homepage-ui` to `main`.

## Project structure

- `src/components/Header.jsx` — sticky responsive header
- `src/components/Hero.jsx` — hero/search/book section
- `src/components/ServiceGrid.jsx` — 8 service cards
- `src/components/WhyQuickks.jsx` — trust/benefits section
- `src/components/Footer.jsx` — footer
- `src/data.js` — static service data
- `src/App.jsx` — page composition and search/navigation
- `src/index.css` — Tailwind entry + global styles
