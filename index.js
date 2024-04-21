
document.getElementById('orange-container-left').addEventListener('click', function() {
    window.location.href = 'radioClase.html';
});

document.getElementById('orange-container-right').addEventListener('click', function() {
    window.location.href = 'radioDiver.html';
});

document.getElementById('orange-container-left-5').addEventListener('click', function() {
    window.location.href = 'narrativaClase.html';
});

document.getElementById('orange-container-right-5').addEventListener('click', function() {
    window.location.href = 'narrativaDiver.html';
});

document.getElementById('orange-container-left-8').addEventListener('click', function() {
    // Obtener la posición vertical de la sección 3
    const section9 = document.getElementById('section9');
    const section9Position = section9.offsetTop;

    // Desplazarse suavemente a la sección 3
    window.scrollTo({
        top: section9Position,
        behavior: 'smooth'
    });
});

document.getElementById('orange-container-right-8').addEventListener('click', function() {
    // Obtener la posición vertical de la sección 3
    const section10 = document.getElementById('section10');
    const section10Position = section10.offsetTop;

    // Desplazarse suavemente a la sección 3
    window.scrollTo({
        top: section10Position,
        behavior: 'smooth'
    });
});