function verificarPass(){
    let password = document.formPass.password.value
    let password2 = document.formPass.password2.value

    // let RegExp = /^([A-Z]+[A-z]+[0-9][a-zA-Z0-9]{8,})$/;
    // ej password : Aa12345678s12
    
    if(password != password2){
        alert("Las contraseñas son distintas. Reingrese contraseñas");
    }
    
    if(!(password.length >= 8 && password2.length >=8)){
        alert("Contraseña debe tener un minimo de 8 caracteres");
    }
    
    console.log(password);
}