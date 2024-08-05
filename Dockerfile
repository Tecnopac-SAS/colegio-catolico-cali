FROM --platform=linux/amd64 node:18

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

EXPOSE 3000