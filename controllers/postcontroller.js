
// Funzione per ottenere tutti i post  
const getAllPosts = (req, res) => {  
    res.send("Restituisci tutti i post");  
};  

const getPostById = (req, res) => {  
    const postId = req.params.id;  
    res.send(`Restituisci il post con ID: ${postId}`);  
};  

//  crea 
const createPost = (req, res) => {  
    res.send("Crea un nuovo post");  
};  

// aggiorna 
const updatePost = (req, res) => {  
    const postId = req.params.id;  
    res.send(`Aggiorna il post con ID: ${postId}`);  
};  

//  elimina
const deletePost = (req, res) => {  
    const postId = req.params.id;  
    res.send(`Elimina il post con ID: ${postId}`);  
};  

// esporto le funzioni  
module.exports = {  
    getAllPosts,  
    getPostById,  
    createPost,  
    updatePost,  
    deletePost  
};