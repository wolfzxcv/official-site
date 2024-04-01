FROM node:20.12.0-alpine

ENV APP_ROOT /app/

RUN mkdir -p ${APP_ROOT}
WORKDIR ${APP_ROOT}

COPY package*.json ${APP_ROOT}
RUN npm install

COPY . ${APP_ROOT}
RUN npm run build

ENV NODE_ENV=production

CMD [ "npm", "start" ]

# docker build -t [image name] .
# docker run -d -p 3000:3000 [image name] 