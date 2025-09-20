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
    
    // Scroll suave hacia la nueva sección
    setTimeout(() => {
      next.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
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
  // Obtener las dimensiones del botón
  const btnRect = btn.getBoundingClientRect();
  const btnWidth = btnRect.width;
  const btnHeight = btnRect.height;
  
  // Calcular posición aleatoria considerando las dimensiones del botón
  const maxX = window.innerWidth - btnWidth - 20; // 20px de margen
  const maxY = window.innerHeight - btnHeight - 20; // 20px de margen
  
  const x = Math.random() * Math.max(maxX, 50); // Mínimo 50px
  const y = Math.random() * Math.max(maxY, 50); // Mínimo 50px
  
  btn.style.position = 'absolute';
  btn.style.left = `${Math.max(x, 20)}px`; // Mínimo 20px del borde
  btn.style.top = `${Math.max(y, 20)}px`; // Mínimo 20px del borde
  btn.style.zIndex = '1000'; // Asegurar que esté encima de otros elementos
  
  // Agregar animación suave
  btn.style.transition = 'all 0.3s ease';
}

// Función para manejar eventos táctiles
function setupTouchInteractions() {
  // Mejorar la experiencia táctil del botón "No"
  const noButton = document.querySelector('.no');
  if (noButton) {
    // Agregar evento de toque para dispositivos móviles
    noButton.addEventListener('touchstart', function(e) {
      e.preventDefault();
      moveButton(this);
    });
    
    // Mantener el evento de mouse para desktop
    noButton.addEventListener('mouseenter', function() {
      moveButton(this);
    });
  }
  
  // Mejorar la experiencia del botón de música
  const musicBtn = document.getElementById('playMusicBtn');
  if (musicBtn) {
    musicBtn.addEventListener('touchstart', function(e) {
      // Prevenir el doble tap zoom
      e.preventDefault();
      playAudio();
    });
  }
  
  // Mejorar los botones de navegación
  const nextButtons = document.querySelectorAll('.next');
  nextButtons.forEach(btn => {
    btn.addEventListener('touchstart', function(e) {
      // Agregar feedback táctil
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
  
  // Mejorar el formulario
  const form = document.getElementById('proposal-form');
  if (form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.addEventListener('touchstart', function(e) {
        // Feedback visual inmediato
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 150);
      });
    }
  }
}

// Manejar el formulario con Formspree
document.addEventListener('DOMContentLoaded', function() {
  // Configurar interacciones táctiles
  setupTouchInteractions();
  
  const form = document.getElementById('proposal-form');
  const fechaInput = document.getElementById('fecha-respuesta');
  
  // Establecer la fecha actual cuando se carga la página
  if (fechaInput) {
    fechaInput.value = new Date().toLocaleString('es-ES');
  }
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Mostrar mensaje de confirmación inmediatamente
      Swal.fire({
        title: '¡Rosa, hiciste mi mundo más brillante!',
        text: 'Ahora somos oficialmente novios 💖',
        icon: 'success',
        confirmButtonText: 'Me haces muy feliz, Rosa'
      });
      
      // Enviar el formulario a Formspree en segundo plano
      // Usamos el action del formulario para evitar problemas de CORS
      const formData = new FormData(form);
      
      // Crear un formulario temporal para el envío
      const tempForm = document.createElement('form');
      tempForm.action = 'https://formspree.io/f/xvgbewya';
      tempForm.method = 'POST';
      tempForm.style.display = 'none';
      
      // Agregar los campos al formulario temporal
      for (let [key, value] of formData.entries()) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        tempForm.appendChild(input);
      }
      
      // Agregar al DOM, enviar y remover
      document.body.appendChild(tempForm);
      tempForm.submit();
      document.body.removeChild(tempForm);
      
      console.log('Formulario enviado a Formspree');
    });
  }
});