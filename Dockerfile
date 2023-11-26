FROM node:18-alpine as builder
WORKDIR '/app'
COPY package.json .
COPY server.js .
RUN npm install
COPY . .
RUN npm run start

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html