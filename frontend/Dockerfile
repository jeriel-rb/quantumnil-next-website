# Stage 1: Build the Next.js app
FROM node:22-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# Stage 2: Run the app using standalone output
FROM node:22-alpine
WORKDIR /app

# Copy build output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
