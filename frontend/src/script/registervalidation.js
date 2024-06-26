function Validation(values){
    let error = {};
    const email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;  
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phone_pattern = /^\d{10}$/;

    if(values.userName === ""){
        error.userName = "Name Should not be empty";
    }else{
        error.userName = "";
    }

    if(values.phone === ""){
        error.phone = "phone Should not be empty";
    }else if(!phone_pattern.test(values.phone)){
        error.phone = "Phone Didn't match";
    }else{
        error.phone = "";
    }

    if(values.email === ""){
        error.email = "Emai Should not be empty";
    }else if(!email_pattern.test(values.email)){
        error.email = "Email Didn't match";
    }else{
        error.email = "";
    }

    if(values.password === ""){
        error.password = "password Should not be empty";
    }else if(!password_pattern.test(values.password)){
        error.password = "weak password";
    }else{
        error.password = "";
    }

    if(values.repeatePassword === ""){
        error.repeatePassword = "re-enter-password Should not be empty";
    }else if(!(values.repeatePassword === values.password)){
        error.repeatePassword = "password Didn't match";
    }else{
        error.repeatePassword = "";
    }

    return error;
}
export default Validation;