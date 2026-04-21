import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [abrigos, setAbrigos] = useState([])
  const [bairro, setBairro] = useState("")

  const [nome,setNome] = useState("")
  const [bairroNovo, setBairroNovo] = useState("")
  const [vagas,setVagas] = useState("")

  async function carregarAbrigos() {
    const resposta = await axios.get("http://localhost:3000/abrigos")

    console.log(resposta.data)

    setAbrigos(resposta.data)
  }


  async function buscarPorBairro(){
    const resposta = await axios.get(
      `http://localhost:3000/buscar?bairro=${bairro}`
    )

    setAbrigos(resposta.data)
  }

  async function deletarAbrigo(id){
    await axios.delete(
      `http://localhost:3000/abrigos/${id}`
    )
    carregarAbrigos()
  }

  async function cadastrarAbrigo(){
    await axios.post(
      "http://localhost:3000/abrigos",
    {
      nome: nome,
      bairro: bairroNovo,
      vagas: Number(vagas)

    }
    
    )
    carregarAbrigos()

    setNome("")
    setBairroNovo("")
    setVagas("")

  }

  useEffect(() => {
    carregarAbrigos()
  }, [])

  return (
    <div>
      <h1>UrbanAssist</h1>


     <input
      type="text"
      placeholder="Digite um bairro"
      value={bairro}
      onChange={(e) => setBairro(e.target.value)}
    />

      <button onClick={buscarPorBairro}>
        Buscar
      </button>



      <button onClick={carregarAbrigos}>
        Mostrar todos
      </button>
      <h2>Cadastrar Abrigo</h2>

    <input
      placeholder="Nome"
      value={nome}
      onChange={(e)=>setNome(e.target.value)}
    />

    <input
      placeholder="Bairro"
      value={bairroNovo}
      onChange={(e)=>setBairroNovo(e.target.value)}
    />

    <input
      placeholder="Vagas"
      value={vagas}
      onChange={(e)=>setVagas(e.target.value)}
    />

    <button onClick={cadastrarAbrigo}>
      Salvar
    </button>


      {abrigos.map((abrigo) => (
        <div key={abrigo.id}>
          <p>{abrigo.nome}</p>
          <p>{abrigo.bairro}</p>
          <p>{abrigo.vagas}</p>
        
        <button onClick={()=>deletarAbrigo(abrigo.id)}>
          Remover
        </button>




        </div>
      ))}
    </div>
  )
}

export default App