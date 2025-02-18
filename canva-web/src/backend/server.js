const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Inicializa o app Express
const app = express();
const PORT = 3000;

// Habilita CORS
app.use(cors());

// Rota para buscar dados mensais
app.get('/temperatures/monthly', (req, res) => {
  try {
    // Lê os dados do arquivo JSON
    const filePath = path.join(__dirname, 'data', 'temperatures.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    const monthlyData = JSON.parse(rawData);

    // Retorna os dados como resposta
    res.json(monthlyData);
  } catch (error) {
    console.error('Erro ao ler os dados:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});