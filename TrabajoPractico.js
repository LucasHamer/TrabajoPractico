let parametro = new URLSearchParams(window.location.search);

let nombre = parametro.get('nombre');
let apellido = parametro.get('apellido');
let edad = parametro.get('edad');
let dni = parametro.get('dni');
let email = parametro.get('mail');

function validarEdad(edad) {
    if(edad < 18 || edad > 120){
        return alert("Edad incorrecta");
    }
} validarEdad(edad);

let largoNombre = nombre.length;
let largoApellido = apellido.length;

function validarNombres(largoNombre) {
    if(largoNombre < 2 || largoNombre > 20){
        return alert("Error en cantidad de letras nombre");
    }
}validarNombres(largoNombre);

function validarApellido(largoApellido) {
    if(largoApellido < 2 || largoApellido > 25){
        return alert("Error en cantidad de letras apellido");
    }
}validarNombres(largoApellido);

function validarDni(dni) {
    if(dni < 100000){
        return alert("DNI incorrecto");
    }
} validarDni(dni);