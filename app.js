const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${process.env.PORT || port}`))