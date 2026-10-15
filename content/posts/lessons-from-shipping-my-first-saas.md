---
title: Lessons from shipping my first SaaS
date: 2024-11-10
excerpt: What actually mattered when I took a side project live — billing, onboarding, and the parts I wish I had built first.
tags: [SaaS, Product, Indie]
---

Shipping a side project into something people pay for changed how I prioritize more than any tutorial did. The code was the easy part. Everything around it — billing, onboarding, support, and knowing when to stop building — is where the real work lived.

## Billing is a product surface, not plumbing

I assumed Stripe was a weekend of wiring. It was not. The hard part is every state around a payment: the failed card, the expired trial, the upgrade in the middle of a billing cycle, the invoice that needs a retry. Those states are what users actually see, and they deserve design attention.

I now build the billing states before the happy path. A clean upgrade flow matters more than a clean dashboard.

## Onboarding beats features

My first version had a long feature list and a bare welcome screen. People signed up, clicked around, and left. The fix was not more features. It was a first-run experience that produced a small win in the first two minutes.

The metric that moved was not signups. It was the percentage of new accounts that completed one meaningful action on day one.

## Scope is a sustainability decision

I kept a running list of everything I could build and deliberately did not build. No dark mode. No teams. No public API. Each omission was a decision to protect the time I actually had.

That list was more valuable than the roadmap, because it forced me to defend what made it in.

```ts
// A tiny feature gate kept me honest about scope.
const ROADMAP = {
  billing: true,
  onboarding: true,
  darkMode: false,   // not yet — protects focus
  teams: false,      // not yet — protects focus
  publicApi: false,  // not yet — protects focus
} as const
```

## Support is product research

Every support message is someone telling you where the product failed them. I answered every one personally for the first three months. The patterns in those messages shaped the next several releases more than any analytics dashboard did.

## What I would do again

Ship the boring infrastructure early, design the first-run moment deliberately, and keep a public list of what you are not building. The code is the part you already know how to do.
