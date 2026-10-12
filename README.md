# Obsidian

A small storefront built with React and Vite. Products are loaded from the [Fake Store API](https://fakestoreapi.com/products), and the app has Home, Shop, and Cart pages with client-side routing.

## Tech Stack

- React 19
- React Router 8
- Vite 8
- ESLint

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```
src/
├── App.jsx                  # Routes, cart state, and product fetching
├── main.jsx
├── assets/                  # SVG icons
└── Components/
    ├── Cart/                # Cart.jsx
    ├── Footer/              # Footer.jsx + Footer.module.css
    ├── Header/              # Header.jsx + Header.module.css
    ├── Home/                # Home.jsx + Home.module.css
    ├── Product/             # Product.jsx + Product.module.css
    └── Shop/                # Shop.jsx + Shop.module.css
```

Each component lives in its own folder with its `.jsx` file and a matching CSS Module.
