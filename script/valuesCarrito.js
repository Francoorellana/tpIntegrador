let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let mostrarRelacionados = document.getElementsByClassName("relacionados")[0];

const estadoCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const contarCarrito = () => {
    let carritoLength = carrito.length;
    localStorage.setItem("carritoLength", carritoLength);

    let cantidadEnCarrito = document.getElementById("cantidadDeProductos");
    cantidadEnCarrito.innerHTML = localStorage.getItem("carritoLength");
}

const buscarCategoria = () => {

    document.addEventListener("keyup", (e) => {

        if (e.target.matches("#buscar")) {
            document.querySelectorAll(".claseCategoria").forEach(categoria => {
                categoria.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                    ? categoria.classList.remove("filtro")
                    : categoria.classList.add("filtro")
            });
        }
    });

}

buscarCategoria();
contarCarrito();
estadoCarrito();


const productoDisponible = document.querySelector("#tipoDeProducto").innerHTML;

productos.forEach((prod) => {
    let productoRelacionado = document.createElement("div");
    
    productoRelacionado.innerHTML = `
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    
        <div class="card" >
            <img src="${prod.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">${prod.descripcion}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        </div>


    
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

        
    
    `;

    if (productoDisponible == prod.tipo) {
        console.log("ingresa")
        mostrarRelacionados.append(productoRelacionado);
    }
});


/*

<div class="carousel-item active">
<div class="card" >
    <img src="${prod.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${prod.nombre}</h5>
      <p class="card-text">${prod.descripcion}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>

</div>
*/