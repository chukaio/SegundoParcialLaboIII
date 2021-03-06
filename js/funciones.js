function openForm() {
    var containerForm = document.getElementById("containerForm");
    document.getElementById('txtId').disabled = false;
    containerForm.hidden = false;
}
function closeForm() {
    var containerForm = document.getElementById("containerForm");
    containerForm.hidden = true;
}
function eraseRow(e) {
    var id = e.target.parentNode.parentNode.firstElementChild.textContent;
    var body = document.getElementById("tblBody");
    var rows = body.rows;
    for (var index = 0; index < rows.length; index++) {
        if (rows[index].firstElementChild.textContent === id) {
            rows[index].remove();
        }
    }
}
function addVehicle() {
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
    var rows = body.rows;
    tr = document.createElement("tr");
    tdId = document.createElement("td");
    tdMarca = document.createElement("td");
    tdModelo = document.createElement("td");
    tdPrecio = document.createElement("td");
    tdAccion = document.createElement("td");
    if (rows.length === 0) {
        txtId = document.createTextNode("1");
    }
    else {
        txtId = document.createTextNode((rows.length + 1).toString());
    }
    txtMarca = document.createTextNode(document.getElementById("txtMarca").value);
    txtModelo = document.createTextNode(document.getElementById("txtModelo").value);
    txtPrecio = document.createTextNode(document.getElementById("txtPrecio").value);
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
function calculateAvg() {
    var body = document.getElementById("tblBody");
    var rows = body.rows;
    var sum = 0;
    var txtPromedio = document.getElementById("txtPromedio");
    for (var index = 0; index < rows.length; index++) {
        sum = sum + parseInt(rows[index].firstElementChild.nextSibling.nextSibling.nextSibling.textContent);
    }
    txtPromedio.value = (sum / rows.length).toString();
}
function filterVehicle() {
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
