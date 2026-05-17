# Aurelian Gallery

A static art gallery website built with HTML, Tailwind CSS (Play CDN), and Google Fonts. Designed to be hosted on GitHub Pages.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home — hero, featured artists, new arrivals |
| `exhibitions.html` | Current, upcoming & past exhibitions |
| `collection.html` | Full collection with masonry grid |
| `artists.html` | Artist profile page |
| `about.html` | Gallery story, philosophy & visit info |
| `inquiry.html` | Acquisition inquiry & contact form |

## Project Structure

```
aurelian_gallery/
├── index.html
├── exhibitions.html
├── collection.html
├── artists.html
├── about.html
├── inquiry.html
├── css/
│   └── styles.css          # Shared custom styles
├── js/
│   └── tailwind.config.js  # Shared Tailwind theme config
└── assets/
    └── images/             # Place local images here
```

## Tech Stack

- **Tailwind CSS** — via Play CDN (no build step required)
- **EB Garamond** — headline typeface (Google Fonts)
- **Manrope** — body & label typeface (Google Fonts)
- **Material Symbols** — icons (Google Fonts)

## Hosting on GitHub Pages

1. Push this folder as a GitHub repository.
2. Go to **Settings → Pages**.
3. Set source to the `main` branch, root folder (`/`).
4. GitHub Pages will serve `index.html` as the site root.

## Development

No build process needed — open any `.html` file directly in a browser, or use a local server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```
