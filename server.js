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
