FROM mhart/alpine-node:7

RUN apk add --update bash git \
    && rm -rf /var/cache/apk/*

RUN mkdir /app
WORKDIR /app
ADD package.json /app/package.json
RUN npm install

COPY . /app

EXPOSE 3000
CMD [ "npm", "run", "prod" ]
