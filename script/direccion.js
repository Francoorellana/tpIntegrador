const direcciones = JSON.parse(localStorage.getItem("direcciones"))  || [];
const botonGuardar = document.getElementById('boton-guardar');
var alias = document.querySelector("#alias");
var direccion = document.querySelector("#direccion");


//guardando direccion
function logicaGuardado() {

  var nuevaDireccion = {
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