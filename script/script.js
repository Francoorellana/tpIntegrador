//Modelando mas vendidos, comprar y agregar al carrito
const mostrarMasVendidos = document.getElementById("productosMayorVenta");
const modalContainer = document.getElementById("modal-container");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


favoritos.forEach((fav) => {
  let productosMasVendidos = document.createElement("div");
  productosMasVendidos.className = "mas-vendidos";
  productosMasVendidos.innerHTML = `
            <div class="card" >
                <img src="${fav.img}" >
                <h5 >${fav.nombre}</h5>
                <p> ${fav.descripcion}</p>
            </div>   
       `

  mostrarMasVendidos.append(productosMasVendidos);

  let botonComprar = document.createElement("button");
  
  botonComprar.innerText = `Comprar`
  productosMasVendidos.append(botonComprar);

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

verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML =`
    <h1 class="modal-header-title">Carrito de compras</h1>
  `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h2");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);

  /*si no es fav es productos*/
  favoritos.forEach((productos) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
      <img src="${productos.img}" >
      <h3>${productos.nombre}</h3>
      <p>${productos.precio} $</p>
    `;
    modalContainer.append(carritoContent);

  });
  
  

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalComprado = document.createElement("div");
  totalComprado.className = "total-content";
  totalComprado.innerHTML = `total a pagar: ${total} $`;
  modalContainer.append(totalComprado);
});
