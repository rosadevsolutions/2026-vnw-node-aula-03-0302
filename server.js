// 01 - Importar o framework express
const express = require("express");

// 02 - Inicializando express na variavel app
const app = express();

// 03 - Middleware - Verificação de formato dos dados usados com o express, no caso json
app.use(express.json());

// 04 - Criando porta para exibição
const PORT = 3000;

// 05 - Dados mockados / BD Ficticio / Array
let usuarios = [
  { id: 1, nome: "Romulo", idade: 46 },
  { id: 2, nome: "Vinicius", idade: 25 },
  { id: 3, nome: "Jefferson", idade: 27 },
];

// 06 - Em app criando rota usuarios para que ao ser acessada faça requisição o obtenha response. No caso get só pega response.
app.get("/usuarios", (req, res) => {
  // 07 - Para GET só utilizamos res. Na response exibe o status e os dados referentes ao mock de usuarios. Obs: O status só é exibido no teste com Postman
  res.status(200).json(usuarios);
});

// 09 - Rotas para adicionar/cadastrar novos usuarios
app.post("/usuarios", (req, res) => {
  // 10 - Criar variavel para definir dados a serem enviados no body do request, no caso nome e idade. O id não é inserido porque será auto-incrementado somente para o cadastro em novos usuarios
  const { nome, idade } = req.body;

  // 11 - Criar variavel armazenar um padrão de envio das infos
  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    idade,
  };

  // 12 - Enviar os dados organizados do novo usuatio para o array de usuarios
  usuarios.push(novoUsuario);

  // 13 - Criando uma response para caso o envio de novoUsuario ocorra com sucesso exiba o status code
  res.status(201).json(novoUsuario);
});

// 08 - Inicializar app.
app.listen(PORT, () => {
  console.log(`Servidor rodando na http://localhost:${PORT}/usuarios`);
});
