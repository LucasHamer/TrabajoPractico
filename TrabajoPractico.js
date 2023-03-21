let parametro = new URLSearchParams(window.location.search);

let nombre = parametro.get('nombre');
let apellido = parametro.get('apellido');
let edad = parametro.get('edad');
let dni = parametro.get('dni');
let mail = parametro.get('mail');

let hola = 0;

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

document.getElementById("nom").innerHTML = nombre;
document.getElementById("ape").innerHTML = apellido;
document.getElementById("eda").innerHTML = edad;
document.getElementById("dn").innerHTML = dni;
document.getElementById("correo").innerHTML = mail;

/*
while (nombre!="fin") {
    document.getElementById("nom").innerHTML = nombre;
document.getElementById("ape").innerHTML = apellido;
document.getElementById("eda").innerHTML = edad;
document.getElementById("dn").innerHTML = dni;
document.getElementById("correo").innerHTML = mail;
}*/

/*for (let i = 0; i < 5; i++) {
    document.getElementById("nom").innerHTML = nombre;
    document.getElementById("ape").innerHTML = apellido;
    document.getElementById("eda").innerHTML = edad;
    document.getElementById("dn").innerHTML = dni;
    document.getElementById("correo").innerHTML = mail;
    
}*/

