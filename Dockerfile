# Use lightweight Nginx image
FROM nginx:alpine

# Remove default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy project files
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY src/ /usr/share/nginx/html/src/

# Expose web server port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
