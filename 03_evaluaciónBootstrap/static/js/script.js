document.addEventListener('DOMContentLoaded', () => {

    // --- Carousel de tendencias ---
    const contenedor = document.getElementById('trending-carousel');
    const btnLeft    = document.getElementById('btn-left');
    const btnRight   = document.getElementById('btn-right');

    window.moverse = function(direccion) {
        contenedor.scrollBy({
            left: direccion * (contenedor.clientWidth * 0.8),
            behavior: 'smooth'
        });
    };

    contenedor.addEventListener('scroll', () => {
        const scrollActual = contenedor.scrollLeft;
        const scrollMax    = contenedor.scrollWidth - contenedor.clientWidth;
        btnLeft.classList.toggle('d-none',  scrollActual <= 50);
        btnRight.classList.toggle('d-none', scrollActual >= scrollMax - 10);
    });

    // --- Modal de series ---
    const serieModal = document.getElementById('serieModal');
    serieModal.addEventListener('show.bs.modal', (e) => {
        const trigger = e.relatedTarget;

        document.getElementById('modal-img').src            = trigger.dataset.img;
        document.getElementById('modal-titulo').textContent = trigger.dataset.titulo;
        document.getElementById('modal-desc').textContent   = trigger.dataset.desc;

        // Generar badges dinámicamente
        const badgesEl = document.getElementById('modal-badges');
        badgesEl.innerHTML = '';
        const badges = [trigger.dataset.ano, trigger.dataset.clasificacion, ...trigger.dataset.genero.split(',')];
        badges.forEach(b => {
            const span = document.createElement('span');
            span.className = 'badge border border-secondary text-white fw-normal px-2 py-1';
            span.style.fontSize = '0.8rem';
            span.textContent = b.trim();
            badgesEl.appendChild(span);
        });
    });

});
