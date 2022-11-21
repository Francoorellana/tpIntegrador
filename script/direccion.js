const direcciones = JSON.parse(localStorage.getItem("direcciones"))  || [];
const botonGuardar = document.getElementById('boton-guardar');
var alias = document.querySelector("#alias");
var direccion = document.querySelector("#direccion");

var contador = "";
contador = direcciones.length;



//guardando direccion
function logicaGuardado() {
  
  var nuevaDireccion = {
    id : contador,
    alias: alias.value,
    direccion: direccion.value
  };
  console.log(nuevaDireccion);
  direcciones.push(nuevaDireccion);

}
botonGuardar.addEventListener("click", () => {

  logicaGuardado();
  estadoUsers();

})

const estadoUsers = () => {
  localStorage.setItem("direcciones", JSON.stringify(direcciones));
}
