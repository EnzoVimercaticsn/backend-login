const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// Configuração CORS robusta
const corsOptions = {
  origin: ['http://127.0.0.1:5501', 'http://localhost:5501', 'http://localhost:3000', 'http://localhost:5500'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Headers adicionais de segurança (opcional)
app.use((req, res, next) => {
  res.header('X-Content-Type-Options', 'nosniff');
  next();
});

app.use(routes)

const PORT = process.env.PORT || 3344;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
