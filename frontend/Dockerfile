# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first (caching layer)
COPY package*.json ./
COPY package-lock.json ./

# Install dependencies (including devDependencies for build)
RUN npm ci

# Copy the rest of the app
COPY . .

# Disable telemetry and ESLint for faster build
ENV NEXT_TELEMETRY_DISABLED=1

# Build the app
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only what’s needed from the builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Expose default Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
