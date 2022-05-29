function verify() {
     if (password.value === passwordconfirm.value) {
        message.classList.remove("notmatching")
        message.classList.add("matching")
        message.textContent = "Passwords are matching! ✓"
        createAccount.disabled = false;
        password.classList.remove("error");
        passwordconfirm.classList.remove("error");
    }
    
    else {
        message.classList.remove("matching")
        message.classList.add("notmatching")
        message.textContent = "Passwords are not matching! ✗"
        createAccount.disabled = true;
        password.classList.add("error");
        passwordconfirm.classList.add("error");
    }
}


let password = document.querySelector("#password");
let passwordconfirm = document.querySelector("#passwordconfirm");
let message = document.querySelector(".match");
let createAccount = document.querySelector("button");

/* For future reference, I could've removed the onchange="verify()" from the html, and then just added an eventlistener on the button to perform the verify function. The reason I didn't, however, is just because I ran into a problem that once I disabled the button, I couldn't press it again to re-validate the text boxes. This way is also much more responsive, it doesn't make the user have to wait to press submit, instead it provides like feedback with the onchange="verify()" css attribute. */
