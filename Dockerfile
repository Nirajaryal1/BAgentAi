# Use official Node.js runtime as a parent image
FROM node:20-slim

# Create app directory
WORKDIR /usr/src/app

# Install dependencies first (cache layers)
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Cloud Run uses
ENV PORT 8080
EXPOSE 8080

# Start the app
CMD ["npx", "next", "start", "-p", "8080"]
