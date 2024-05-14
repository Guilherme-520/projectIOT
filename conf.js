// Importe as funções necessárias dos SDKs que você precisa
const firebase = require("firebase");

// Sua configuração Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBeo7IrZt5QNF4iydR4iIefIbE4Q5Z5_2o",
    authDomain: "projectiot-40548.firebaseapp.com",
    projectId: "projectiot-40548",
    storageBucket: "projectiot-40548.appspot.com",
    messagingSenderId: "773740698896",
    appId: "1:773740698896:web:7df0d3451fd1225a69d995"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const lixo = db.collection("lixo");

module.exports = lixo;