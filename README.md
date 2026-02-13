# Taskus

__`Taskus`__ — a lightweight, colorful, privacy-first PWA for notes & todos built with __plain HTML/CSS/JS__ (no frameworks).  
This repo contains the static, client-first version (PWA + IndexedDB). A separate `saas` branch will host the full-stack version.

## Features (MVP)

- Create notes & tasks (Markdown support)
- Offline-first with IndexedDB
- PWA installable (manifest + service worker)
- Export/import (JSON, Markdown, .ics)
- Encrypted shareable payloads (client-side)
- Basic AI features (local light-weight models / optional plugin)

## Quick start (local dev)

Clone:

```bash
git clone https://github.com/<your-username>/Taskus.git
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

This repo is configured to deploy from `main` to GitHub Pages via GitHub Actions. Push to `main` and the workflow will publish the `public/` artifact.

## Branches

- `main` — production static PWA (always deployable)
- `dev` — day-to-day feature branch
- `saas` — experimental full-stack implementation (server, DB, CI)
- `infra` — infra and CI scripts

## Contributing

See `CONTRIBUTING.md` for how to open issues, run locally, and submit PRs.

## License

MIT -- see __LICENSE__.

## Security

Report security issues per `__SECURITY.md__`.
