FROM node:12.16.2-alpine3.9
COPY ./front /front
WORKDIR /front
RUN npm install
EXPOSE 3000
ENV CI true
CMD npm start
