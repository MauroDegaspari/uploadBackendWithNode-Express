const express = require('express');
const router = express.Router();
const crypte = require('crypto');
const connections = require('./database/connetions');

router.post('/cadastro', async function (request, response) {
    const { nome, senha } = request.body;
    const id = crypte.randomBytes(4).toString('HEX');

    await connections('cadastro').insert({
        id,
        nome,
        senha
    })
    return response.json({ id })
});

module.exports = router;