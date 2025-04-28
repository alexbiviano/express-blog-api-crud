//Importo express
const express = require('express');
const app = express();


app.use(express.json());

//Definisco la porta
const port = 3000;

//Importo il router
const postsRotta = require ('./router/postsRotta');

//Importo middlewares
const errorsHandler = require ('./middlewares/errorsHandler');
const notFound = require ('./middlewares/notFound');

app.use('/posts', postsRotta);

//Definisco la mainpage
app.get('/', (req,res) =>{
    res.send('Mainpage')
})

app.use(errorsHandler);
app.use(notFound);

app.listen(port,()=>{
    console.log(`Il server è in ascolto sulla porta ${port}`)
})

