const express = require("express")
const jogo_router = require("./routes/jogo_route.js")
const estudio_router = require("./routes/estudio_route.js")
const genero_router = require("./routes/genero_route.js")
const publicadora_router = require("./routes/publicadora_route.js")
const nome_caixa_alta = require("./middlewares/nome_caixa_alta.js")
const app = express()
const port = 5000

app.use(express.json())
app.use(nome_caixa_alta)

app.use("/publicadora", publicadora_router)
app.use("/genero", genero_router)
app.use("/estudio", estudio_router)
app.use("/jogo", jogo_router)

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})