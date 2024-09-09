const express = require("express")
const estudio_controller = require("../controllers/estudio_controller.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(estudio_controller.index())
})

router.get("/:id", (req, res) => {
    const estudio = estudio_controller.show(req.params.id);
    if (estudio) {
        res.status(200).json(estudio);
    } else {
        res.status(404).send("estudio não encontrado")
    }
})

router.post("/", (req, res) => {
    const code = estudio_controller.store(req.body)
    if (code === 201) {
        res.status(201).send("estudio registrado com sucesso")
    } else {
        res.status(400).send("Erro ao registrar o estudio")
    }
})

router.put("/:id", (req, res) => {
    const code = estudio_controller.update(req.body, req.params.id)
    if (code === 200) {
        res.status(200).send("estudio atualizado com sucesso")
    } else {
        res.status(400).send("Erro ao atualizar o estudio")
    }
});

router.delete('/:id', (req, res) => {
    const code = estudio_controller.destroy(req.params.id)
    if (code === 200) {
        res.status(200).send("estudio deletado com sucesso")
    } else {
        res.status(400).send("Erro ao deletar o estudio")
    }
})

module.exports = router;