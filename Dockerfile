FROM node:16-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "yarn.lock", "./"]

RUN yarn

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
