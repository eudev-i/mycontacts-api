const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());

// Middleware para usar as rotas
app.use(routes);

app.listen(3000, () => console.log('😄 Servidor rodando na porta http://localhost:3000'));
