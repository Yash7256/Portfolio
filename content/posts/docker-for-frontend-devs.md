---
title: Docker for frontend devs
date: 2024-10-21
excerpt: A practical mental model for containers, plus a multi-stage Dockerfile that keeps Node images small enough to ship.
tags: [Docker, DevOps, Node.js]
---

For most of my career Docker was "the thing backend engineers configure." I used it to run Postgres locally and avoided it otherwise. That was a mistake. Containers solved real problems in my deploy pipeline once I stopped treating them as ops-only.

## A container is a process, not a machine

The mental model that finally clicked: a container is just a normal process that happens to see a private view of the filesystem and network. An image is the frozen filesystem that process starts from. That is why images should be small and why you do not run an SSH server inside one.

## Multi-stage builds are the whole trick

A plain Node image ships your source, your dev dependencies, and your build tooling to production. That is hundreds of megabytes and a bigger attack surface. Multi-stage builds let you install and build in one stage, then copy only the result into a slim runtime stage.

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

The final image never sees your source or your dev toolchain. It starts faster, pulls faster, and leaks less.

## Layer caching is about order

Docker caches each layer and rebuilds from the first layer that changed. That is why you copy `package.json` and install dependencies before copying the rest of your source. Your dependency install stays cached as long as the lockfile does not change, which is most of the time.

Reordering those two `COPY` steps cut my rebuild times from minutes to seconds.

## What surprised me

The biggest win was not production. It was reproducible local environments. `docker compose up` gave every contributor the same Node version, the same services, and the same ports, without a README full of manual steps.

Start with one service. Get comfortable with the layer cache. The rest follows.
