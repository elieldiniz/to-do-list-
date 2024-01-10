// Importa o módulo 'express' para criar um aplicativo Express
const express = require("express")

// Cria uma instância do aplicativo Express
const app = express()

// Configura uma rota para lidar com solicitações GET na raiz ("/")
app.get('/', (req, res) => {
    // Envia uma resposta com um título HTML
    res.send('<h1 class="name">eliel diniz Lista de tarefas</h1><br> <hr><h2>eliel diniz</h2>')
})
    //resposta json
app.get('/json', (req, res) => {
  
    res.json({name:'eliel', idade:'25',})
})

// Inicia o servidor na porta 3000 e define uma função de retorno de chamada
app.listen(3000, () => {
    console.log('novo servidor Servidor rodando na porta 3000')
})
