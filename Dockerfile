FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy project files
COPY . .

# Build the Vite frontend
RUN npm run build

# Prune devDependencies to reduce image size (optional, but since we need tsx, we keep it)
# tsx is a dev dependency, so we just keep everything or run it via npx.

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Start the server
CMD ["npx", "tsx", "server.ts"]
