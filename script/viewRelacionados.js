

function mostrarProductos() {
  const productoDisponible = document.querySelector("#tipoDeProducto").innerHTML; //tarta
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

}


mostrarProductos();