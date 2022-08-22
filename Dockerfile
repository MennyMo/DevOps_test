FROM node:14.18.0

WORKDIR /app

COPY . /app

RUN npm install
RUN npm install nodemon --save-dev


EXPOSE 80

CMD [ "npm", "start" ]