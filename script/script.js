var agregarAlCarrito = document.getElementsByName("agregar");
var productosEnCarrito = document.getElementById("cantidadCarrito");

var productoAgregado = 0;
productosEnCarrito.innerHTML = productoAgregado;

agregarAlCarrito.forEach((item)=>{
    item.addEventListener('click',()=>{
        
        productoAgregado++;
        localStorage.setItem("productoAgregado", productoAgregado);
        
        var agregado = localStorage.getItem("productoAgregado");
        productosEnCarrito.innerHTML = agregado;

    });
});

