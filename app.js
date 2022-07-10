
const express = require('express')
const app = express();

// Middlewares
app.use(express.json()) // Permite recibir Jsons desde el Front

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

// Server Port
app.listen(process.env.PORT || 5000, () => {
    console.log("El server escucha el puerto 3001")
})