var agregarAlCarrito = document.getElementsByName("agregar");
var productosEnCarrito = document.getElementById("cantidadCarrito");
var productoAgregado = 0;


agregarAlCarrito.addEventListener("click",()=>{
    productoAgregado++;
    productosEnCarrito.innerHTML = productoAgregado;
})



/*
agregarAlCarrito.addEventListener("click",(e)=>{
    console.log(agregarAlCarrito.value);

})

*/