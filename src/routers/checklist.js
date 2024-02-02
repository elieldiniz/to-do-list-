const express = require('express')

const router  = express.Router()

const Checklist = require('./models/checklist')


router.get('/', (req, res) => {
    console.log('ola')
    res.send()
})

router.post('/', async (req, res) => {
    try {
        console.log('Rota POST: Iniciando processamento');

        // Verificar se 'name' está presente no corpo da requisição
        if (!req.body.name) {
            console.log('Rota POST: Campo "name" ausente');
            return res.status(422).json({ error: 'O campo "name" é obrigatório.' });
        }

        // Extrair 'name' do corpo da requisição
        const { name } = req.body;

        console.log(`Rota POST: Criando checklist com name: ${name}`);
        // Criar um novo checklist com 'name'
        const checklist = await Checklist.create({ name });

        console.log('Rota POST: Checklist criado com sucesso:', checklist);

        // Responder com o checklist criado
        res.status(200).json(checklist);
    } catch (err) {
        // Se ocorrer um erro, responder com o status 500 e detalhes do erro
        console.error('Erro ao processar a requisição:', err);
        res.status(500).json({ error: 'Erro interno do servidor. Detalhes: ' + err.message });
    }
});

router.get('/:id', (req, res) =>{
    console.log(req.body)
    res.send(`get ID: ${req.params.id}`)
})

router.put('/:id', (req, res) =>{
    console.log(req.params.id)
    res.send(`put ID: ${req.params.id}`)
})

router.delete('/:id', (req, res) =>{
    console.log(req.params.id)
    res.send(`delete ID: ${req.params.id}`)
})





module.exports = router
