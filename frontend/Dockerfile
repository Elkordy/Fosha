# Dockerfile for the frontend (Landing Page)
FROM nginx:alpine

# Copy the custom NGINX configuration file
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Copy the landing page into the NGINX directory
COPY ./landing-page /usr/share/nginx/html

# Expose port 80 for the web server --
EXPOSE 80
