ARG VUE_APP_BASE_URL

# build stage
FROM node:lts-alpine as build-stage

WORKDIR /usr/app

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .

ARG VUE_APP_API
ENV VUE_APP_API=$VUE_APP_API

ARG VUE_APP_BASE_URL
ENV VUE_APP_BASE_URL=$VUE_APP_BASE_URL

RUN yarn build

# production stage
FROM httpd:2.4 as production-stage

ARG VUE_APP_BASE_URL
ENV VUE_APP_BASE_URL=$VUE_APP_BASE_URL

COPY ./docker/httpd.conf /usr/local/apache2/conf/httpd.conf

COPY --from=build-stage /usr/app/dist /usr/local/apache2/htdocs${VUE_APP_BASE_URL}

EXPOSE 80
