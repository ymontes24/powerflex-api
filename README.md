# powerflex-api

# Install and Run Project

(Ensure Docker is installed; if not, follow this link to install it: https://docs.docker.com/engine/install/)

1. clone the code challenge repository:

```sh
$ git clone https://github.com/ymontes24/powerflex-api.git
```

2. Navigate to the powerflex-api directory
3. update the local repository

```sh
$ git pull
```

4. start the backend app using Docker compose:
   -This will create and start two Docker containers: one for the Node.js server and another for the MySQL database.
   -Unit tests will be executed.

```sh
$ docker-compose up
```

5. Access the API at http://localhost:3000

# API Documentation

http://localhost:3000/api-docs/
