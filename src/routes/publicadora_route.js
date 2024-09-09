const express = require("express")
const publicadora_controller = require("../controllers/publicadora_controller.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(publicadora_controller.index())
})

router.get("/:id", (req, res) => {
    const publicadora = publicadora_controller.show(req.params.id);
    if (publicadora) {
        res.status(200).json(publicadora);
    } else {
        res.status(404).send("publicadora não encontrado")
    }
})

router.post("/", (req, res) => {
    const code = publicadora_controller.store(req.body)
    if (code === 201) {
        res.status(201).send("publicadora registrado com sucesso")
    } else {
        res.status(400).send("Erro ao registrar o publicadora")
    }
})

router.put("/:id", (req, res) => {
    const code = publicadora_controller.update(req.body, req.params.id)
    if (code === 200) {
        res.status(200).send("publicadora atualizado com sucesso")
    } else {
        res.status(400).send("Erro ao atualizar o publicadora")
    }
});

router.delete('/:id', (req, res) => {
    const code = publicadora_controller.destroy(req.params.id)
    if (code === 200) {
        res.status(200).send("publicadora deletado com sucesso")
    } else {
        res.status(400).send("Erro ao deletar o publicadora")
    }
})

module.exports = router;