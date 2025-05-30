const express = require('express');
const router = express.Router();
const db = require('../db'); // conexión a PostgreSQL

// Función para normalizar nombres de humedales
function normalizarNombreHumedal(texto) {
  if (!texto) return "";

  const limpio = texto
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '')
    .replace(/[^a-z0-9]/g, '');

  const nombresValidos = {
    miraflores: ['miraflores', 'miraflorez', 'myraflores', 'miraflóres', 'miráflores', 'miraaflores']
  };

  for (const [estandar, variantes] of Object.entries(nombresValidos)) {
    if (variantes.includes(limpio)) {
      return estandar;
    }
  }

  return limpio;
}

// POST /respuestas/guardarRespuesta
router.post('/guardarRespuesta', async (req, res) => {
  console.log('POST /guardarRespuesta recibida');
  const { 'id-respuesta': idEncuesta, respuestas } = req.body;
  const timestamp = new Date();
  const estado = true;

  try {
    console.log('Guardando encuesta con id:', idEncuesta);

    // Guardar encuesta base
    await db.query(
      'INSERT INTO Encuestas (id_encuesta, timestamp, estado) VALUES ($1, $2, $3)',
      [idEncuesta, timestamp, estado]
    );

    const respuestasProcesadas = [...respuestas];

    // Agregar versión normalizada si se entregó nombre del humedal
    const nombre = respuestas.find(r => r.item === 'nombre-humedal');
    if (nombre) {
      const normalizado = normalizarNombreHumedal(nombre.respuesta);
      respuestasProcesadas.push({
        item: 'nombre-humedal-preproc',
        respuesta: normalizado
      });
      console.log('Nombre humedal normalizado:', normalizado);
    }

    // Guardar cada respuesta
    for (const r of respuestasProcesadas) {
      await db.query(
        'INSERT INTO Respuestas (id_encuesta, item, timestamp, respuesta, estado) VALUES ($1, $2, $3, $4, $5)',
        [idEncuesta, r.item, timestamp, r.respuesta, estado]
      );
      console.log(`Guardada respuesta: ${r.item} = ${r.respuesta}`);
    }

    console.log('Encuesta guardada con éxito');
    res.status(201).json({ 'id-respuesta': idEncuesta, exito: true, 'error-msg': '' });
  } catch (error) {
    console.error('Error guardando encuesta:', error);
    res.status(500).json({ 'id-respuesta': idEncuesta, exito: false, 'error-msg': error.message });
  }
});

module.exports = router;
