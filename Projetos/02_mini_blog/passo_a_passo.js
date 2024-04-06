/*
// Configuração do firebase no projeto
? 1 - Criar pasta com nome firebase no diretorio raiz do projeto 
? 2 - cria arquivo dentro da pasta com nome de config.js
? 3 - copia o codigo de configuração do firebase
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyDdpR6sHADylkZggYqfV1uA3wkA6BKkAjk",
    authDomain: "miniblog-b34e9.firebaseapp.com",
    projectId: "miniblog-b34e9",
    storageBucket: "miniblog-b34e9.appspot.com",
    messagingSenderId: "120501521573",
    appId: "1:120501521573:web:e96eed4696bddcf518114c"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

? 4 - importar e iniciar o banco de dados firestore no mesmo arquivo de configuração 
    import { getFirestore } from "firebase/firestore" 
    const db = getFirestore(app)
? 5 - exporta o banco de dados do arquivo 
    export { db }






*/
