const confirmPassword = document.querySelector("#confirm-password");
const password = document.querySelector("#password");
const message = document.querySelector("#error-message");
function matchPassword(){
    const isMatch = confirmPassword.value.localeCompare(password.value);
    if (isMatch){
        confirmPassword.classList.add("error");
        message.style["display"] = "block";
    }
    else{
        confirmPassword.classList.remove("error");
        message.style["display"] = "none";
    }
}
confirmPassword.addEventListener("blur", matchPassword);