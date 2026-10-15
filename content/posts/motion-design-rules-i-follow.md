---
title: Motion design rules I follow
date: 2025-01-18
excerpt: The handful of timing, easing, and restraint rules that keep interface motion feeling intentional instead of decorative.
tags: [Motion, Frontend, UX]
cover: /gradient.svg
---

Motion is easy to overdo. Early on I animated everything that could move, and the result felt like a toy rather than a product. Over time I landed on a small set of rules I apply to almost every interface. They are less about specific numbers and more about intent.

## Animate what changed, not what appeared

When an element enters because something else left, animate the transition between the two rather than a generic fade. Shared-layout animation is perfect for this. The element keeps its identity, so the eye follows continuity instead of guessing.

## Pick two durations and stick with them

Micro interactions like hover and focus resolve in about 200ms. Larger layout or route transitions sit closer to 400ms. Anything longer starts to feel sluggish, anything shorter feels abrupt. Having a fixed set stops every feature from inventing its own timing.

## Easing should decelerate

Ease-out reads as natural because real objects slow down as they settle. I use a cubic bezier around `[0.16, 1, 0.3, 1]` for almost everything that moves into place. It overshoots nothing and lands crisply.

```tsx
<motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
/>
```

## Respect reduced motion

This is non-negotiable. `useReducedMotion` gates every animation I ship. If a user asks for less motion, content appears in its final state with no transform. Nothing should require movement to be understood.

## Stagger, but only a little

Lists feel alive when items arrive in sequence, but long staggers delay access to content. I cap staggers around 60ms per item and start within 100ms of the container. Enough to read as a wave, not enough to make anyone wait.

The common thread is restraint. Motion should clarify a relationship or confirm an action. If it does neither, it is decoration, and decoration has a cost.
