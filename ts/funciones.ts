function openForm(){
    var containerForm = document.getElementById("containerForm");


    (document.getElementById('txtId') as HTMLInputElement).disabled = false;
    containerForm.hidden = false;

}

function closeForm(){
    var containerForm = document.getElementById("containerForm");

    containerForm.hidden = true;
}

function addVehicle(){
    
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