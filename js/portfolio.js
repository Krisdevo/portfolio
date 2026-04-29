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