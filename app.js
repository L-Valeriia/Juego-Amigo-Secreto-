let listaDeAmigos = [];

 function agregarAmigo(){
    let nombre = document.getElementById ("amigo").value;
    if (nombre.trim() == ""){
        alert("Por favor, inserte un nombre valido.")
    }else if (listaDeAmigos.includes(nombre)) {
        alert("El nombre ya está en la lista.");
    }  else {
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
    document.getElementById("resultado").innerHTML = "";
}

function sortearAmigo(){
    let resultado = document.getElementById ("resultado");
    resultado.innerHTML = "";

    if (listaDeAmigos.length < 2){
        alert ("Agrega al menos dos nombres antes de continuar.")
        return ;
    }
    let nombreElegido = Math.floor(Math.random() * listaDeAmigos.length);

    let amigoSecreto = listaDeAmigos[nombreElegido];

    resultado.innerHTML = `<strong>El amigo secreto es: ${amigoSecreto}</strong>`;

    listaDeAmigos = []; 

    document.getElementById("listaAmigos").innerHTML = "";

}
  
    

 