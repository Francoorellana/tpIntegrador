const direccionesActuales = document.getElementById("tablaDirecciones");
const direcciones = JSON.parse(localStorage.getItem("direcciones"))  || [];

for (i = 0; i < direcciones.length; i++) {
    if(direcciones[i].alias != undefined){
        direccionesActuales.innerHTML += `
        <tbody >                         
        
        <tr> <td>${direcciones[i].alias}</td> <td>${direcciones[i].direccion} </td> <td><i id="eliminar" class="fa-regular fa-trash-can eliminar" style="cursor: pointer;"></i> </td> </tr> 
        </tbody> 
        `

    }
}


const botonEliminar = document.getElementById("eliminar");
if(botonEliminar != null){
    botonEliminar.addEventListener("click", () => {
        let newData = direcciones.filter(item => item.alias !== direcciones.alias)
        console.log(newData);
        /*localStorage.setItem('data', JSON.stringify(newData));
        setProducts(newData)*/
    })
}
