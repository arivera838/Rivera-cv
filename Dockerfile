# Etapa 1: Dependencias
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --include=dev

# Etapa 2: Compilación
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Etapa 3: Producción con Express
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 expressjs

# Copiar archivos de paquetes e instalar dependencias de producción únicamente
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Copiar el archivo del servidor Express, datos de portafolio y build estático de Vite
COPY server.js ./
COPY src/lib/data.js ./src/lib/data.js
COPY --from=builder /app/dist ./dist

USER expressjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
