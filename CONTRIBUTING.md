
---

# `CONTRIBUTING.md`

```markdown
# Contributing to Taskus

Thank you for contributing. This file explains how to set up a dev environment, branch rules, PR expectations and the workflow we use.

## Get started locally
1. Fork the repo and clone your fork.
2. Run a local static server:
   - `python -m http.server 8000` or `npx http-server`.
3. Edit files in `app/` (JS, CSS) and open http://localhost:8000.

## Branching model
- Work in `dev` for day-to-day work. Create feature branches from `dev`.
- Branch naming:
  - Features: `feat/<short-description>`
  - Fixes: `fix/<short-description>`
  - Docs: `docs/<short-description>`
- When ready, open PR → target `dev`. After review & CI passing, merge `dev` → `main`.

## Pull request checklist
- [ ] Branch up-to-date with `dev`.
- [ ] Clear title and description referencing an issue (if any).
- [ ] Includes screenshots or recordings for UI changes.
- [ ] No console errors.
- [ ] Code formatted (Prettier style recommended).
- [ ] Tests (if added) pass.

## Issue templates & labels
Use `good first issue` for small tasks. Tag issues with `bug`, `enhancement`, `help wanted`, `docs`.

## Code style
- Keep JS vanilla, minimal dependencies.
- Keep functions small and modular.
- Document public functions with JSDoc-style comments.

## Security & sensitive data
- Never commit API keys or secrets.
- If your change requires a secret for CI, ask maintainers to add it to repo secrets.

## Getting help
Open an issue with `help wanted` or reach out in PR comments.

