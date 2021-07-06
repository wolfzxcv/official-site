FROM node:14-alpine

ENV APP_ROOT /app/
ENV NODE_ENV production

RUN mkdir -p ${APP_ROOT}
WORKDIR ${APP_ROOT}

COPY package*.json ${APP_ROOT}
RUN npm install

COPY . ${APP_ROOT}
RUN npm run build

CMD [ "npm", "start" ]