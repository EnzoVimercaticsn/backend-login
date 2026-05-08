const express = require('express');
const raizControllers = require('./controllers/raizControllers');
const cadastroControler = require('./controllers/CadastroControler');

const routes = express.Router();

// Rota Raiz
routes.get('/', raizControllers.raiz);

// Rotas cadastro - POST, PUT, DELETE (ANTES)
routes.post('/usuarios', cadastroControler.createcadastro);
routes.put('/usuarios/:usu_matricula', cadastroControler.updatecadastro);
routes.delete('/usuarios/:usu_matricula', cadastroControler.deletecadastro);

// Rotas cadastro - GET (DEPOIS)
routes.get('/usuarios', cadastroControler.searchcadastroAllCod);
routes.get('/usuarios/nome', cadastroControler.searchcadastroAllNome);
routes.get('/usuarios/buscar/:nome', cadastroControler.searchcadastroByNome);

module.exports = routes;
