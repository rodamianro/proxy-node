# Deploy container
FROM node:16.9.1-alpine as deploy
# Define work directory
WORKDIR /home/node/app
# COPY app code
COPY . .
# Create node_modules directory and assign the user owner for the app
RUN mkdir -p /node_modules && chown -R node:node ./
# Install dependencies
RUN npm install
# Command to execute
ENTRYPOINT [ "node" ]
# Command params
CMD ["app.js"]
