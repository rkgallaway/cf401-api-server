'use strict';

/**
 * API Router Module (V1)
 * Integrates with various models through a common Interface (.get(), .post(), .put(), .delete())
 * @module src/api/v1
 */

const express = require('express');

const router = express.Router();

router.get('/hello', (req, res) => res.status(200).send('hello'));


module.exports = router;