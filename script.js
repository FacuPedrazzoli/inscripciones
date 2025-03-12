function showTab(tabId) {
    // Ocultar todos los contenidos de las pestañas
    const tabContents = document.getElementsByClassName('tab-content');
    for (let content of tabContents) {
        content.classList.remove('active');
    }

    // Mostrar la pestaña seleccionada
    document.getElementById(tabId).classList.add('active');
}

// Mostrar la primera pestaña al cargar la página
window.onload = function() {
    showTab('inscripciones');
}