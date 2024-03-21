import { useState, useEffect } from "react"
import { useFetch } from "../hooks/useFetch"

const url = "http://localhost:3000/produtos"

const Home = () => {

    const [ produto, setProduto ] = useState(null)

    const { data: items } = useFetch(url)

    const [ nome, setNome ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const produtos = {
            nome
        }

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produtos)
        })

        const addedProduto = await res.json()
        setProduto(produto => [...produto, addedProduto])


        console.log("chegou")
        console.log(nome)
        setNome("")
    }

  return (
    <div>
        <h1>Home</h1>

        <form onSubmit={handleSubmit}>
            <label>Nome: 
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <ul>
            {items && items.map((item) => (
                <li key={item.id}>{item.nome}</li>
            ))}
        </ul>
    </div>
  )
}

export default Home