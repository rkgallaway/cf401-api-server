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

// Esoteric Resources
const errorHandler = require( `./middleware/500.js`);
const notFound = require( `./middleware/404.js` );
const userRouter = require(appRoot + '/src/models/template-model/test.js');
const v1Router = require( `./api/v1.js` );

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Static Routes
app.use('/docs', express.static('docs'));

// Routes
app.use(userRouter);
app.use(v1Router);
// console.log({userRouter});

// add logic to grab all outher routes and use if they exist
//forEach file that exist in specified folder of root directory, we will app.use(filename);
// 1. check to see if files exist


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
  
module.exports = {app,start};
