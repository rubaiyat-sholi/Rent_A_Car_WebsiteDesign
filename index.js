const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    // get values
    const emailValue = email.value
    const passwordValue = password.value

    if(emailValue === ""){
        setErrorFor(email, "Email cannot be blank");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid");
    }
    else{
        setsuccessFor(email);
    }

    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be blank");
    }else if(passwordValue.length < 8){
        setErrorFor(password, "Password should be atleast 8 characters long");
    }else{
        setsuccessFor(password);
    }


}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "control error";
}

function setsuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "control success";
}

function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}