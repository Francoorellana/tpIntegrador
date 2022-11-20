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

