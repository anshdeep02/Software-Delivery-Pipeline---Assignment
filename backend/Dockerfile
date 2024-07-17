# Use a lightweight Node image as the base
FROM node:16-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the backend code
COPY . .

# Expose the Express server port (typically 3000)
EXPOSE 3000

# Start the Express server (replace with your start command)
CMD [ "npm", "start" ]
