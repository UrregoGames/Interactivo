
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
    const section4 = document.getElementById('section4');
    const section4Position = section4.offsetTop;

    // Desplazarse suavemente a la sección 3
    window.scrollTo({
        top: section4Position,
        behavior: 'smooth'
    });
});

document.getElementById('orange-container-left-5').addEventListener('click', function() {
    // Obtener la posición vertical de la sección 3
    const section6 = document.getElementById('section6');
    const section6Position = section6.offsetTop;

    // Desplazarse suavemente a la sección 3
    window.scrollTo({
        top: section6Position,
        behavior: 'smooth'
    });
});

document.getElementById('orange-container-right-5').addEventListener('click', function() {
    // Obtener la posición vertical de la sección 3
    const section7 = document.getElementById('section7');
    const section7Position = section7.offsetTop;

    // Desplazarse suavemente a la sección 3
    window.scrollTo({
        top: section7Position,
        behavior: 'smooth'
    });
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

// //cambio color hover
// document.addEventListener('DOMContentLoaded', function() {
//     let orangeContainerLeft = document.getElementById('orange-container-left-8');
//     let orangeContainerRight = document.getElementById('orange-container-right-8');

//     // Función para cambiar el color del contenedor naranja al pasar el mouse
//     function changeColorOnHover(container) {
//         container.addEventListener('mouseenter', function() {
//             container.style.backgroundColor = 'rgb(255, 150, 0)'; // Cambia el color al pasar el mouse sobre el contenedor
//         });

//         container.addEventListener('mouseleave', function() {
//             container.style.backgroundColor = 'rgb(143, 47, 45)'; // Restaura el color original al sacar el mouse del contenedor
//         });
//     }

//     // Aplicar el evento a los contenedores naranjas
//     changeColorOnHover(orangeContainerLeft);
//     changeColorOnHover(orangeContainerRight);
// });