FROM node:16-alpine

ENV APP_ROOT /web/backend
# создание директории приложения
WORKDIR ${APP_ROOT}

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./

RUN npm install
# Если вы создаете сборку для продакшн
# RUN npm ci --only=production

# копируем исходный код
COPY . ${APP_ROOT}

# информируем Докер о порте нашего серва
EXPOSE 3001
CMD  npm run migrate && npm run seeds && npm run start
