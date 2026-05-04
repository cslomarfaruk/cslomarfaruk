#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting Deployment for DEV CSL Portfolio..."

# 1. Ensure the docker network exists (just in case)
if ! docker network ls | grep -q "app_admission_net"; then
  echo "🌐 Creating external network app_admission_net..."
  docker network create app_admission_net
fi

# 2. Build the Docker image and start the container
echo "📦 Building and starting the container..."
docker compose up -d --build

# 3. Clean up old unused images to save disk space
echo "🧹 Cleaning up old unused images..."
docker image prune -f

echo "✅ Deployment Successful! The application is now running in the background."
echo "🔗 Domain configured: devcsl.tech and www.devcsl.tech"
