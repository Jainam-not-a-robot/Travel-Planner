# Use an official Node.js runtime as a base image
FROM node:18-alpine AS base

# Set working directory inside the container
WORKDIR /src

# Copy package files first (for efficient caching)
COPY package*.json ./

# Install dependencies (no dev deps in production)
RUN npm ci --only=production

# Copy the rest of the app source code
COPY . .

# Expose the port your app runs on (change if needed)
EXPOSE 8000

# Set environment variables
ENV NODE_ENV=production

# Start the app
CMD ["npm", "start"]
