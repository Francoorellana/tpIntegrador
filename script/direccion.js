let direcciones = JSON.parse(localStorage.getItem("direcciones")) || [];
var direccionesActuales = document.getElementById("tablaDirecciones");
const botonGuardar = document.getElementById('boton-guardar');
var alias = document.querySelector("#alias");
var direccion = document.querySelector("#direccion");

var contador = "";
contador = direcciones.length;



//guardando direccion
function logicaGuardado() {

  var nuevaDireccion = {
    id: contador,
    alias: alias.value,
    direccion: direccion.value
  };
  console.log(nuevaDireccion);
  direcciones.push(nuevaDireccion);

}

if (botonGuardar !== null) {
  botonGuardar.addEventListener("click", () => {

    logicaGuardado();
    estadoUsers();

  })
}



if (direccionesActuales !== null) {

  function mostrarDirecciones ()  {

    for (i = 0; i < direcciones.length; i++) {
      if (direcciones[i].alias != undefined) {
        direccionesActuales.innerHTML += `
          <tbody >                         
          
          <tr> <td>${direcciones[i].alias}</td> <td>${direcciones[i].direccion} </td> <td name="eliminar" ><i  class="fa-regular fa-trash-can eliminar" style="cursor: pointer;"></i> </td> </tr> 
          </tbody> 
          `

      }
    }
  }

  mostrarDirecciones();

}

let eliminar = () => {

  console.log("ingresa");
  let foundId = direcciones.find((element) => element.id);
  console.log(foundId);
  direcciones = direcciones.filter((direccionesId) => {
    return direccionesId !== foundId;
  })
  console.log(direcciones);
  estadoUsers();
  mostrarDirecciones();

}

var botonEliminar = document.getElementsByName("eliminar");

botonEliminar.forEach((item) => {
  item.addEventListener("click", eliminar)
})

var estadoUsers = () => {
  localStorage.setItem("direcciones", JSON.stringify(direcciones));
}

