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
        ? Criar o evento onChange para cada input do form
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
    ? export const useFetch = (url) => {
        // aqui criamos uma constante para receber os dados da requisição
            ? const [data, setData] = useState(null) // o null é setado por nao saber se e string ou array
            ? const [loading, setLoading] = useState(false)
        // Criação da requisição async com useEffect 
        ? useEffect(() => {

                // requisição asyncrona
                ? const fetchData = async () => {
                    ? const res = await fetch(url)

                    ? const data = await res.json()

                    ? setData(data)
                ? }

                ? fetchData()
            
            ? }, [url])
        // exportando os dados para serem usados no componente
        ? return { data }
        ? };
* 15 Depois excluimos o useEffect do componente e importamos o useFetch
* 16 importa o useFetch no component
    ? import useFetch from "../../hooks/useFetch";
    // depois de importar o hook useFetch, importaremos o que iremos usar do hook dentro do componente
    // dessa forma teremos acesso aos dados do hook dentro do componente
    ? const { data: items } = useFetch("http://localhost:3000/nome_do_objeto"); / pode ser usado a variavel url
    ! o items renomeia os dados que estao chegando no hook para serem utilizados
    ? console.log(data); / para verificar se os dados estao chegando
    ! para nao receber o erro do map por ser null, precisamos fazer uma validação com o if
    ? {items && items.map((item))} e segue o map normal

* 17 Refatorando o post 
    // criamos o useState config para configuração do POST
    // Esse state vai configurar o metodo que sera utilizado, cabeçarios
    ? const [ config, setConfig ] = useState(null)

    // criamos o state method para receber o metodo que sera utilizado 
    // que recebera da função o metodo post ou get
    ? const [ method, setMethod] = useState(null) 
    
    // criamos o callFetch para mapear os dados que serao chamado
    ? const [ callFetch, setCallFetch ] = useState(false);
    // ele sera monitoriado pelo useEffect, e sempre sera chamado para atualizadar os dados
    ? ? }, [url, callFetch])
* 18 Configurando o post
    // criamos um outro useEffect com a verificação do post
    ? useEffect(() => {

        // cria uma async function para envolver o if

        ? const httpRequest = async () => {

            ? if (method === "POST") {
     
             // Aqui criamos uma varivale let para criar um array com as configurações
             // deixando dinamico
             ? let fetchOptions = [ url, config];
     
             // aqui e feita a requisição
             ? const res = await fetch(...fetchOptions);
             ? const data = await res.json();
     
             // chamamos o callFetch 
             ? setCallFetch(data)
     
            ? }
        ? }
        // chama a função
        ? httpRequest()

    ? }, [config])

* 19 criando variavel de configuração
 ? const httpConfig = (data, method) => {
    // configurando o method
    ? if (method === "POST") {
        ? setConfig({
            ? method,
            ? headers: {
                ? "Content-Type": "application/json",
            ? },
            ? body: JSON.stringify(data),
        ? })
        ? setMethod(method)
    ? }
 ?}
 
 // depois de criado exportamos junto com o data do hook
 ? return { data, httpConfig };
 // na aplicação, inporta junto com o useFetch o httpConfig
 ? const { data: items, httpConfig } = useFetch(url)

 * 20 estado de loading
 // adicionamos no hook o estado de loading
 ? const [loading, setLoading] = useState(false)
 // definirmos onde colocar o loanding, ou seja, onde começa e onde termina
 // sera colocado dentro do fetchData 
 // logo no inicio da função fetchData
 ? setLoading(true)
 // e logo apos o setLoading(true) encerramos ele com o setLoading(false) no final da função
 ? setLoading(false)
 // ficando assim
 ? const fetchData = async () => {
    ? setLoading(true)

    ? const res = await fetch(url)
    ? const data = await res.json()
    ? setData(data)

    ? setLoading(false)
? }
// apos isso, exportamos o loading para ser usado no componente
? return { data, httpConfig, loading }
// importamos ele agora no componente
? const { data: items, httpConfig, loading } = useFetch(url)
// e fazemos uma verificação para exibição dele
? {loading && <p>Carregando...</p>}
// para simular isso vamos na aba network do devtools e simular uma requisição 
// e dimiuimos a velocidade de carregamento da pagina
// poedmos mudar a exibição da lista com a negação do loading
// exemplo
? {!loading && <ul>{items && items.map((item) => (<li key={item.id}>{item.nome}</li>))}</ul>}
// alternativa
? {loading? (<p>Carregando...</p>) : (<ul>{items && items.map((item))}</ul>)}

* 21 estado de loading no POST
// para isso removemos o botao quando o estado de loading estiver ativo
? {loadin && <button type="submit">Salvar</button>}
// podemos duplicar o input e quando o loaddin estiver true comocamos o disable
// para ficar mais agradavel
? {!loading && <button type="submit" disable>Salvar</button>}

* 22 tratando erros por meio do try catch 
// criamos o state de erro no hook useFetch
? const [error, setError] = useState(null)
// dentro do fetchData incluimos o try catch e colocamos o fetch dentro dele
// vai ficar assim
? const fetchData = async () => {
    ? setLoading(true)

    ? try {
        ? const res = await fetch(url)
        ? const data = await res.json()
        ? setData(data)

    ? } catch (error) {
        ? console.log(error.message)  // ira verificar se podemos exibir o tipo de mensagem de erro
        ? setError("Houve um erro ao carregar os dados!")
    ? }
    
    ? setLoading(false)
? }
// em seguida exportamos o erro no return do hook
? return { data, httpConfig, loading, error }
// depois importamos ele no componente no desctruring
? const { data: items, httpConfig, loading, error } = useFetch(url)
// no compoente podemos exibir o erro se ele existir
? {error && <p>{error}</p>}
// por nao termos erro na aplicação, provocamos o erro na url
? const url = "http://localhost:3001/nome_do_objeto"
// podemos mudar a exibição da lista para se houver erro ela nao exibir
? {!error && <li></li>}


* 23 inserindo o delete no hook
// criamos o state para receber o id do item que sera deletado
? const [id, setId] = useState(null)
// criamos na configuração dos metodos um else if com o metodo DELETE
// vai ficar assim
? const httpConfig = (data, method) => {
    // configurando o method
    ? if (method === "POST") {
        ? setConfig({
            ? method,
            ? headers: {
                ? "Content-Type": "application/json",
            ? },
            ? body: JSON.stringify(data),
        ? })
        ? setMethod(method)
    ? } else if (method === "DELETE") {
        ? setConfig({
            ? method,
            ? headers: {
                ? "Content-Type": "application/json",
            ? }
        ? })
        ? setMethod(method)
        ? setid(data)
    }
 ?}
// agora criamos um else if na resuisição com o moteodo DELETE
// vai ficar assim
! a variavel data vai precisar ser iniciada antes do if
? const httpRequest = async () => {

    // variaval data inicada fora do if
    ?let data,

        ? if (method === "POST") {
    
            // Aqui criamos uma varivale let para criar um array com as configurações
            // deixando dinamico
            ? let fetchOptions = [ url, config];
    
            // aqui e feita a requisição
            ? const res = await fetch(...fetchOptions);
            ? data = await res.json();
    
            
            
        ? } else if (method === "DELETE") {
            // criamos a variavel para remoção dinamica
            ? const deleteUrl = `${url}/${id}`
            // criamos o fetch com a url dinamica
            ? const res = await fetch(deleteUrl, config)
            ? data = res.json()


        ? }

        // colocamos o setCallFetch fora do if para que ele seja chamado sempre
        // chamado 
        // chamamos o callFetch 
            ? setCallFetch(data)
* 24 ajustando o fronta para deletar o item da lista
// inserindo o botao para excluir
? <button onClick={() => handleRemove(produtos.id)}>Excluir</button>
// criamos a função para remover
? const handleRemove = (id) => {
    // chamamos o httpconfig com o id e com o verbo
    ? httpConfig(id, "DELETE")
? }
            


*/
