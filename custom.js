function validateForm(){
    e.prev
    let firstname = document.getElementById("first-name");
    let lastname = document.getElementById("last-name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let linebreak = document.createElement("br");
    let span = document.createElement("span")

   //minimum password length validation
    if (firstname.value == ""){
        firstname.style.borderColor= "red";
    }

    else if (lastname.value == ""){
        lastname.style.borderColor = "red";
    }

    else if (email.value == ""){
        email.style.borderColor = "red";
    }

    else if (password.value.length < 8){
        password.style.borderColor= "red";
        span.style.color = "red";
        span.innerHTML = "password cannot be less than 8";
        password.appendChild(linebreak);
        password.appendChild(span);
        return false;
    };
};
