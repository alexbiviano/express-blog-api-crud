
// dati contenente l'array di oggetti
const posts = require('../data/posts.js');

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const post = posts.find(function (element) {
        return element.id === parseInt(req.params.id);
    });

    //controllo in caso di errore
    if(post === undefined){
        res.status(404);
        return res.json({
            status: 404,
            error: "not found",
            message: "Post non trovato"
        })
    }

    res.json(post);
}

// creo
function store(req, res) {
    res.json('creo un nuovo elemento')
}

//modifico
function update(req, res) {
    res.json('modifico il post con id:' + req.params.id)
}


function modify(req, res) {
    res.json('modifica parziale del post con id:' + req.params.id)
}

// elimino 
function destroy(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(function (element){
        return element.id === id;
    })

// se il post non viene mostrato restituisco l'errore
    if(post === undefined){
        res.status(404);
        return res.json({
            status: 404,
            error: "not found",
            message: "Post non trovato"
        })
    }
    posts.splice(posts.indexOf(post), 1);

    res.sendStatus(204);
    console.log(posts);  
}

// esporto le funzioni
module.exports = { index, show, store, update, modify, destroy };