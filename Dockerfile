FROM node:12.11 as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN  npm install -g n
RUN npm install
RUN npm audit fix
COPY . /app
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/docs /usr/share/nginx/html
