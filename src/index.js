const express = require('express');

const routes = require('./routes');

const app = express();

// Para usar as rotas
app.use(routes);

app.listen(3000, () => console.log('😄 Servidor rodando na porta http://localhost:3000'));
