const express = require("express")
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000


// Servirdor:
app.get("/", (req, res)=>{
    res.send("UrbanAssist API funcionando!!!")

})

//Lista em memória
let abrigos = [
    {
        id: 1,
        nome: "Escola Municipal",
        vagas: 40
    },

    {
        id: 2,
        nome: "Ginasio Central",
        vagas: 75
    },        
]



//CRUD
// Criando GET:
app.get("/abrigos",(req, res) => {
    res.json(abrigos)
})

// Criando POST:
app.post("/abrigos",(req, res)=>{
   const novoAbrigo = req.body

   abrigos.push(novoAbrigo)

   res.json({
    mensagem: "Abrigo criado com sucesso",
    dados: novoAbrigo
   })

})

//Criando DELETE:
app.delete("/abrigos/:id",(req, res) => {
    const id = Number(req.params.id)

    abrigos = abrigos.filter(abrigo => abrigo.id !== id)
    


    res.send(`Abrigo ${id} removido`)
})

//criando PUT:
app.put("/abrigos/:id",(req, res) => {
    const id = Number(req.params.id)

    const abrigo = abrigos.find (a => a.id === id)

    if(!abrigo){
        return res.status(404).send("Abrigo não encontrado")
    }

    abrigo.vagas = req.body.vagas

    res.json({
        mensagem:"Abrigo atualizado com sucesso",
        dados: abrigo
    })
})




app.listen(PORT,() => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`)
})
