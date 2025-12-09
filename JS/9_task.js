//user details validation form

var userDetailsForm = {           
    name: "",
    email:""
}

function validateName(name) {
    const isName = name.length>4;
    return isName;  
}

function validateEmail(email) {
    const isEmail = email.includes("@") && email.includes(".");
    return isEmail;
}

function submitForm(name, email) {
    if (validateName(name) && validateEmail(email)) {
        userDetailsForm.name = name;
        userDetailsForm.email = email;
        console.log("Form submitted successfully:", userDetailsForm);
    } else {
        console.log("Validation failed. Please check your inputs.");
    }
}

// Example usage:
submitForm("Omkar", "iomka@gmail.com"); // Valid input
submitForm("Om", "iomkagmail.com"); // Invalid input
