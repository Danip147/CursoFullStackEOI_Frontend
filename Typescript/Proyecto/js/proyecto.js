"use strict";
/* class Serie2{
    constructor(private nombre:string, private capitulos:number){}

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre=nombre;
    }
    getCapitulos():number{
        return this.capitulos;
    }
    setCapitulos(capitulos:number){
        this.capitulos=capitulos;
    }

}

let arraySerie: Serie[]=[];

function grabar(){
    let nombreSerie:string=(<HTMLInputElement>document.getElementById("serie")).value;

    let capitulosSerie:number=(<HTMLInputElement>document.getElementById("capitulos")).value;
    
    let serie:Serie = new Serie(nombreSerie:string, capitulosSerie:number);
    arraySerie.push(nombreSerie);



  if (nombreSerie === "" || isNaN(capitulosSerie)) {
    alert("Debe completar los campos correctamente.");
    return;
  }


  
}

unction listar() {
    const modoSelect = document.getElementById("modo") as HTMLSelectElement;
    const modo = modoSelect.value;
  
    if (modo === "") {
      alert("Debe seleccionar un modo.");
      return;
    }
  
    const listaDiv = document.getElementById("lista") as HTMLDivElement;
  
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
    } else if (modo === "tabla") {
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
/* function mostrar(){
    let lista:string="<ul>";
    for(let i=0;i<arrayProgramas.length;i++)
        lista+="<li>"+arrayProgramas[i].imprimirEditorVideo()+"</li>";
    lista+="</ul>";

    let divElemento:HTMLDivElement=<HTMLDivElement>document.getElementById("listado");
    divElemento.innerHTML=lista;
} */
/* window.onload=function(){
    let boton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("boton");
    if(boton!=null)
        boton.addEventListener("click",grabar);
        //boton.onclick=grabar;
    let boton2:HTMLButtonElement=<HTMLButtonElement>document.getElementById("botonMostrar");
    if(boton2!=null)
        boton2.addEventListener("click",mostrar);
} */ 
    * /;
