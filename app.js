// Importa o módulo 'express' para criar um aplicativo Express
const express = require("express")
const checkilistRouter = require("./src/routers/checklist")

const app = express()
app.use(express.json())

app.use('/checkilist',checkilistRouter)


app.listen(3000 ,() =>{
    console.log('Servidor rodando na porta 3000')
})

