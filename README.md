# Taskus

__`Taskus`__ — a lightweight, colorful, privacy-first PWA for notes & todos built with __plain HTML/CSS/JS__ (no frameworks).
This repo contains the static, client-first version (PWA + IndexedDB).

## Features (MVP)

- Create notes & tasks (Markdown supported)
- Offline-first with IndexedDB
- PWA installable (manifest + service worker)
- Export/import (JSON, Markdown, .ics, Excel/Google Sheets, CSV, and PDF)
- Encrypted shareable payloads (client-side)
- Cool AI features (local light-weight models or optional plugins)

## Quick start (local dev)

Clone:

```bash
git clone https://github.com/OtakuTotipotent/Taskus.git
cd Taskus
```

Serve locally:

- Python

```Python
python -m http.server 8000
# open http://localhost:8000
```

- Or use `npx http-server`

```bash
npx http-server -c-1
```

## Deploy

This repo is configured to deploy from `main` to GitHub Pages via GitHub Actions.

## Contributing

See `CONTRIBUTING.md` for how to open issues, run locally, and submit PRs. [Click here to read this](./CONTRIBUTING.md).

## License

MIT -- see [__LICENSE__](./LICENSE).

## Security

Report security issues per [__SECURITY.md__](./SECURITY.md).
