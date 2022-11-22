let popup = document.getElementById("popup");

// let numeroTarjeta = document.getElementById('nroTarjeta');





function openPopup(){
    popup.classList.add("popup");
}

// function closePopup(){
//     popup.classList.remove("popup");
// }


// numeroTarjeta.addEventListener('numeroTarjeta', function(){
//     if(this.value.length == 10)
//     this.value = this.value.slice(1,10);
// });


function NoCero(){

    let numeroTarjeta = document.getElementById('nroTarjeta').value;

    if(document.getElementById('nroTarjeta').value == 0){
        document.getElementById('mensaje').innerHTML = "El nro de tarjeta no puede ser cero."
        
    }else{
        document.getElementById('mensaje').innerHTML = "Nro de tarjeta válido."
    }

    let arrayNroTarjeta = [numeroTarjeta];
    console.log(arrayNroTarjeta);
    let suma = 0;
    for(let i = 0; i < arrayNroTarjeta.length; i++){
        if(arrayNroTarjeta[i] % 2 == 0){
            console.log("Es par");
            // let suma = 0;
            arrayNroTarjeta.forEach(function(arrayNroTarjeta){
                suma += arrayNroTarjeta - arrayNroTarjeta[9];

                if(suma % 2 == 0){
                    console.log("El nro es par, por lo tanto tarjeta inválida");
                    document.getElementById('mensaje').innerHTML = "Número de tarjeta inválida.";
                    
                }else{
                    console.log("El nro es impar! GRACIAS DIOS");
                }
            });
            console.log("La suma es:"+suma);
        }else{
            console.log("Es impar");
            if(suma % 2 != 0){
                console.log("El nro es impar, tarjeta inválida.");
                document.getElementById('mensaje').innerHTML = "Número de tarjeta inválida.";
                
            }else{
                console.log("La suma es par!")
            }
        }
    }

}