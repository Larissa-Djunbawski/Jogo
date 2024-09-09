const nome_caixa_alta = (req, res, next) => {
    req.body.nome = req.body.nome.toUpperCase()
    next()
}

module.exports = nome_caixa_alta