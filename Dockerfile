# Phase 1: Build the React application
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Phase 2: Serve the static files with Caddy
FROM caddy:2-alpine

# Copy Caddyfile to the default configuration path
COPY Caddyfile /etc/caddy/Caddyfile

# Copy the built assets from the builder stage and set the correct ownership in one step.
# The 'caddy' user and group are provided by the official Caddy image.
COPY --from=builder --chown=caddy:caddy /app/dist /usr/share/caddy

# Explicitly set the command to run Caddy. This is inherited from the base image,
# but being explicit is safer for production deployments.
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
