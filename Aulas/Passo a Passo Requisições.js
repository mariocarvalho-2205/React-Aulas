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
    ? const [data, setData] = useState(null); ou array vazio - useState([])
* 9 Criar o useEffect para fazer a requisição
    *? Criar url para requisição fora da função do componente abaixo das importações
        ? const url = "http://localhost:3000/nome_do_objeto"
    *? Criar useEffect para fazer a req
    ? useEffect( async () => {
        ? const res = await fetch (url)
        ? const data = await res.json()

*/