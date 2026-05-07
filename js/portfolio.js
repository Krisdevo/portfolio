// -------------------- ONGLETS --------------------

document.querySelectorAll('.card').forEach(card => {

    const contents = card.querySelectorAll('.card_tab');
    const buttons = card.querySelectorAll('.card_action button');

    // Init — description visible par défaut
    contents.forEach(c => c.classList.add('hidden'));
    contents[0].classList.remove('hidden');
    buttons[0].classList.add('active');

    // Au clic
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.add('hidden'));

            btn.classList.add('active');
            contents[index].classList.remove('hidden');
        });
    });
});

// -------------------- CAROUSEL --------------------

document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel_track');
    const slides = carousel.querySelectorAll('.carousel_slide');
    const prev = carousel.querySelector('.carousel_prev');
    const next = carousel.querySelector('.carousel_next');
    let current = 0;

    function goTo(index) {
        current = index;
        track.style.transform = `translateX(-${current * 100}%)`;
    }

    prev.addEventListener('click', () => {
        goTo(current === 0 ? slides.length - 1 : current - 1);
    });

    next.addEventListener('click', () => {
        goTo(current === slides.length - 1 ? 0 : current + 1);
    });
});