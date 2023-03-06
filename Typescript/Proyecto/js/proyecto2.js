"use strict";
class Serie {
    constructor(nombre, capitulos) {
        this._nombre = nombre;
        this._capitulos = capitulos;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get capitulos() {
        return this._capitulos;
    }
    set capitulos(capitulos) {
        this._capitulos = capitulos;
    }
}
const series = [];
function grabar() {
    const nombreInput = document.getElementById("nombre");
    const capitulosInput = document.getElementById("capitulos");
    const nombre = nombreInput.value.trim();
    const capitulos = Number(capitulosInput.value);
    if (nombre === "" || isNaN(capitulos)) {
        alert("Debe completar los campos correctamente.");
        return;
    }
    const serie = new Serie(nombre, capitulos);
    series.push(serie);
    nombreInput.value = "";
    capitulosInput.value = "";
}
function listar() {
    const modoSelect = document.getElementById("modo");
    const modo = modoSelect.value;
    if (modo === "") {
        alert("Debe seleccionar un modo.");
        return;
    }
    const listaDiv = document.getElementById("lista");
    while (listaDiv.firstChild) {
        listaDiv.removeChild(listaDiv.firstChild);
    }
    if (modo === "lista") {
        const ul = document.createElement("ul");
        for (const serie of series) {
            const li = document.createElement("li");
            li.innerText = `${serie.nombre} - ${serie.capitulos} capítulos`;
            ul.appendChild(li);
        }
        listaDiv.appendChild(ul);
    }
    else if (modo === "tabla") {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
        const trHead = document.createElement("tr");
        const thNombre = document.createElement("th");
        const thCapitulos = document.createElement("th");
        thNombre.innerText = "Nombre";
        thCapitulos.innerText = "Capítulos";
        trHead.appendChild(thNombre);
        trHead.appendChild(thCapitulos);
        thead.appendChild(trHead);
        for (const serie of series) {
            const tr = document.createElement("tr");
            const tdNombre = document.createElement("td");
            const tdCapitulos = document.createElement("td");
            tdNombre.innerText = serie.nombre;
            tdCapitulos.innerText = serie.capitulos.toString();
            tr.appendChild(tdNombre);
            tr.appendChild(tdCapitulos);
            tbody.appendChild(tr);
        }
        table.appendChild(thead);
        table.appendChild(tbody);
        listaDiv.appendChild(table);
    }
}
