const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes =  require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:admin@cluster0-our9v.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

app.use(routes);

// metodos HTTP: GET, POST, PUT, DELETE

// tipos de parametros

// QUERY PARAMS: request.query(filtros, ordenacao, paginacao, ...)
// ROUTE PARAMS: request.params (Identificar um recurso na alteracao | remocao)
// Body: request.body (dados para criacao ou auteracao do recurso)



app.listen(3333);