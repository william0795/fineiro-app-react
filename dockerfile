#STEP 1 BUILD OF REACT PROJECT
#FROM node:16.10.0 AS build
FROM node:latest AS build

WORKDIR /app

COPY package.json ./

#solventa el conflicto de las dependencias
RUN npm install --legacy-peer-deps

#RUN npm install
RUN npm install --force

COPY . .

RUN npm run build


#Step 2 Create NGINX SERVER
FROM nginx:1.19.0-alpine AS prod-tage

COPY --from=build /app/build /usr/share/nginx/html

#Configuracion de proxy
COPY --from=build /app/nginx.conf /etc/nginx

COPY --from=build /app/mime.types /etc/nginx

EXPOSE 8088

CMD ["nginx", "-g","daemon off;"]
