
document.getElementById('orange-container-left').addEventListener('click', function() {
    // Obtener la posición vertical de la sección 3
    const section3 = document.getElementById('section3');
    const section3Position = section3.offsetTop;

    // Desplazarse suavemente a la sección 3
    window.scrollTo({
        top: section3Position,
        behavior: 'smooth'
    });
});

document.getElementById('orange-container-right').addEventListener('click', function() {
    // Obtener la posición vertical de la sección 3
    const section3 = document.getElementById('section4');
    const section3Position = section3.offsetTop;

    // Desplazarse suavemente a la sección 3
    window.scrollTo({
        top: section3Position,
        behavior: 'smooth'
    });
});
