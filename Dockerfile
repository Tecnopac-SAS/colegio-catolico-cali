FROM --platform=linux/amd64 node:18

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

# Añade comandos de depuración
RUN node -v
RUN which node
RUN ls -l /usr/local/bin/node
RUN ls -l /usr/src/app/node_modules/.bin

COPY . .

ENV NODE_ENV production

EXPOSE 3000

CMD [ "npm", "run", "start"]