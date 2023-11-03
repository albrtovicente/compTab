const tabLinks = document.querySelectorAll('.tab-link');
const tabPanes = document.querySelectorAll('.tab-pane');

 // Agrega un manejador de eventos a cada pestaña
 tabLinks.forEach((link, index) => {
     link.addEventListener('click', () => {
         //e.preventDefault(); // Evita el comportamiento predeterminado del enlace

         // Oculta todos los paneles de contenido
         tabPanes.forEach(pane => {
            pane.style.display = 'none';
        });

         // Muestra el panel de contenido correspondiente a la pestaña seleccionada
         tabPanes[index].style.display = 'block';
     });
 });