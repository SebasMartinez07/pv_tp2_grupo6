document.getElementById("cargar").onclick = function() {
    let nombre = String(document.getElementById("nombre").value);
    let apellido = String(document.getElementById("apellido").value);
    let lu = String(document.getElementById("lu").value);

    alert("Nombre: " + nombre + ", Apellido: " + apellido + ", LU: " + lu);
    document.getElementById("mostrarDatos").innerText = "Nombre: " + nombre + ", Apellido: " + apellido + ", LU: " + lu;
}