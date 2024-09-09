const express = require("express")
const jogo_controller = require("../controllers/jogo_controller.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(jogo_controller.index())
})

router.get("/:id", (req, res) => {
    const jogo = jogo_controller.show(req.params.id);
    if (jogo) {
        res.status(200).json(jogo);
    } else {
        res.status(404).send("jogo não encontrado")
    }
})

router.post("/", (req, res) => {
    const code = jogo_controller.store(req.body)
    if (code === 201) {
        res.status(201).send("jogo registrado com sucesso")
    } else {
        res.status(400).send("Erro ao registrar o jogo")
    }
})

router.put("/:id", (req, res) => {
    const code = jogo_controller.update(req.body, req.params.id)
    if (code === 200) {
        res.status(200).send("jogo atualizado com sucesso")
    } else {
        res.status(400).send("Erro ao atualizar o jogo")
    }
});

router.delete('/:id', (req, res) => {
    const code = jogo_controller.destroy(req.params.id)
    if (code === 200) {
        res.status(200).send("jogo deletado com sucesso")
    } else {
        res.status(400).send("Erro ao deletar o jogo")
    }
})

module.exports = router;