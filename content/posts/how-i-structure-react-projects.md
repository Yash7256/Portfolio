---
title: How I structure React projects
date: 2024-09-14
excerpt: A feature-first folder layout that keeps related code together and makes finding things predictable as a codebase grows.
tags: [React, Architecture, TypeScript]
---

Every React project I have joined had the same slow drift. Files pile into a flat `components` folder, then a `utils` folder, then someone adds `hooks` and `services`. Six months in, nobody is sure where a new file belongs. I stopped organizing by file type and started organizing by feature.

## Feature folders over type folders

Instead of grouping every button in one place, I group everything a feature needs into one folder. A `billing` feature owns its components, hooks, types, and API calls. When you work on billing, you open one directory.

```text
src/
  features/
    billing/
      components/
        PlanCard.tsx
        InvoiceList.tsx
      hooks/
        useSubscription.ts
      api.ts
      types.ts
    auth/
      components/
      hooks/
      api.ts
  components/   # truly shared, like Button and Modal
  lib/          # pure helpers with no React
```

The rule is simple: if it is only used by one feature, it lives in that feature. It graduates to `components/` the moment a second feature needs it.

## Colocation beats clever imports

The related code belongs next to the code that uses it. A hook that exists only to support one component sits beside that component, not three folders away. The moment you have to scroll an import list to understand a file, the structure is working against you.

## Keep the shared layer small and boring

Shared components should be genuinely generic. A `Button` that accepts every possible prop eventually becomes a second framework. I keep the shared layer to primitives that do not change often, and let features own the opinionated compositions.

## Boundaries are the point

The real benefit is not tidiness. It is that features become legible boundaries. You can read one folder and understand one capability. You can delete a feature by deleting one folder. Refactors have a blast radius you can reason about.

This is not a silver bullet. Cross-feature state still needs a home, and you still need discipline about what counts as shared. But it has scaled better for me than any `components`-plus-`utils` layout ever did.
