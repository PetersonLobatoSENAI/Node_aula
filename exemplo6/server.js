// app.js

// Importa o módulo 'express', que é um framework para criar aplicações web em Node.js
const express = require('express');

// Importa o módulo 'helmet', que ajuda a proteger a aplicação configurando headers HTTP de segurança
const helmet = require('helmet');

// Importa o módulo 'cors', que permite o compartilhamento de recursos entre diferentes origens (Cross-Origin Resource Sharing)
const cors = require('cors'); // Importa o módulo 'cors'

// Cria uma instância da aplicação Express
const app = express();

// Aplica o middleware 'helmet' para adicionar headers de segurança às respostas HTTP
app.use(helmet());

// Aplica o middleware 'cors' para habilitar CORS na aplicação, permitindo requisições de origens diferentes
app.use(cors()); // Usa o middleware 'cors'

// Define uma rota GET para a raiz ('/')
app.get('/', (req, res) => {
  // Envia uma resposta simples ao cliente
  res.send('Página segura com Headers HTTP de segurança!');
});

// Inicia o servidor e faz com que ele escute na porta 3000
app.listen(4000, () => {
  // Exibe uma mensagem no console indicando que a aplicação está em execução
  console.log('Aplicação 06 rodando na porta 4000 com segurança reforçada.');
});