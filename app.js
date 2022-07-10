require('dotenv').config(); // Permite usar variables .env

const express = require('express')
const cors = require('cors')
const app = express();

// Middlewares
app.use(express.json()) // Permite recibir Jsons desde el Front
app.use(cors()) // Solucionar el error de Cors al mandar una petición desde el Front

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

// Server Port
app.listen(process.env.PORT || 5000, () => {
    console.log("El server escucha el puerto 3001")
})