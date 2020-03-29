FROM node:10.13-alpine
ENV NODE_ENV production
ENV MONGODB_URI mongodb://host.docker.internal:27017
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD node server.js