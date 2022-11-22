var direccionesActuales = document.getElementById("tablaDirecciones");
var direcciones = JSON.parse(localStorage.getItem("direcciones"))  || [];


const mostrarDirecciones = () => {

    for (i = 0; i < direcciones.length; i++) {
        if(direcciones[i].alias != undefined){
            direccionesActuales.innerHTML += `
            <tbody >                         
            
            <tr> <td>${direcciones[i].alias}</td> <td>${direcciones[i].direccion} </td> <td name="eliminar" ><i  class="fa-regular fa-trash-can eliminar" style="cursor: pointer;"></i> </td> </tr> 
            </tbody> 
            `
    
        }
    }    
}
mostrarDirecciones();

function eliminar() {
    localStorage.removeItem("direcciones");
    console.log("ingresa");
    var foundId = direcciones.find((element) => element.id);
    
    direcciones = direcciones.filter((direccionesId)=>{
        return direccionesId !== foundId;
    })
    localStorage.setItem("direcciones",JSON.stringify(direcciones));
    mostrarDirecciones();
        
}


const botonEliminar = document.getElementsByName("eliminar");


botonEliminar.forEach((item)=>{
    item.addEventListener("click",eliminar)    
})
    //localStorage.setItem("direcciones", JSON.stringify(direcciones));


