const express = require("express")
const genero_controller = require("../controllers/genero_controller.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(genero_controller.index())
})

router.get("/:id", (req, res) => {
    const genero = genero_controller.show(req.params.id);
    if (genero) {
        res.status(200).json(genero);
    } else {
        res.status(404).send("genero não encontrado")
    }
})

router.post("/", (req, res) => {
    const code = genero_controller.store(req.body)
    if (code === 201) {
        res.status(201).send("genero registrado com sucesso")
    } else {
        res.status(400).send("Erro ao registrar o genero")
    }
})

router.put("/:id", (req, res) => {
    const code = genero_controller.update(req.body, req.params.id)
    if (code === 200) {
        res.status(200).send("genero atualizado com sucesso")
    } else {
        res.status(400).send("Erro ao atualizar o genero")
    }
});

router.delete('/:id', (req, res) => {
    const code = genero_controller.destroy(req.params.id)
    if (code === 200) {
        res.status(200).send("genero deletado com sucesso")
    } else {
        res.status(400).send("Erro ao deletar o genero")
    }
})

module.exports = router;