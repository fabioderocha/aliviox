const express = require('express');

const app = express();

const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rota básica
app.get('/', (req, res) => {
  res.json({ message: 'Hello World! Servidor Express funcionando na porta 3000' });
});

// Rota de exemplo
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Rota POST de exemplo
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ received: data, message: 'Dados recebidos com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});