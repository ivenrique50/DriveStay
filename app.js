// Lógica del score y semáforo (simple)
const form = document.getElementById('score-form');
const scoreText = document.getElementById('score-text');
const lights = {
  red: document.querySelector('.light.red'),
  yellow: document.querySelector('.light.yellow'),
  green: document.querySelector('.light.green')
};

function setSemaforo(state) {
  Object.values(lights).forEach(l => l.classList.remove('on'));
  if (state === 'red')   lights.red.classList.add('on');
  if (state === 'yellow')lights.yellow.classList.add('on');
  if (state === 'green') lights.green.classList.add('on');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  let score = 0;
  for (const [_k, v] of data.entries()) score += Number(v || 0);

  let state = 'red';
  let msg = `Score: ${score}/5 — Necesita trabajo en básicos.`;

  if (score >= 3 && score <= 4) {
    state = 'yellow';
    msg = `Score: ${score}/5 — A medio camino, hay mejoras claras.`;
  } else if (score >= 5) {
    state = 'green';
    msg = `Score: ${score}/5 — ¡Muy bien! Listo para captar más reservas.`;
  }

  setSemaforo(state);
  scoreText.textContent = msg;
});

// Lead capture (demo)
document.getElementById('lead-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  alert(`¡Gracias! Te enviaremos el informe a: ${email}`);
});
