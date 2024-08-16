import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./firebase.js";

const email = document.getElementById("sign-email")
const password = document.getElementById("sign-pass")
const signUpBtn = document.getElementById("sign-up-btn")

const handleCreation = () => {
    setTimeout(() => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                // Signed up 
                // console.log(email, password)
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
            email.value = ""
            password.value = ""
    }, 2000)
}

signUpBtn.addEventListener("click", handleCreation)