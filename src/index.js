const express = require('express');

require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());

// Middleware para usar as rotas
app.use(routes);

// Error Handler (Middleware express) -> Manipulador de erros
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('😄 Servidor rodando na porta http://localhost:3000'));
