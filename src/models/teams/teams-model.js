'use strict';

const Model = require('cf401-mongo');
const schema = require('./teams-schema.js');

/** 
 * Class representing a Team.
 * @extends Model
 */
class Teams extends Model {}

module.exports = new Teams(schema);


