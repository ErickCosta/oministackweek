//Importando o express
const express = require('express');

//Importando o mongoose
const mongoose = require('mongoose');

//Importando as rotas
const routes = require('./routes');

//Construindo a aplicação
const app = express();

//Inicializando conexão com o banco de dados
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-wiw7e.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//Definindo formato das mensagens
app.use(express.json());

//Defindo a utilização das rotas
app.use(routes);

//Porta onde o servidor ficará escutando
app.listen(3333);