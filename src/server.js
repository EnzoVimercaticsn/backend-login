const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Adicione aqui:
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(routes)

const PORT = process.env.PORT || 3344;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
