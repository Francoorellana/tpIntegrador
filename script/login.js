const botonLogin = document.getElementById('loguearse');
const usuariosLogueados = JSON.parse(localStorage.getItem("usuariosLogueados")) || [];
var nombreI = document.querySelector("#usuario");
var passwordI = document.querySelector("#contraseña");

//2)habiligar boton login

function habilitarLogin() {
  let contador = 0;
  if(nombreI.value == ""){
    contador++;
  }
  if(passwordI.value == ""){
    contador++;
  }
  if(contador == 0){
    botonLogin.disabled = false;
  }else{
    botonLogin.disabled = true;
  }
 
}
nombreI.addEventListener("keyup",habilitarLogin)
passwordI.addEventListener("keyup",habilitarLogin)

//guardando users
function logicaGuardado() {

  var nuevoUsuario = {
    nombre: nombreI.value,
    contraseña: passwordI.value
  };
  console.log(nuevoUsuario);
  usuariosLogueados.push(nuevoUsuario);

}
botonLogin.addEventListener("click", () => {

  logicaGuardado();
  estadoUsers();

})

const estadoUsers = () => {
  localStorage.setItem("usuariosLogueados", JSON.stringify(usuariosLogueados));
}

