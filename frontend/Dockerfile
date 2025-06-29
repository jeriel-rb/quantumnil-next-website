# Stage 1: Build
FROM node:22-alpine AS builder

# Enable Corepack and install Yarn 4.5.3
RUN corepack enable
RUN corepack prepare yarn@4.5.3 --activate

WORKDIR /app

# Copy everything and install deps
COPY . .

RUN yarn install --immutable
RUN yarn build

# Stage 2: Production image
FROM node:22-alpine

WORKDIR /app

# Copy only what is needed to run Next.js
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
