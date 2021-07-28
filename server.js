const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/message', (req, response) => {
	response.send({express: 'Hello World!'});
});

app.listen(port, ()=> console.log(`Esperando conexão em: ${port}`));