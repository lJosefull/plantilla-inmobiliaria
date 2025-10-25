# Multi-stage Dockerfile para Next.js (producción)

# Etapa de build: instala dependencias (incluye dev) y compila
FROM node:20-alpine AS builder
WORKDIR /app

# Mejor compatibilidad en Alpine
RUN apk add --no-cache libc6-compat

# Habilitar Corepack para usar pnpm
RUN corepack enable

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Instalar dependencias con cache eficiente
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copiar el resto del código y construir
COPY . .
RUN pnpm build

# Etapa de runtime: solo dependencias de producción + artefactos
FROM node:20-alpine AS runner
WORKDIR /app

RUN apk add --no-cache libc6-compat \
  && addgroup -g 1001 -S nodejs \
  && adduser -S -u 1001 nextjs

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Instalar solo dependencias de producción
COPY package.json pnpm-lock.yaml ./
RUN corepack enable \
  && pnpm install --frozen-lockfile --prod

# Copiar artefactos de build y estáticos
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
USER nextjs

CMD ["pnpm", "start"]