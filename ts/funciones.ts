function openForm(){
    var containerForm = document.getElementById("containerForm");


    (document.getElementById('txtId') as HTMLInputElement).disabled = false;
    containerForm.hidden = false;

}

function closeForm(){
    var containerForm = document.getElementById("containerForm");

    containerForm.hidden = true;
}

function eraseRow(e){
    var id = e.target.parentNode.parentNode.firstElementChild.textContent;
    var body = document.getElementById("tblBody");
    var rows = (body as HTMLTableElement).rows;

    for (let index = 0; index < rows.length; index++) {
        if(rows[index].firstElementChild.textContent===id){
            rows[index].remove();
        }        
    }    
}

function addVehicle(){
    var tbody = document.getElementById("tblBody");
    var tr;
    var tdId;
    var tdMarca;
    var tdModelo;
    var tdPrecio;
    var tdAccion;
    var txtId;
    var txtMarca;
    var txtModelo;
    var txtPrecio;
    var btnAccion;
    var body = document.getElementById("tblBody");
    var rows = (body as HTMLTableElement).rows;
                
    tr = document.createElement("tr");
    tdId = document.createElement("td");
    tdMarca = document.createElement("td");
    tdModelo = document.createElement("td");
    tdPrecio = document.createElement("td");
    tdAccion=document.createElement("td");
    if(rows.length===0){
        txtId = document.createTextNode("1");
    }else{
        txtId = document.createTextNode((rows.length+1).toString());
    }    
    //txtId = document.createTextNode("1");
    txtMarca = document.createTextNode((document.getElementById("txtMarca") as HTMLInputElement).value);
    txtModelo = document.createTextNode((document.getElementById("txtModelo") as HTMLInputElement).value);
    txtPrecio = document.createTextNode((document.getElementById("txtPrecio") as HTMLInputElement).value);    
    btnAccion = document.createElement("INPUT");
    btnAccion.setAttribute("type", "button");
    btnAccion.setAttribute("value", "eliminar");
    btnAccion.addEventListener("click", eraseRow);
    tdId.appendChild(txtId);
    tdMarca.appendChild(txtMarca);
    tdModelo.appendChild(txtModelo);
    tdPrecio.appendChild(txtPrecio);
    tdAccion.appendChild(btnAccion);    
    tr.appendChild(tdId);
    tr.appendChild(tdMarca);
    tr.appendChild(tdModelo);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdAccion);    
    tbody.appendChild(tr);                            
}

function calculateAvg(){
    
}

function filterVehicle(){
    
}

function addListeners() {
    var btnAlta = document.getElementById("btnAlta");
    var btnCerrar = document.getElementById("btnCerrar");
    var btnClose = document.getElementById("btnClose");
    var btnAgregar = document.getElementById("btnAgregar");
    var btnPromedio = document.getElementById("btnPromedio");
    var cmbFiltro = document.getElementById("cmbFiltro");

    btnAlta.addEventListener("click", openForm);
    btnCerrar.addEventListener("click", closeForm);
    btnClose.addEventListener("click", closeForm);
    btnAgregar.addEventListener("click", addVehicle);
    btnPromedio.addEventListener("click", calculateAvg);
    cmbFiltro.addEventListener("click", filterVehicle);
}

function init() {
    var containerForm = document.getElementById("containerForm");

    containerForm.hidden = true;
    addListeners();
}

window.addEventListener("load", init);