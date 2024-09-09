const genero_controller = require("../controllers/genero_controller.js")
const publicadora_controller = require("../controllers/publicadora_controller.js")
const estudio_controller = require("../controllers/estudio_controller.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    console.log(body)
    if(
        body.nome != undefined &&
        body.nome != "" &&
        body.lancado_em != undefined &&
        !isNaN(new Date(body.lancado_em).valueOf()) &&
        body.generos_id.every(genero_id => genero_controller.show(genero_id)) &&
        publicadora_controller.show(body.publicadora_id) &&
        estudio_controller.show(body.estudio_id)
    ) {
        console.log(body.criado_em || new Date())
        return {
            id,
            nome: body.nome,
            generos_id: body.generos_id,
            publicadora_id: body.publicadora_id,
            estudio_id: body.estudio_id,
            lancado_em: new Date(body.lancado_em),
            criado_em: body.criado_em || new Date(),
            atualizado_em: new Date()
        }
    }
}

module.exports = model