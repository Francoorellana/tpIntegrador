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

