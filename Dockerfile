# Use an official Node.js image as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files separately to optimize cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port that Next.js runs on
EXPOSE 3000

# Run the Next.js app in production mode
CMD ["npm", "start"]
