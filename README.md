# Backend Development Workshop
This is the project for the backend development workshop. The goal of this workshop is to build a simple Node.js and Express.js application that goes through the basics of building a REST API with authentication.

This repository is a work in progress.

## Quick Start

### Prerequisites
You need to have Node.js and npm installed on your machine. You can download Node.js from [here](https://nodejs.org/en/download/).

### Running the application

To get started, install the dependencies.
```console
$ ./install solution
```

Then create an `.env` file in the root of the project. The `.env` file should contain the following:
```console
# Database Config Environment Variables
DB_NAME=<database_name>
DB_USER=<database_user>
DB_PASSWORD=<database_password>
DB_HOST=localhost

# Auth Config Environment Variables
TOKEN_SECRET=<token_secret>

# The port on which the application will run
PORT=3000
SERVER_PORT=3001
```

Create a docker container for the database or resume an existing one.

```console
# Run this only if you don't have a database container set up
$ docker run --name backend-workshop-db -e POSTGRES_PASSWORD=void -p 5432:5432 -d postgres
```

Then, start the server.

```console
# cd solution
$ npm start
```

This will start the frontend and backend servers. The frontend server will be running on port 3000 and the backend server will be running on port 3001. You can access the frontend application by going to `http://localhost:3000`.

