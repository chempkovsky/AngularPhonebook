################################################################
# Build the app in the separate image which is node:latest
################################################################
FROM node:latest as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build --configuration=ru --prod --output-path=/dist/angular-phonebook
RUN mv /dist /ru
RUN ng build --configuration=en --prod --output-path=/dist/angular-phonebook
RUN mv /dist /en


################################################################
# Copy form node:latest image into  nginx:latest and exec "CMD"
################################################################
FROM nginx:latest as nginxrslt
COPY nginxdefault.conf /etc/nginx/conf.d/default.conf
COPY --from=build /ru/angular-phonebook/ru/ /usr/share/nginx/html/angular-phonebook/ru/
COPY --from=build /en/angular-phonebook/en/ /usr/share/nginx/html/angular-phonebook/en/
COPY ./startnginx.sh /
RUN chmod +x /startnginx.sh
CMD ["/startnginx.sh"]
## CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/angular-phonebook/ru/assets/app-config.template.json > /usr/share/nginx/html/angular-phonebook/ru/assets/app-config.json && envsubst < /usr/share/nginx/html/angular-phonebook/en/assets/app-config.template.json > /usr/share/nginx/html/angular-phonebook/en/assets/app-config.json &&  exec nginx -g 'daemon off;'"]
