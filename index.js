document.addEventListener('DOMContentLoaded', function() {
    cambiarSeccion('showAll');
});


function cambiarSeccion(sectionId) {
    console.log(`Cambiando a la sección: ${sectionId}`);
    // Obtener todas las secciones
    const allSections = document.querySelectorAll('section');
    // Ocultar todas las secciones
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar solo la sección correspondiente al botón presionado
    const showSection = document.getElementById(sectionId);
    if (showSection) {
        showSection.style.display = 'block';
    }

    // Agregar contenido de otras secciones al showAll
    if (sectionId == 'showAll') {
        const showAllSection = document.getElementById('showAll');
        showAllSection.innerHTML = '';

        allSections.forEach(section => {
            if (section.id != 'showAll' && section.id != 'showProfile') {
                showAllSection.innerHTML += section.innerHTML;
            }
        });
    }
}
