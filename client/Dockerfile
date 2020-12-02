FROM node:latest

RUN mkdir -p /usr/src/app

COPY package*.json ./

RUN npm install
 
COPY . .

WORKDIR /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]