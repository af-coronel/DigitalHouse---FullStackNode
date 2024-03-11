const express = require('express');
const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 5000


// Iniciar el servidor en el puerto 5000, tuve que hacer esto porque no puedo acceder al puerto 3000 o 3001:
app.listen(5000, () => {
  console.log('Servidor Express iniciado en el puerto 5000');
});

// Ruta para la página de inicio (GET request):
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

// Ruta para la página de login:
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
});

// Ruta para la página de registro:
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/views/register.html');
});

// Manejo de rutas no encontradas (404 Not Found)
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

//El comando para ejecutar el script nodemon app.js es: npm run dev
