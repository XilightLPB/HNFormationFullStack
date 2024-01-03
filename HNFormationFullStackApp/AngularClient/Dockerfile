FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: ###
FROM nginx:1.17.1-alpine
RUN ls
COPY --from=build /usr/src/app/dist/angular-client /usr/share/nginx/html
EXPOSE 80