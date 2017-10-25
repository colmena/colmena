# Base image
FROM node:8

# Add application folder
RUN mkdir /app
WORKDIR /app

# Copy over the whole app
COPY . .

# Remove any local configuration settings
RUN touch /app/apps/api/config/local.yaml
RUN rm /app/apps/api/config/local*

# Install global dependencies
RUN npm install -g lerna pm2

# Clean up any node_modules we copied over
RUN npm run clean

# Install dependencies
RUN npm install

# Wire up the project with lerna
RUN lerna bootstrap

# Build the Angular app and copy it into the API project
RUN npm run build

# Expose the listening port
EXPOSE 3000

ENV API_PORT 3000
ENV API_HOST 0.0.0.0
ENV API_BASE_URL /
ENV STORAGE_PATH /tmp

# Start the server
CMD ["pm2-docker", "start", "npm", "--", "start"]
