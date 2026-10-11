# deep-legal-dive

A legal document exploration UI — React front-end for searching and reading through
case material.

> **Status:** front-end scaffold. Initially generated with
> [Lovable](https://lovable.dev) (see `.lovable/`) and extended from there. The UI
> shell is substantially complete; it is not wired to a production backend.

## Stack

React · TypeScript · Vite · TanStack Router · shadcn-style UI primitives
(`src/components/ui/`) · Bun as the package manager (`bun.lock`)

## Run it

```bash
git clone https://github.com/Zephyr4772/deep-legal-dive.git
cd deep-legal-dive
bun install        # or: npm install
bun run dev        # or: npm run dev
```

## Layout

```
src/
  routes/          TanStack Router route tree
  components/ui/   primitives — sidebar, chart, menubar, dropdown, etc.
```

## Related

For the working retrieval system over Supreme Court judgments, see
[**lex-ai**](https://github.com/Zephyr4772/lex-ai) — that's where the RAG pipeline,
vector index and backend live. This repo is the lighter UI exploration.

## Limitations

- Scaffolded UI: many primitives are unused boilerplate from the component library.
- No backend integration.
- No tests.
