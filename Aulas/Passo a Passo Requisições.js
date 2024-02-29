/* 
//// PASSO A PASSO PARA REQUISIÇÃO HTTP
* 1 Instalação de pacote npm json-server - npm json-server
* 2 Criar pasta data dentro da raiz do projeto
* 3 Criar arquivo data.json ou db.json dentro da pasta data
* 4 Criar objeto no formato json dentro do arquivo data.json
* 5 Criar uma rota(endpoint) no arquivo package.json
    ? "eject": "reacts-scripts eject"
    ? "start": "json-server --watch nome_do_arquivo.json --port 3000"  a porta é opcional
    ? "server": "json-server --watch data/db.json --port 3000"
    ? Em seguida rodar com o comando npm run server em um terminal separado
    ? Verificar e acessar o objeto - http://localhost:3000/nome_do_objeto
    ? Acessar items individuais - http://localhost:3000/nome_do_objeto/id_de_cada_elemento
        ! Caso a criação do projeto tenha sido feita pelo create-react-app
        ! Ele ira sugerir uma outra porta diferente da porta 3000 ou podemos mudar a porta do json-server no package.json
* 6 Criar componente para consumir a requisição - pode ser componente ou lista de componentes
* 7 Importar o useState e o useEffect no componente da requisição
* 8 Criar o useState para armazenar os dados da requisição
    ? const [nome_do_objeto, setNome_do_objeto] = useState(null); ou array vazio - useState([])
* 9 Criar o useEffect para fazer a requisição
    *? Criar url para requisição fora da função do componente abaixo das importações
        ? const url = "http://localhost:3000/nome_do_objeto"
    *? Criar useEffect para fazer a req
    ! O useEffect nao aceita async - para isso tem que fazer uma async function e passar o res, o data e o setNome_do_objeto
    ! para dentro da função e chama a função dentro do useEffect
    ! fica do jeito abaixo
    ? useEffect(() => {
        ? async function fetchData() {
            ? const res = await fetch (url)
            ? const data = await res.json()
            ? setNome_do_objeto(data)

        ? }

        ? fetchData()
    ? }, [])
    ? console.log(nome_do_objeto);
* 10 Ja podemos exibir os dados da requisição no componente
    ? <ul>
        ? {nome_do_objeto.map(item) => (
            ? <li key={item.id}>{item.nome} - {item.modelo}</li>
        ? )}
    ? </ul>
    ? Obs: O key é obrigatório para cada elemento da lista

    ? Obs: Se o objeto for um array, podemos usar o map para exibir os itens
    
    
* 11 Adicionar items no objeto via post
        ? Criar os states para receber os dados do form e colocar como vazio
        ? Criar form para adicionar os itens
        ? Criar função para adicionar os itens no objeto no form
        ? nos inputs adicionar o value com o valor do state
        ? Criar o evento de submit no formulário
        ? Criar o evento onChamge para cada input do form
            ? onChamge={(e) => {
            ? setNome_do_objeto(e.target.value)
            ? }}
* 12 Criar função submit para adicionar os itens no objeto
    ? const handleSubmit = async (e) => {
        ? e.preventDefault()

        // criar constante para receber os dados do objeto
            ? const nome_do_objeto = {
                ? nome: nome_do_objeto,
                ? modelo: modelo_do_objeto,
                ? ano: ano_do_objeto,
                ? }

        // requisiçaõ post
        ? const res = await fetch(url, {
            ? method: "POST",
            ? headers: {
                ? "Content-Type": "application/json",
            ? }
            ? body: JSON.stringify(nome_do_objeto),
        ? })

        // Carregamento dinamico no componente
        ? const addedNome_do_objeto = await res.json()
        ? setNome_do_objeto((nome_do_objeto) => [...nome_do_objeto, nome_do_objeto])

        // depois do carregamento dinamico resetamos os states depois do envio para o sistema
        ? setNome_do_objeto("")

    ? }
    ? o input precisa  de type, value, name, e onchange
    ? o button precisa de type, value, name, e onClick / pode ser button ou input type submit
* 13 Adicionar o evento de submit no formulário
* 14 Criando hook para o fetch
    // Criamos uma pasta hooks dentro da src
    // Dentro da pasta hooks criamos um arquivo chamado useFetch.js
    // Importamos o useState e o useEffect do react
        ? import { useState, useEffect } from "react";
    // Criamos uma função para fazer a requisição custom hook
    ? export default function useFetch(url) {
        // aqui criamos uma constante para receber os dados da requisição
            ? const [data, setData] = useState(null) // o null é setado por nao saber se e string ou array
            ? const [loading, setLoading] = useState(false)
        // Criação da requisição com useEffect 
        ? useEffect(() => {
            ? const fetchData = async () => {
                ? const res = await fetch(url)

                ? const data = await res.json()

                ? setData(data)
            ? }
        // exportando os dados para serem usados no componente
        ? return { data }

        ? }, [url])
* 15 Depois excluimos o useEffect do componente e importamos o useFetch
* 16 importa o useFetch no component
    ? import useFetch from "../../hooks/useFetch";
    // depois de importar o useFetch, podemos usar o hook dentro do componente
    ? const { data: items } = useFetch("http://localhost:3000/nome_do_objeto"); / pode ser usado a variavel url
    ! o items renomeia os dados que estao chegando no hook para serem utilizados
    ? console.log(data); / para verificar se os dados estao chegando
    ! para nao receber o erro do map por ser null, precisamos fazer uma validação com o if
    ? {items && items.map((item))} e segue o map normal

* 17 Refatorando o post 
*/