// index.js
const express = require('express');
const respuestasRoutes = require('./routes/respuestas');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // para leer JSON en las peticiones

// Montamos las rutas en /respuestas (puedes cambiar a '/api' si prefieres)
app.use('/respuestas', respuestasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
