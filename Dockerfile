# Base image
FROM node:7.9-alpine

# Set NPM Log Level to reduce output
ENV NPM_CONFIG_LOGLEVEL warn

# Set version numbers
ENV NODE_SASS_VERSION 4.5.3
ENV LERNA_VERSION 2.0.0-rc.5
ENV ANGULAR_CLI_VERSION 1.1.2
ENV PM2_VERSION 2.5.0

# Install global packages
RUN npm install -g \
  node-sass@${NODE_SASS_VERSION} \
  lerna@${LERNA_VERSION} \
  @angular/cli@${ANGULAR_CLI_VERSION} \
  pm2@${PM2_VERSION}

# Add application folder
RUN mkdir /app
WORKDIR /app

# Copy over the whole app
COPY . .

# Copy docker.yaml into the API to overwrite config settings
COPY docker.yaml /app/apps/api/config/local.yaml

# Clean up any node_modules we copied over from our project dir
RUN npm run clean

# Install dependencies
RUN npm install

# Wire up the project with lerna
RUN lerna bootstrap

# Build the Angular app and copy it into the API project
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Start the server
CMD ["pm2-docker", "start", "npm", "--", "start"]
