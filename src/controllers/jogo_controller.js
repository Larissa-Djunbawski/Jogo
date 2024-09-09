const model = require("../models/jogo_model.js")

const db = []

const index = (query) => {
    let filtro = db

    if(query) {
        
        // Remover de filto o que não se adequar a query
    }

    return filtro
} 

const show = id => db.find(el => el.id == id)

const store = (body) => {
    const novo = model(body)

    if (novo) {
        db.push(novo)
        return 201
    }

    return 400
}

const update = (body, id) => {
    const novo = model(body, parseInt(id))
    const indice = db.findIndex(el => el.id == id)

    if (novo && indice != -1) {
        db[indice] = novo
        return 200
    }

    return 400
}

const destroy = id => {
    const indice = db.findIndex(el => el.id == id)
    if (indice != -1) {
        db.splice(indice, 1)
    }
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}