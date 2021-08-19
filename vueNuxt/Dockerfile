FROM node:16-alpine

ENV APP_ROOT /web/front

WORKDIR ${APP_ROOT}

COPY package*.json ./

RUN npm install

COPY . ${APP_ROOT}

EXPOSE 3000
CMD npm run dev
