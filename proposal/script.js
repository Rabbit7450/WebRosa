// Partículas
particlesJS.load('particles-js', 'particles.json');

// Música de fondo
const music = document.getElementById('bgMusic');
music.volume = 0.2;

// Función para reproducir música con interacción del usuario
function playAudio() {
  // Crear una promesa para intentar reproducir
  const playPromise = music.play();
  
  // Si la promesa existe (navegadores modernos)
  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Reproducción exitosa
      console.log("Reproducción iniciada correctamente");
      document.getElementById('playMusicBtn').style.display = 'none';
    })
    .catch(error => {
      // Error de reproducción automática
      console.error("Error al reproducir:", error);
      // Mantener el botón visible para que el usuario pueda intentar de nuevo
      document.getElementById('playMusicBtn').classList.add('pulse-animation');
    });
  }
}

// Manejar el botón de reproducción de música
document.getElementById('playMusicBtn').addEventListener('click', function() {
  playAudio();
});

// Agregar interacción del usuario para permitir reproducción
document.addEventListener('click', function() {
  // Solo intentar reproducir si el botón sigue visible
  if (document.getElementById('playMusicBtn').style.display !== 'none') {
    playAudio();
  }
}, { once: true });

// Mostrar mensaje al usuario
document.getElementById('playMusicBtn').textContent = '🎵 Haz clic aquí para música';

function nextSection() {
  const current = document.querySelector('.section:not(.hidden)');
  const next = current.nextElementSibling;
  if (next && next.classList.contains('section')) {
    current.classList.add('hidden');
    next.classList.remove('hidden');
    next.classList.add('animate__animated', 'animate__fadeIn');
  }
}

function sayYes() {
  Swal.fire({
    title: '¡Rosa, hiciste mi mundo más brillante!',
    text: 'Ahora somos oficialmente novios 💖🎧',
    icon: 'success',
    confirmButtonText: 'Me haces muy feliz, Rosa'
  });
}

function moveButton(btn) {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  btn.style.position = 'absolute';
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
}
const form = document.getElementById('proposal-form');
form.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append('access_key', 'AQUÍ-TU-ACCESS-KEY'); // ← clave que te llegó

  const res = await fetch('https://formspree.io/f/xvgbewya', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
  });

  const result = await res.json();
  if (result.success) {
    Swal.fire({
      title: '¡Respuesta enviada!',
      text: 'Rosa ha dicho que Sí 💖',
      icon: 'success'
    });
  } else {
    Swal.fire('Error', 'Inténtalo otra vez', 'error');
  }
});