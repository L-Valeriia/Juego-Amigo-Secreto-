let listaDeAmigos = [];




 function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre.trim() == ""){
        alert("Por favor, inserte un nombre.")
    }else {
        listaDeAmigos.push(nombre);
        let limpiarCaja = document.getElementById("amigo").value = "";
        actualizarLista();
    }
    
}

function actualizarLista(){
    let listas = document.getElementById("listaAmigos")
    listas.innerHTML = "";

    for (let i = 0; i< listaDeAmigos.length; i ++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos [i];
        listas.appendChild(li);
  
    }
}
