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

// 08 - Inicializar app.
app.listen(PORT, () => {
  console.log(`Servidor rodando na http://localhost:${PORT}/usuarios`);
});
