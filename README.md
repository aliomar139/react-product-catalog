# React Product Catalog

**A product catalog built as a React lab exercise: component state, lists, filtering, controlled
forms, and cart totals.**

<p>
  <img alt="React" src="https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white">
</p>

## What it covers

- Product cards rendered from state, with optional discount pricing
- Search and category filtering over the same list
- A cart summary tracking item count and running total, discounted price included
- Adding new products through a controlled form
- A flat, minimal theme in a single stylesheet

## Tech

React 18 · Vite 5 · JavaScript (ES6+) · CSS

## Running it

The Vite project lives in `react-labs-5-7/`:

```bash
cd react-labs-5-7
npm install
npm run dev
```

Vite prints the local URL, by default <http://localhost:5173>.

## Layout

```
react-labs-5-7/
├── src/
│   ├── App.jsx                 catalog state and composition
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── AddProductForm.jsx
│   │   └── CartSummary.jsx
│   └── styles/lab-theme.css
└── ../React_Lab_Ch05-07_Student.md   the lab brief this was built from
```
