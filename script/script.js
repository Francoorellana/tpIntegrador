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


/*
const getContador = () => {
    const cont = localStorage.getItem("contador")
    return cont
  }
  
const setContador = () => {
      localStorage.setItem("contador",contadorDeProductos)
  }
  
const inicilizarContador = () => {
    if (getContador() != null) {
        contadorDeProductos = getContador()
    }
  }
  console.log(getContador())
  // inicia
  inicilizarContador()

  boton_limpiar.addEventListener('click', () => {
    limpiarTodo()
  })
  
lista_tareas.addEventListener('click', (event) => {
    if(event.path[0].type == 'submit') {
      eliminarTarea(event.path[1].id)
    }
  })
  
lista_tareas.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
      editarTarea(event.path[1].id, event.path[0].value)
    }
  })
  const limpiarTodo = () => {
    arregloTareas = []
    contador = 0
    setArregloTareas()
    setContador()
  }
  const eliminarTarea = (idTarea) => {
    let datos = getArregloTareas()
    let newArreglo = []
    if (datos != null) {
      for (const tarea of datos) {
        if (tarea.id != idTarea) {
          newArreglo.push(tarea)
        }
      }
    }
    arregloTareas = newArreglo
    setArregloTareas()

      var arregloTareas = []  

  
  const getArregloTareas = () => {
    setContador()
    const arreglo = JSON.parse(localStorage.getItem("arregloTareas"))
    return arreglo
  }
  
  const setArregloTareas = () => {
    localStorage.setItem("arregloTareas",JSON.stringify(arregloTareas))
    listarTareas()
  }
  
  }
  const listarTareas = () => {
    lista_tareas.innerHTML = ''
    let datos = getArregloTareas()
    if (datos != null) {
      for (const tarea of datos.reverse()) {
        lista_tareas.innerHTML += `
          <li id="${tarea.id}">
              <input type="text" class="input-tarea" value="${tarea.descripcion}">  
              <button class="boton-eliminar">X</button>
          </li>
        `
      }
    }
  }

  inicia
    listarTareas()
  */