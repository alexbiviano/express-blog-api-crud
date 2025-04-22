// importo express
const express = require('express')
const router = express.Router();

// importo i dati dei post
const posts = require('../data/posts.js')

// importo il controller per i post
const postsController = require('../controllers/postsController.js');
