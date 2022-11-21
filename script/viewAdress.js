const direccionesActuales = document.getElementById("tablaDirecciones");
const direcciones = JSON.parse(localStorage.getItem("direcciones"))  || [];

for (i = 0; i < direcciones.length; i++) {
    if(direcciones[i].alias != undefined){
        direccionesActuales.innerHTML += `
        <tbody >                         
        
        <tr> <td>${direcciones[i].alias}</td> <td>${direcciones[i].direccion} <i class="fa-regular fa-trash-can eliminar" style="cursor: pointer;"></i></tr> </td>
        </tbody> 
        `
        
    }
        
    
}



