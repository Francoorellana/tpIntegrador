const categoriaTartas = document.querySelector(".categoriaProducto");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  productos.forEach((prod) => {
    
    var tartasContenido = document.createElement("div");
    tartasContenido.className = "tcard";
    if(prod.tipo === "Tarta"){
    
    tartasContenido.innerHTML = `
      <img src="${prod.img}" >
      <h3>${prod.nombre}</h3>
      <p>${prod.precio} $</p>
      <i class="fa-solid fa-cart-arrow-down"></i>
      
    `;
    let botonComprar = document.createElement("button");
  
    botonComprar.innerText = `Comprar`
    tartasContenido.append(botonComprar);
  
    botonComprar.addEventListener("click", () => {
      carrito.push({
        id: prod.id,
        nombre: prod.nombre,
        precio: prod.precio
      })
      contarCarrito();
      estadoCarrito();
    }
    )
    } 
    categoriaTartas.append(tartasContenido);

  });

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