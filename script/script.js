const productos = [
    {
        id: 1,
        nombre: "Tarta de Verdura",
        descripcion: "",
        precio: 200
    },
    {
        id: 2,
        nombre: "Tarta de Choclo",
        descripcion: "",
        precio: 200
    },
    {
        id: 3,
        nombre: "Tarta de Calabaza",
        descripcion: "",
        precio: 200
    },
    {
        id: 4,
        nombre: "Vianda fit",
        descripcion: "",
        precio: 200
    },
    {
        id: 5,
        nombre: "Vianda proteica",
        descripcion: "",
        precio: 200
    },
    {
        id: 6,
        nombre: "Vianda vegana",
        descripcion: "",
        precio: 200
    },
    {
        id: 7,
        nombre: "Vianda ejecutiva",
        descripcion: "",
        precio: 200
    },
    {
        id: 8,
        nombre: "Menu semanal vegetariano",
        descripcion: "",
        precio: 200
    },
    {
        id: 9,
        nombre: "Menu semanal fit",
        descripcion: "",
        precio: 200
    },
    {
        id: 10,
        nombre: "Menu semanal premium",
        descripcion: "",
        precio: 200
    },
]

//1)persistir carrito en localstorage
const agregarAlCarrito = document.getElementsByName("agregar");
const productosEnCarrito = [];
const mostrarCantidadDeProductosEnCarrito = document.getElementById("cantidadDeProductos");

var contadorDeProductos = localStorage.getItem("productoAgregado");

agregarAlCarrito.forEach((item)=>{
    item.addEventListener('click', () => {
               
        localStorage.setItem("productoAgregado", JSON.stringify(++contadorDeProductos));
        mostrarCantidadDeProductosEnCarrito.innerHTML = localStorage.getItem("productoAgregado");
    
    })
});

//2)habiligar boton login
const botonLogin = document.getElementById("loguearse");
function habilitarLogin() {
    
    botonLogin.setAttribute("disabled", "true");
    var formulario = document.querySelector(".form-login");
    formulario.addEventListener("change",(e)=>{
        botonLogin.removeAttribute("disabled");
    })
}
habilitarLogin();

//3)guardar usuario en ls
const usuariosLogueados = []
const contador = 0

function guardarUsuarios(){
  
  const getUsuariosLogueados = () => {
    const arrayUsuarios = JSON.parse(localStorage.getItem("Usuarios"))
    return arrayUsuarios
  }

  const setUsuariosLogueados = () => {
    localStorage.setItem("Usuarios",JSON.stringify(usuariosLogueados))
  }

  const agregarUsuario = (nombre) => {
    contador++
    let newUsuario = {
      id: contador,
      nombre: nombre
    }
    if (getUsuariosLogueados() != null) {
      arrayUsuarios = getUsuariosLogueados()
    }
    arrayUsuarios.push(newUsuario)
    setUsuariosLogueados()
  }
}

//4)pop up
let popup = document.getElementById("popup");
let numeroTarjeta = document.getElementById('nroTarjeta');


function openPopup(){
    popup.classList.add("popup");
}


numeroTarjeta.addEventListener('numeroTarjeta', function(){
    if(this.value.length == 10)
    this.value = this.value.slice(1,10);
});


function NoCero(){
    if(document.getElementById('nroTarjeta').value == 0){
        document.getElementById('mensaje').innerHTML = "El nro de tarjeta no puede ser cero."
        
    }else{
        document.getElementById('mensaje').innerHTML = "Nro de tarjeta válido."
    }
}

function verificarPass(){
    let password = document.formPass.password.value
    let password2 = document.formPass.password2.value

    if(password != password2){
        alert("Las contraseñas son distintas. Reingrese contraseñas");
    }
    
    if(!(password.length >= 8 && password2.length >=8)){
        alert("Contraseña debe tener un minimo de 8 caracteres");
    }
    
}

