const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.PORT || port, () => console.log(`Escuchando en el puerto:${process.env.PORT || port}`))