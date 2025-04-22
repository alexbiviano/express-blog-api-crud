// importo express
const express = require('express')
const router = express.Router();

// importo i dati dei post
const posts = require('../data/posts.js')

// importo il controller per i post
const postsController = require('../controllers/postsController.js');

// index
router.get('/', postsController.index);

// show
router.get('/:id', postsController.show);

// store
router.post('/', postsController.store);

// update
router.put('/:id', postsController.update);

// modify 
router.patch('/:id', postsController.modify);

// delete
router.delete('/:id', postsController.destroy);

// esporto il router
module.exports = router;
