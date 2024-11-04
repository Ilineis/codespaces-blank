import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0yjauCn_EFFwttsPBtLcNFXD7PKNPd2Y",
    authDomain: "hftghfjghytu.firebaseapp.com",
    projectId: "hftghfjghytu",
    storageBucket: "hftghfjghytu.appspot.com",
    messagingSenderId: "771583884259",
    appId: "1:771583884259:web:69b868a4d73206c2d53ed6",
    measurementId: "G-W44Q7Y99H1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(`Учетная запись создана для: ${userCredential.user.email}`);
            alert('Учетная запись успешно создана!');
        })
        .catch((error) => {
            console.error('Ошибка при создании учетной записи:', error.message);
            alert('Ошибка: ' + error.message);
        });
};

export const loginUser = (email, password) => {
    const errorMessageElement = document.getElementById('error-message');
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(`Пользователь вошел в систему: ${userCredential.user.email}`);
            errorMessageElement.style.display = 'none'; // Скрыть сообщение об ошибке при успешном входе
            window.location.href = 'home.html'; // Перенаправление на домашнюю страницу
        })
        .catch((error) => {
            console.error('Ошибка при входе:', error.message);
            errorMessageElement.style.display = 'block'; // Показать сообщение об ошибке
        });
};