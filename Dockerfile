FROM node:14-alpine

ENV APP_ROOT /app/

RUN mkdir -p ${APP_ROOT}
WORKDIR ${APP_ROOT}

COPY package*.json ${APP_ROOT}
RUN npm install

COPY . ${APP_ROOT}
RUN npm run build

ENV NODE_ENV=production

CMD [ "npm", "start" ]