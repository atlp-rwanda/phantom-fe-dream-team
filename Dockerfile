FROM node:alpine

WORKDIR /user/app

COPY package.json .
COPY package-lock.json ./
RUN npm install --force
COPY . .
EXPOSE 3000
CMD ["npm","run","dev:start"]
