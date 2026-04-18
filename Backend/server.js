const express = require("express")
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000
const { criarBanco } = require("./database")


// Servirdor:
app.get("/", (req, res)=>{
    res.send("UrbanAssist API funcionando!!!")

})



let db

async function iniciarServidor() { 
    db = await criarBanco()
    app.listen(PORT,()=>{
        console.log(`Servidor rodando em http://localhost:${PORT}`)
    })
    
}

iniciarServidor()


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
app.get("/abrigos", async (req, res) => {
    const abrigos = await db.all(
        "SELECT * FROM abrigos"
    )
    res.json(abrigos)
})

// Criando POST:
app.post("/abrigos", async (req,res)=>{

 const { nome, vagas } = req.body

 await db.run(
   "INSERT INTO abrigos (nome, vagas) VALUES (?, ?)",
   [nome, vagas]
 )

 res.json({
   mensagem:"Abrigo salvo no banco com sucesso"
 })

})

//Criando DELETE:
app.delete("/abrigos/:id", async (req, res) => {
    const id = Number(req.params.id)

    await db.run(
        "DELETE FROM abrigos WHERE id = ?",
        [id]
    )
    


    res.send(`Abrigo ${id} removido`)
})

//criando PUT:
app.put("/abrigos/:id", async (req, res) => {
    const id = Number(req.params.id)

    const { vagas } = req.body

    await db.run(
        "UPDATE abrigos SET vagas = ? WHERE id = ?", 
        [vagas, id]
    )
        
        res.json({
        mensagem:"Abrigo atualizado com sucesso",
    })
})
