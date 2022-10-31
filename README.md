# Backend Development Workshop
This is the project for the backend development workshop. The goal of this workshop is to build a simple Node.js and Express.js application that goes through the basics of building a REST API with authentication.

This repository is a work in progress.

## Quick Start

### Prerequisites
You need to have Node.js and npm installed on your machine. You can download Node.js from [here](https://nodejs.org/en/download/).
You also need to have PostgreSQL installed on your machine. You can download PostgreSQL from [here](https://www.postgresql.org/download/).

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
PORT=8000
```

Then, start the server.
```console
# cd solution
$ npm start
```

This will start the server on port 8000. You can then access the API at `http://localhost:8000/api`.

