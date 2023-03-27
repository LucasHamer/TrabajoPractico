/*let parametro = new URLSearchParams(window.location.search);

let nombre = parametro.get('nombre');
let apellido = parametro.get('apellido');
let edad = parametro.get('edad');
let dni = parametro.get('dni');
let mail = parametro.get('mail');

function validarEdad(edad) {
    if (edad < 18 || edad > 120) {
        return alert("Edad incorrecta");
    }
} validarEdad(edad);

let largoNombre = nombre.length;
let largoApellido = apellido.length;

function validarNombres(largoNombre) {
    if (largoNombre < 2 || largoNombre > 20) {
        return alert("Error en cantidad de letras nombre");
    }
} validarNombres(largoNombre);

function validarApellido(largoApellido) {
    if (largoApellido < 2 || largoApellido > 25) {
        return alert("Error en cantidad de letras apellido");
    }
} validarNombres(largoApellido);

function validarDni(dni) {
    if (dni < 100000) {
        return alert("DNI incorrecto");
    }
} validarDni(dni);

function validarEmail(mail) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
        return true;
    } else {
        alert("El correo electrónico ingresado no es válido");
        return false;
    }
} validarEmail(mail);

/*
document.getElementById("nom").innerHTML = nombre;
document.getElementById("ape").innerHTML = apellido;
document.getElementById("eda").innerHTML = edad;
document.getElementById("dn").innerHTML = dni;
document.getElementById("correo").innerHTML = mail;*/
let form = document.querySelector("form");
let tableBody = document.querySelector("table tbody");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let nombre = form.nombre.value;
    let apellido = form.apellido.value;
    let edad = form.edad.value;
    let dni = form.dni.value;
    let email = form.mail.value;

    function validarEdad(edad) {
        if (edad < 18 || edad > 120) {
            return alert("Edad incorrecta");
        }
    } validarEdad(edad);
    
    let largoNombre = nombre.length;
    let largoApellido = apellido.length;
    
    function validarNombres(largoNombre) {
        if (largoNombre < 2 || largoNombre > 20) {
            return alert("Error en cantidad de letras nombre");
        }
    } validarNombres(largoNombre);
    
    function validarApellido(largoApellido) {
        if (largoApellido < 2 || largoApellido > 25) {
            return alert("Error en cantidad de letras apellido");
        }
    } validarNombres(largoApellido);
    
    function validarDni(dni) {
        if (dni < 100000) {
            return alert("DNI incorrecto");
        }
    } validarDni(dni);
    
    function validarEmail(email) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return true;
        } else {
            alert("El correo electrónico ingresado no es válido");
            return false;
        }
    } validarEmail(email);

    let newRow = document.createElement("tr");

    let nombreCell = document.createElement("td");
    nombreCell.textContent = nombre;
    newRow.appendChild(nombreCell);

    let apellidoCell = document.createElement("td");
    apellidoCell.textContent = apellido;
    newRow.appendChild(apellidoCell);

    let edadCell = document.createElement("td");
    edadCell.textContent = edad;
    newRow.appendChild(edadCell);

    let dniCell = document.createElement("td");
    dniCell.textContent = dni;
    newRow.appendChild(dniCell);

    let emailCell = document.createElement("td");
    emailCell.textContent = email;
    newRow.appendChild(emailCell);

    tableBody.appendChild(newRow);

    form.reset();
});

