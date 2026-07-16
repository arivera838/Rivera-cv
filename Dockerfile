FROM node:20-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Instalar dependencias basado en package-lock.json
COPY package.json package-lock.json* ./
RUN npm ci

# Recompilar el código fuente solo cuando sea necesario
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Deshabilitar telemetría de Next.js durante la compilación
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Imagen de producción, copiar todos los archivos y ejecutar next
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Configurar permisos correctos para la caché de prerenderizado
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Aprovechar automáticamente el rastreo de archivos de salida para reducir el tamaño de la imagen
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# server.js es creado por next build cuando se usa output: 'standalone'
CMD ["node", "server.js"]
