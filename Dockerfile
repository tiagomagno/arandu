# syntax=docker/dockerfile:1.4
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
