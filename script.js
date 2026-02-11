// Frases del banner central
const phrases = [
    "TECNOLOGÍA ÉLITE",
    "AIRPODS PRO 2",
    "CARGADORES 100% ORIGINALES",
    "ENTREGAS RAPIDAS Y GARANTÍA"
];

let phraseIndex = 0;
const banner = document.getElementById('dynamic-text');

function updateBanner() {
    banner.style.opacity = 0;
    setTimeout(() => {
        banner.textContent = phrases[phraseIndex];
        banner.style.opacity = 1;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }, 500);
}

setInterval(updateBanner, 3500);

// Cambio de vistas
function showView(viewName) {
    document.querySelectorAll('.content-view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById('view-' + viewName).classList.add('active');
    document.getElementById('btn-' + viewName).classList.add('active');
}

// Comentarios
document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input').value;
    const msg = this.querySelector('textarea').value;
    const display = document.getElementById('comments-display');
    
    const newMsg = document.createElement('div');
    newMsg.className = 'comment-card';
    newMsg.style = "background: #1e293b; padding: 15px; border-radius: 10px; margin-top: 10px; border-left: 4px solid #0ea5e9;";
    newMsg.innerHTML = `<strong>${name}</strong>: <p>${msg}</p>`;
    
    display.prepend(newMsg);
    this.reset();
});
notificacion 
    if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}