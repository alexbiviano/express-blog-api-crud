// importo express
const express = require('express')
const app = express();

// definisco il numero di porta
const port = 3000;

// importo router
const postsRouter = require('./routers/routerPosts.js')
app.use(express.json())


app.use('/posts', postsRouter)
app.use('/imgs', express.static('public/imgs'));


app.get('/', (req, res)=>{
    res.send('Homepage')
})

// dico al server di rimanere in ascolto sulla porta 3000
app.listen(port,()=>{
    console.log(port);
});