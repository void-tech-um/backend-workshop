---
layout: spec
---

# Backend Development Workshop
Welcome to the backend development guide for the VOID Tech Org at the University of Michigan. Backend development is a broad term that encompasses a lot of different technologies. This guide will focus on the technologies that we recommend using for your projects, since we have experience with them and can help you out if you run into any issues.

## Disclaimer
This guide is not meant to be a comprehensive guide to each of the backend technologies we are going to mention, rather a quick introduction that will help you get started on your projects. You can use this guide as a reference, but you should also look at official documentation for more information. Check out the [Lean More](#learn-more) section for links to the official documentation.

## Prerequisites
This guide assumes you have basic programming fundamentals, such as variables, functions, loops, and classes. You should also have some familiarity with TypeScript. If you are not familiar with TypeScript feel free to go over our [TypeScript Overview](https://voidtechmichigan.org/react-workshop/#typescript-overview), or you can check out the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) for a quick introduction.

## Getting Started

## Installation

## Running the Project

## Backend Development Overview
Backend development is the process of building the server-side of an application. This includes the API that the frontend will use to communicate with the server, and the database that will store the data for the application. The backend is responsible for handling all of the business logic for the application, and the frontend is responsible for displaying the data to the user.

In this guide we are going to be using some popular technologies of backend development. We will be using [Node.js](https://nodejs.org/en/) as our runtime environment, [Express](https://expressjs.com/) as our web framework, and [PostgreSQL](https://www.postgresql.org/) as our database. We will also be using [Sequelize](https://sequelize.org/) as our ORM (Object Relational Mapper) to help us interact with the database.

Let's break down what each of these technologies are and what they do.

#### Node.js
Node.js is a runtime environment for JavaScript. It allows us to run JavaScript outside of the browser. Node.js is built on top of the [V8 JavaScript Engine](https://v8.dev/), which is the same engine that powers Google Chrome. Node.js is a great tool for building backend applications because it is fast, lightweight, and asynchronous. Instead of JavaScript, we are going to be using TypeScript, which is a superset of JavaScript that adds static typing and other features.

#### Express
Express is a web framework for Node.js. It is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Express is a great tool for building backend applications because it is fast and minimalist. The downside to Express is that it is not very opinionated, which means that it doesn't come with a lot of features out of the box. This can be a good thing because it gives you a lot of flexibility, but it can also be a bad thing because we have to use other libraries to get some of the features that we want.

#### PostgreSQL
PostgreSQL is a relational database management system (RDBMS). Relational databases store data in tables, which are made up of rows and columns. Each row represents a single record, and each column represents a single attribute of the record. They are relational because they can be related to other tables through the use of keys, which are attributes that are unique to each record. This allows us to relate data from one table to another. For example, if we have a table of users, and a table of posts, we can relate the users to the posts by using the user's ID as a key in the posts table. This allows us to get all of the posts for a specific user.

#### Sequelize
Sequelize is an ORM for Node.js. An ORM is a tool that allows us to interact with a database using an object-oriented paradigm. This means that we can use classes and objects to interact with the database, instead of having to write SQL queries.

### Types of Backend Applications

#### REST API Oriented Server
A REST API server is an application that exposes a set of endpoints that can be used to perform CRUD (Create, Read, Update, Delete) operations on a database. By building a server purely composed of REST APIs, we can build a backend that can be used by multiple frontend applications, or a mobile application. If our web app uses this type of server, it has to be a single page application, because the server doesn't know anything about the frontend. This means that the frontend has to handle all of the routing and state management, while the server only has to handle the API calls.

#### Server-Side Rendering
Server-side rendering is a technique where the server sends the HTML for a page to the client, instead of the client rendering the HTML. Both routing and any internal APIs will be handled by the server; the client will only be responsible for displaying the data and using JavaScript to create any dynamic behavior. This is a good option if you want to build a website that is SEO friendly, or if you want to build a website that is fast and responsive.

## Setting Up our Express Server
At the beginning of this guide, you should have completed the setup for the project. If you haven't, go back and complete the [Getting Started](#getting-started) section. There's a lot of files in the project, and we'll go over each of them throughout the guide. For now, let's focus on the `server/index.ts` file.

```typescript
import express from "express";
import router from "./api";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables
dotenv.config();

// Set our port
const PORT = process.env.PORT;

// Create Express server
const app = express();

// Enable CORS: Cross Origin Resource Sharing
// This essentially allows us to make requests from our frontend to our backend
app.use(cors());

// Tell our app to use JSON
// This allows us to send JSON data to our backend
app.use(express.json());

// Tell our app to use the router we created
app.use("/api", router);

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}. Visit http://localhost:${PORT}/api`);
});
```
This is the entry point for our server. This is where we will configure our server and start it.

## Learn More