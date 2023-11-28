/*
! IMPORTANTE 1 - as classes de css, no React utilizamos className=""
! IMPORTANTE 2 - o HTML será sempre enviado no return

// Criando componentes
● Na maioria dos projetos os componentes ficam em uma pasta chamada
components, que devemos criar;
● Geralmente são nomeados com a camel case: FirstComponent.js;
● No arquivo criamos uma função, que contém o código deste componente
(a lógica e o template);
● E também precisamos exportar esta função, para reutilizá-lo;
● Vamos ver na prática!
+
// Importando componente
● A importação é a maneira que temos de reutilizar o componente;
● Utilizamos a sintaxe: import X from ‘./componentes/X’ onde X é o nome
do componente;
● Para colocar o componente importado em outro componente, precisamos
colocá-lo em forma de tag: <FirstComponent />
● E então finalizamos o ciclo de importação;
● Vamos importar o FirstComponent em App;

// JSX
● JSX é o HTML do React;
● Onde vamos declarar as tags de HTML que serão exibidas no navegador;
● Ficam no return do componente;
● Temos algumas diferenças do HTML, por exemplo: class será className;
● Isso se dá pelas instruções semelhantes de JS e HTML, pois o JSX é
JavaScript, então algumas terão nomes diferentes;
● O JSX pode ter apenas um elemento pai;
! O retorno dos elementos precisam estar envoltos em uma 
! div para que não tenha erro no React

// passo a passo
1- Criar pasta components
2- Criar arquivo com nome em CamelCase com extenssão js
3- Sintaxe
    * EX: 
        const FirstComponent = () => {
            return (
                <div>
                    <h2>Meu Primeiro Componente</h2>
                </div>
            )
        }
4- importar o componente no arquivo principal
    * EX:
        import FirstComponent from './components/FisrtComponents';
5- utilizar o componente na aplicação
    * EX:
        function App() {
            return (
                <div className="App">
                <h1>Fundamentos React - Componentes</h1>
                <FirstComponent/> --> Componente utilizado
                </div>
            );
        }

export default FirstComponent;

// Comentários no componente
● Podemos inserir comentários de duas maneiras no componente;
● Na parte da função, onde é executada a lógica, a sintaxe é: // Algum
comentário;
● E também no JSX: { /* Algum comentário */ /*}
● As chaves nos permitem executar sentenças em JavaScript, veremos
isso mais adiante;
● Vamos testar os comentários!
*/