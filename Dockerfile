# Build Stage
FROM node:18 as build

WORKDIR /app
COPY . .

RUN npm install && npm run build

# Production Stage
FROM node:20-alpine

WORKDIR /app

# Copy the built frontend files into the Nginx server's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 and 443
EXPOSE 3000

# Run Nginx in the foreground
CMD ["npm", "start"]
