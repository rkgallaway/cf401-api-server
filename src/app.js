'use strict';

/**
 * API Server Module
 * @module src/app
 */

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const appRoot = require('app-root-path');
const requireDirectory = require('require-directory');

// Esoteric Resources
const errorHandler = require(`./middleware/500.js`);
const notFound = require(`./middleware/404.js`);
const v1Router = require(`./api/v1.js`);

const userRoutes = require(`${appRoot}/src/routes`);

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Routes
// package docs static route
app.use('/package-docs', express.static('package-docs'));

// user docs static route
app.use('/docs', express.static('docs'));

// Sets package router
app.use(v1Router);

//Sets additional user-provided routes, if provided    
Object.keys(userRoutes).forEach((file) => {
  console.log(file);
  const test = require(`${appRoot}/src/routes/${file}`);
  app.use(test);
});


// Catchalls
app.use(notFound);
app.use(errorHandler);



/**
 * Start Server on specified port
 * @param port {integer} (defaults to process.env.PORT)
 */
let start = (port = process.env.PORT || 3000) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

module.exports = { app, start };