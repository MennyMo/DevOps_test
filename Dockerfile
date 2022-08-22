FROM node:14.18.0

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 80

CMD [ "npm", "start" ]