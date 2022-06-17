function validateForm(){
    let firstname = document.getElementById("first-name");
    let lastname = document.getElementById("last-name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let linebreak = document.createElement("br");
   

   // validate first name field
    if (firstname.value == ""){
        let label = document.getElementById("firstname-label")
        firstname.style.borderColor= "red";
        firstname.appendChild(linebreak);
        label.innerHTML = "Firstname cannot be empty."
        return false
    }

     // validate last name field
    else if (lastname.value == ""){
        let label = document.getElementById("lastname-label")
        lastname.style.borderColor = "red";
        lastname.appendChild(linebreak);
        label.innerHTML = "Lastname cannot be empty."
        return false
    }

     // validate first email field
    else if (email.value == ""){
        let label = document.getElementById("email-label")
        email.style.borderColor = "red";
        email.placeholder = "email@example.com"
        email.appendChild(linebreak);
        label.innerHTML = "Email cannot be empty."
        return false
    }

     // validate password field
    else if (password.value == ""){
        let label = document.getElementById("password-label")
        password.style.borderColor= "red";
        password.appendChild(linebreak);
        label.innerHTML = "password cannot be empty";
        return false;
    }
    else if (password.value.length < 8){
        let label = document.getElementById("password-label")
        password.style.borderColor= "red";
        password.appendChild(linebreak);
        label.innerHTML = "password cannot be less than 8";
        return false;
    }
    else{
        return true
    };
}
