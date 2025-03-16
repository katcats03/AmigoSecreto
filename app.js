let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) { 
        alert("Debes ingresar un nombre");
        return;
    }

    if (amigo.includes(nombreAmigo)) {
        alert("Ese nombre ya ha sido agregado");
        return;
    }

    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    compilarAmigos();
}

function compilarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigo.forEach((nombre) => {
        let item = document.createElement("li");
        item.textContent = nombre;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let amigoSecreto = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo secreto es: ${amigoSecreto} 🎉`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}

function reiniciarJuego() {
    amigo = []; // Vaciar la lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
}