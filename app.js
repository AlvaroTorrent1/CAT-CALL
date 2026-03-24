document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('catButton');
    const audio = document.getElementById('catAudio');

    button.addEventListener('click', () => {
        // Reiniciar el audio si ya se estaba reproduciendo
        audio.currentTime = 0;
        audio.play().catch(error => {
            console.error("Error al reproducir el audio:", error);
            alert("Por favor, asegúrate de haber subido el archivo audio.mp3");
        });
    });
});

// Registrar el Service Worker para que sea una PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registrado', reg))
            .catch(err => console.log('Error al registrar SW', err));
    });
}
