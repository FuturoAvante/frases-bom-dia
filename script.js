const nomeInput = document.getElementById('nomeInput');
const nomeDisplay = document.getElementById('nome');
const fraseDisplay = document.getElementById('frase');
const card = document.getElementById('card');

// Junta todas as frases
const frases = [...frases3.js, ...frases2.js, ...frases1.js];

function obterDiaSemana() {
  const dias = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
  const hoje = new Date();
  return dias[hoje.getDay()];
}

nomeInput.addEventListener('input', () => {
  const valor = nomeInput.value.trim() || 'Nome da Pessoa';
  nomeDisplay.textContent = valor;
});

function gerarFrase() {
  const valor = nomeInput.value.trim() || 'Nome da Pessoa';
  nomeDisplay.textContent = valor;
  const frase = frases[Math.floor(Math.random() * frases.length)] + `\n\nBom dia ☀️ e feliz ${obterDiaSemana()}!`;
  fraseDisplay.textContent = frase;
  card.classList.add('show');
}

function copiarFrase() {
  const texto = nomeDisplay.textContent + ': ' + fraseDisplay.textContent;
  navigator.clipboard.writeText(texto);
  alert('Frase copiada para a área de transferência!');
}

function enviarWhatsApp() {
  const texto = nomeDisplay.textContent + ': ' + fraseDisplay.textContent;
  window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(texto), '_blank');
}


