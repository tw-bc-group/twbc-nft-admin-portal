FROM node:16-alpine as common-build-stage

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
