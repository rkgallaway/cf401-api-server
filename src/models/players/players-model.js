'use strict';

const Model = require('cf401-mongo');
const schema = require('./players-schema.js');

/**
 * Class representing a Player.
 * @extends Model
 */
class Players extends Model {}

module.exports = new Players(schema);

