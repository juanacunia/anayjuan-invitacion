// Esperamos a que todo el HTML este cargado
const layerSombras = document.getElementById('layer-sombras');
const layerPetalos = document.getElementById('layer-petalos');

document.addEventListener('DOMContentLoaded', function() {

    const envelopeScreen = document.getElementById('envelope-screen');
    const invitationContent = document.getElementById('invitation-content');
    const envelopeImg = document.getElementById('envelope-img');

    //Cuando alguien toca/hace clic en el sobre...
    envelopeImg.addEventListener('click', function() {

        // 1. Escondemos el sobre
        envelopeScreen.style.opacity = '0';
        envelopeScreen.style.transition = 'opacity 0.4s ease';

        // 2. El sobre se oculta, se muestra el contenido
        setTimeout(function() {
            envelopeScreen.style.display = 'none';
            invitationContent.classList.add('revealed');
            layerSombras.style.opacity = '1'; // Mostramos la capa de sombras
            layerPetalos.style.opacity = '1'; // Mostramos la capa de pétalos
            window.scrollTo(0, 0);
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=yes'); // Esto asegura que la página se desplace hacia arriba al mostrar el contenido
        }, 400); // Este numero es el tiempo que tarda en ocultarse el sobre

    });

});

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    layerSombras.querySelector('img').style.transform = `translateY(-${scrollY * 0.2}px)`;
    layerPetalos.querySelector('img').style.transform = `translateY(-${scrollY * 0.5}px)`;
});

const weddingDate = new Date('2026-11-21T16:00:00Z');

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);