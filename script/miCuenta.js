

const tabla = document.getElementById("tabla");
tabla.addEventListener("click", borrar);

const tablaPago = document.getElementById("tablaPago");
tablaPago.addEventListener("click", borrarPago);

function borrar(e){
    if(e.target.matches(".eliminar")){
        // console.log("Eliminado");
        // console.log(e.target.parentNode.parentNode.rowIndex);
        const tIndex = e.target.parentNode.parentNode.rowIndex;
        tabla.deleteRow(tIndex);
    }
}

function borrarPago(e){
    if(e.target.matches(".eliminar")){
        const tIndexPago = e.target.parentNode.parentNode.rowIndex;
        tablaPago.deleteRow(tIndexPago);
    }
}



const formTarjeta = document.getElementById("formTarjeta");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     let enviarFormData = new FormData(formTarjeta);
//     const tarjetaGuardadaTabla = document.getElementById("tarjeta-guardada");
//     let newTableRow = tabla.insertRow(-1);
//     newTableRow.textContent = "nueva";
//     // let newTableCell = newTableRow.insertCell(0);
//     // newTableCell.textContent = "Nueva celda";

// });

// const tarjetaGuardadaTabla = document.getElementById("tarjeta-guardada");
// let newTableRow = tabla.insertRow(-1);
// let newTableCell = newTableRow.insertCell(0);

function agregarFormAMiCuenta(){
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let enviarFormData = new FormData(formTarjeta);
        const tarjetaGuardadaTabla = document.getElementById("tarjeta-guardada");
        let newTableRow = tabla.insertRow(-1);
        newTableRow.textContent = "nueva";
        // let newTableCell = newTableRow.insertCell(0);
        // newTableCell.textContent = "Nueva celda";
    
    });
}

