// Prevenir que el formulario se envíe
document.getElementById('miFormularioVuelo').addEventListener('submit', function(event) {
    event.preventDefault();
});

/* Cambiar el fondo de color */
function cambiarEstiloFondo() {
    document.body.style.backgroundColor = '#3498db';
}

/* Cambiar el color de la letra */
function cambiarEstiloTexto() {
    document.body.style.color = '#0518BE';
}

/* Restaurar los estilos anteriores */
function restaurarEstilos() {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
}

/* mensaje de confirmacion */
function reservarVuelo(){
    alert("Se ha realizado la reserva correctamente!!")
}
