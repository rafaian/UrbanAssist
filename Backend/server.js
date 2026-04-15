const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000


// Criando Servirdor:
app.get("/", (req, res)=>{
    res.send("UrbanAssist API funcionando!!!")

})

app.listen(PORT,() => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}"`)
})


// Criando Abrigos:
app.get("/abrigos",(req, res) => {
    res.send("Lista de abrigos")
    
})
// Adicionando abrigo:
app.post("/abrigos",(req, res)=>{
    res.send("Abrigo criado")

})

//Deletando abrigo:
app.delete("/abrigos/:id",(req, res) => {
    const id = req.params.id

    res.send(`Abrigo ${id} removido`)
})
