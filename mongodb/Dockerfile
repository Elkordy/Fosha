# Use the official MongoDB base image
FROM mongo:latest

# Set environment variables for MongoDB
#ENV MONGO_INITDB_ROOT_USERNAME=admin
#ENV MONGO_INITDB_ROOT_PASSWORD=secret
# Outside in the env 


# Copy any custom configuration files if needed
# COPY mongod.conf /etc/mongod.conf

COPY init-mongo.js /docker-entrypoint-initdb.d/

# Expose the default MongoDB port
EXPOSE 27017

# Command to run MongoDB
CMD ["mongod"]
