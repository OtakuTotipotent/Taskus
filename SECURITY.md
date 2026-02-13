# Security policy

## Reporting a vulnerability

If you discover a security issue, do **not** open a public issue. Instead, contact the maintainers privately:

- Email: security@your-domain-or-github-username (replace with your contact)
- Optionally include: steps to reproduce, affected files, and PoC.

We aim to respond within 72 hours and will coordinate fixes and disclosure.

## Supported versions

- `main` (static PWA) — actively maintained
- `saas` — experimental/staging for server components

## Responsible disclosure

- Do not publish exploit details until a fix is available or coordinator approves disclosure.
- We will credit reporters unless requested otherwise.

## Quick mitigations for contributors

- Do not commit secrets.
- Use Web Crypto APIs for client-side cryptography.
