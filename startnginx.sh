#!/bin/bash
envsubst < /usr/share/nginx/html/angular-phonebook/ru/assets/app-config.template.json > /usr/share/nginx/html/angular-phonebook/ru/assets/app-config.json
envsubst < /usr/share/nginx/html/angular-phonebook/en/assets/app-config.template.json > /usr/share/nginx/html/angular-phonebook/en/assets/app-config.json
exec nginx -g 'daemon off;'