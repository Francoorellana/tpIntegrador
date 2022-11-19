const botonLogin = document.getElementById('loguearse');
const valorIngresado = document.getElementById("nombre");

const usuariosLogueados =  JSON.parse(localStorage.getItem("usuariosLogueados")) || [];

//2)habiligar boton login

function habilitarLogin() {
  
  botonLogin.setAttribute("disabled", "true");
  var formulario = document.querySelector(".form-login");
  formulario.addEventListener("change", (e) => {
    botonLogin.removeAttribute("disabled");
  })
}

function logicaGuardado(nombreIngresado,passwordIngresada){
  
  var nuevoUsuario = {
    nombre: nombreIngresado,
    contraseña: passwordIngresada
  };
  console.log(nuevoUsuario);
  usuariosLogueados.push(nuevoUsuario);
  
}


botonLogin.addEventListener("click", () => {
  var nombreI = document.querySelector("#usuario").value
  var passwordI = document.querySelector("#contraseña").value

  logicaGuardado(nombreI,passwordI);
  estadoUsers();
})
 

const estadoUsers = () => {
  localStorage.setItem("usuariosLogueados",JSON.stringify(usuariosLogueados));
}

habilitarLogin();


