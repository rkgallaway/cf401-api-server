## API-Server

### Author: Ryan Gallaway, Becca Lee, Jared Pattison, Tanner Seramur
Source code for the API-Server was created with assistance from their instructor, John Cokos.

### Links and Resources
![Build Status](https://travis-ci.com/rkgallaway/cf401-api-server.svg?branch=master)
* [repo](https://github.com/rkgallaway/cf401-api-server)
* [travis](https://travis-ci.com/rkgallaway/cf401-api-server)

### Modules
- `models/players-model.js` contains the players models
- `models/teams-model.js` contains the teams models
- `models/players-schema.js` contains the players schema for mongo db
- `models/teams-schema.js` contains the teams schema for mongo db
- `middleware/404.js` contains the 404 error
- `middleware/500.js` contains the 500 error
- `middleware/model-finder.js` contains the model finding functionality
- `api/v1.js` contains the routes and corresponding functions
- `app.js` contains all the app.use info
- `index.js` contains the core server functionality

### Setup
#### `.env` requirements
* `PORT` - 3000 or defined by user's ENV
* `MONGODB_URI` - `mongodb://localhost:27017/products`, or defined by user's ENV
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

Tests were run on the players and teams models to determine if their core functionality was working correctly. Tests are also run on the app to ensure the core server and routes functionality is working as expected.