# Use a lightweight Node image as the base
FROM node:16-alpine AS build-stage

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend app
COPY . .

# Switch to a smaller image for production
FROM node:16-alpine

WORKDIR /app

# Copy the production-ready frontend build (replace with your build command)
COPY build/ .

# Expose the React app port (typically 3000)
EXPOSE 3000

# Start the React app (replace with your start command)
CMD [ "npm", "start" ]
