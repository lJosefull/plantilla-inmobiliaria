# syntax=docker/dockerfile:1.4
# Multi-stage Dockerfile para Next.js (producción) con Bun en build

# Etapa de build: instala dependencias con Bun y compila
FROM oven/bun:1-alpine AS builder
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Instalar dependencias con cache eficiente usando Bun
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,target=/root/.bun bun install

# Copiar solo lo necesario para reducir el contexto y mejorar cache
COPY app ./app
COPY components ./components
COPY lib ./lib
COPY public ./public
COPY styles ./styles
COPY next.config.mjs ./next.config.mjs
COPY tsconfig.json ./tsconfig.json
COPY postcss.config.mjs ./postcss.config.mjs
COPY components.json ./components.json

# Cache del build de Next para compilaciones repetidas; corre scripts con Bun
RUN --mount=type=cache,target=/app/.next/cache bun run build

# Etapa de runtime: Node (máxima compatibilidad) + artefactos standalone
FROM node:20-alpine AS runner
WORKDIR /app

RUN apk add --no-cache libc6-compat \
  && addgroup -g 1001 -S nodejs \
  && adduser -S -u 1001 nextjs

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copiar build standalone y estáticos
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
USER nextjs

CMD ["node", "server.js"]