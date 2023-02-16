const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Olá');
});

app.listen(3000, () => console.log('😄 Servidor rodando na porta http://localhost:3000'));
