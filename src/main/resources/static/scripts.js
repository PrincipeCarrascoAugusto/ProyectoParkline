
// Función para cambiar las secciones visibles
function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });
    document.getElementById(seccionId).style.display = 'block';
}

// Cargar datos de ejemplo para las tablas
document.addEventListener('DOMContentLoaded', function () {
    const autosBody = document.getElementById('autos-body');
    const espaciosBody = document.getElementById('espacios-body');

    // Datos de ejemplo
    const autosEstacionados = [
        { id: 1, placa: 'ABC-123', horaEntrada: '10:00 AM', espacio: 'A1' },
        { id: 2, placa: 'DEF-456', horaEntrada: '10:30 AM', espacio: 'B2' },
        { id: 3, placa: 'GHI-789', horaEntrada: '11:00 AM', espacio: 'C3' }
    ];

    const espaciosDisponibles = [
        { id: 1, estado: 'Libre', tipo: 'Normal' },
        { id: 2, estado: 'Ocupado', tipo: 'Grande' },
        { id: 3, estado: 'Libre', tipo: 'Normal' }
    ];

    // Rellenar la tabla de autos
    autosEstacionados.forEach(auto => {
        let row = `<tr>
                        <td>${auto.id}</td>
                        <td>${auto.placa}</td>
                        <td>${auto.horaEntrada}</td>
                        <td>${auto.espacio}</td>
                   </tr>`;
        autosBody.innerHTML += row;
    });

    // Rellenar la tabla de espacios
    espaciosDisponibles.forEach(espacio => {
        let row = `<tr>
                        <td>${espacio.id}</td>
                        <td>${espacio.estado}</td>
                        <td>${espacio.tipo}</td>
                   </tr>`;
        espaciosBody.innerHTML += row;
    });
});

