FROM node:12

WORKDIR /usr/src/frontApp

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
