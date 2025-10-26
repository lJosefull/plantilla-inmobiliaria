# syntax=docker/dockerfile:1.6
# Multi-stage Dockerfile para Next.js (producción) usando PNPM con cachés

# Etapa de build: instala dependencias con PNPM y compila
FROM node:20-bookworm-slim AS builder
WORKDIR /app

# Habilitar Corepack para usar pnpm
RUN corepack enable

# En build necesitamos devDependencies para PostCSS/Tailwind
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Instalar dependencias con cache eficiente
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm pnpm fetch
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm pnpm install --frozen-lockfile --prefer-offline

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

# Cache del build de Next para compilaciones repetidas
ARG TURBO=0
RUN --mount=type=cache,id=next-cache,target=/app/.next/cache \
    sh -lc 'if [ "$TURBO" = "1" ]; then pnpm run build:turbo; else pnpm run build; fi'

# Etapa de runtime: Node + artefactos standalone
FROM node:20-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3001

# Copiar build standalone y estáticos
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3001
USER node

CMD ["node", "server.js"]