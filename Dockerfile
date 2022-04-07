FROM node:16-alpine AS builder

WORKDIR /app
COPY ["package.json", "package-lock.json*", "yarn.lock", "./"]
RUN yarn
COPY . .
RUN yarn build 

FROM node:16-alpine

WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/build ./
EXPOSE 3000

CMD ["serve", "-l", "3000", "-s"]