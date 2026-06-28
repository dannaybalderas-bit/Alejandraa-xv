const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

musicBtn.addEventListener('click', async () => {
  try {
    if (music.paused) {
      await music.play();
      musicBtn.textContent = '♪ Música reproduciéndose';
      musicBtn.classList.add('playing');
    } else {
      music.pause();
      musicBtn.textContent = '♪ Toca para escuchar la música';
      musicBtn.classList.remove('playing');
    }
  } catch (error) {
    musicBtn.textContent = 'Toca otra vez para reproducir música';
  }
});

const targetDate = new Date('2026-07-24T19:30:00-06:00').getTime();
function updateCountdown(){
  const now = new Date().getTime();
  const distance = Math.max(targetDate - now, 0);
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60))/1000);
  document.getElementById('days').textContent = String(days).padStart(2,'0');
  document.getElementById('hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2,'0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('show');}
  });
},{threshold:.18});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('rsvpForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const asistencia = document.getElementById('asistencia').value;
  const nombre = document.getElementById('nombre').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const cancion = document.getElementById('cancion').value.trim();
  const texto = `Hola, confirmo mi respuesta para los XV de Alejandra.%0A%0AAsistida?: ${asistencia}%0AEscriba su nombre: ${nombre}%0ADeja un mensaje o un comentario para Alejandra: ${mensaje || 'Sin mensaje'}%0A¿Que canción no puede faltar en mi fiesta?: ${cancion || 'Sin sugerencia'}`;
  window.open(`https://wa.me/528115642463?text=${texto}`, '_blank');
});
