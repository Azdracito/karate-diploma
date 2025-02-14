ARG NODE_VERSION=22
FROM node:${NODE_VERSION} AS node_api

# Set working directory
WORKDIR /srv/app

# Upgrade npm to the latest version globally
RUN npm -g install npm@latest

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Set the user to run the application
USER node