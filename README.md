# Reverse proxy with node

Project to make reverse proxy using node. This project was made to be deploy with node 16 if it's necessary you can change the version of node updating the package.json and Dockerfile image in the Dockerfile

## ENVIRONMENT CONFIG

To deploy the project you will need to create a .env file in the root project directory with the following variables (the default values to these variables will be in the example):
- PORT: Define in which port the app will being listen
- TARGET_URL: URL to which the proxy will redirect the trafic
```env
# EXAMPLE
PORT=3000
TARGET_URL=http://localhost
```

## Deploy 
### Using Node
To deploy the project with node you will have to execute the following commands in the terminal
```sh
node app.js
```
### Using docker compose
To deploy the project with docker compose you will have add the following variable to .env file:
- DOCKER_PORT: Define which port the service will have to use to expose itself
```env
DOCKER_PORT=3000
``` 
And execute the following commands in the terminal
```sh 
# Build or rebuild the service
docker compose build
# Create and start the container
docker compose up 
```
### Using the docker image
If you prefer only use the docker image you can use the file compose.prod.yml which will deploy the proxy-node project using the image on hub.docker.com using the following command
```sh
# Create and starte the container using the file compose.prod.yml
docker compose -f compose.prod.yml up
```
Or using docker directly like this
```sh
docker run rodamianro/util:proxy-node
```

