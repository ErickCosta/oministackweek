//Importando o express
const express = require('express');

//Importando o mongoose
const mongoose = require('mongoose');

//Importando a permissão de acesso
const cors = require('cors');

//Importando as rotas
const routes = require('./routes');

const path  = require('path');

//Construindo a aplicação
const app = express();

//Inicializando conexão com o banco de dados
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-wiw7e.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());

//Definindo formato das mensagens
app.use(express.json());

//Arquivos estáticos
app.use('/files', express.static(path.resolve( __dirname, '..', 'uploads')))

//Defindo a utilização das rotas
app.use(routes);

//Porta onde o servidor ficará escutando
app.listen(3333);