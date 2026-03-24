document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('catButton');
    const audio = document.getElementById('catAudio');

    button.addEventListener('click', () => {
        if (!audio.paused) {
            // Si ya se está reproduciendo, lo detenemos
            audio.pause();
            audio.currentTime = 0;
            button.classList.remove('playing');
        } else {
            // Si no se está reproduciendo, lo iniciamos
            audio.play().then(() => {
                button.classList.add('playing');
            }).catch(error => {
                console.error("Error al reproducir el audio:", error);
                alert("Por favor, asegúrate de haber subido el archivo audio.mp3");
            });
        }
    });

    // Quitar la iluminación cuando el audio termine por sí solo
    audio.addEventListener('ended', () => {
        button.classList.remove('playing');
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
