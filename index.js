const express = require('express');
const app = express();
const port = 3000;

// Rota 1: Página inicial
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>Welcome to the Home Page</h1>
        <p>This is the homepage of our Node.js application!</p>
      </body>
    </html>
  `);
});

// Rota 2: Página de sobre
app.get('/about', (req, res) => {
  res.send(`
    <html>
      <head><title>About Us</title></head>
      <body>
        <h1>About Us</h1>
        <p>Learn more about us on this page.</p>
      </body>
    </html>
  `);
});

// Rota 3: Página de contato
app.get('/contact', (req, res) => {
  res.send(`
    <html>
      <head><title>Contact Us</title></head>
      <body>
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us via this page.</p>
      </body>
    </html>
  `);
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
