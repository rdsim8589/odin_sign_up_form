function getFormData() {
    const form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
        const fields = form.elements;
        e.preventDefault();        
        for (const field of fields) {
            console.log( `${field.name}: ${field.value}`);
        }
        if (fields["password"].value != fields["confirm_password"].value) {
            console.log("stopped");
            return false;
        }
        //would submit the form once information is valid
        form.submit() 
        return true;
    })
}

function validate_password() {
    const password = document.getElementById("password");
    const confirm_password = document.getElementById("confirm_password");
    if (password.value != confirm_password.value) {
        password.style = "border: solid red;";
        confirm_password.style = "border: solid red;";
        const error = document.getElementById("password_error");
        error.style = "visibility: visible";
        return false
    } else {
        password.style = "border: thick solid green;";
        confirm_password.style = "border: solid green;";
        const error = document.getElementById("password_error");
        error.style = "visibility: hidden";
    }
    return true
}

getFormData()
