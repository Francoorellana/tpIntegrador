//Modelando mas vendidos, comprar y agregar al carrito
const mostrarMasVendidos = document.getElementById("productosMayorVenta");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


favoritos.forEach((fav) => {
  let productosMasVendidos = document.createElement("div");
  productosMasVendidos.className = "mas-vendidos";
  productosMasVendidos.innerHTML = `
        
    <img src="${fav.img}" > 
    <h5 >${fav.nombre}</h5>
    <p >${fav.descripcion}</p>      
    `
  mostrarMasVendidos.append(productosMasVendidos);

  let botonComprar = document.createElement("button");
  botonComprar.innerText = "Comprar";
  mostrarMasVendidos.append(botonComprar);

  botonComprar.addEventListener("click", () => {
    carrito.push({
      id: fav.id,
      nombre: fav.nombre,
      precio: fav.precio
    })
    contarCarrito();
    estadoCarrito();
  }
  )
  console.log(carrito)

});

//1)persistir carrito en localstorage
const estadoCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

const contarCarrito = () => {
  let carritoLength = carrito.length;
  localStorage.setItem("carritoLength", carritoLength);

  let cantidadEnCarrito = document.getElementById("cantidadDeProductos");
  cantidadEnCarrito.innerHTML = localStorage.getItem("carritoLength");
}

contarCarrito();
estadoCarrito();





//3)guardar usuario en ls


/*
//4)pop up
let popup = document.getElementById("popup");
let numeroTarjeta = document.getElementById('nroTarjeta');


function openPopup() {
  popup.classList.add("popup");
}


numeroTarjeta.addEventListener('numeroTarjeta', function () {
  if (this.value.length == 10)
    this.value = this.value.slice(1, 10);
});


function NoCero() {
  if (document.getElementById('nroTarjeta').value == 0) {
    document.getElementById('mensaje').innerHTML = "El nro de tarjeta no puede ser cero."

  } else {
    document.getElementById('mensaje').innerHTML = "Nro de tarjeta válido."
  }
}

function verificarPass() {
  let password = document.formPass.password.value
  let password2 = document.formPass.password2.value

  if (password != password2) {
    alert("Las contraseñas son distintas. Reingrese contraseñas");
  }

  if (!(password.length >= 8 && password2.length >= 8)) {
    alert("Contraseña debe tener un minimo de 8 caracteres");
  }

}

*/