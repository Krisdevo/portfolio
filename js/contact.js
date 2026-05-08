// -------------------- EMAILJS --------------------
emailjs.init(EMAILJS_CONFIG.publicKey);

let lastSent = 0;
const COOLDOWN = 60000;

document.getElementById('contact_form').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = document.getElementById('submit_btn');
    const status = document.getElementById('form_status');
    const now = Date.now();

    if (document.getElementById('honeypot').value !== '') {
        return;
    }

    if (now - lastSent < COOLDOWN) {
        const secondsLeft = Math.ceil((COOLDOWN - (now - lastSent)) / 1000);
        status.textContent = `Merci de patienter ${secondsLeft} secondes avant d'envoyer un nouveau message.`;
        status.style.color = "#ff6b6b";
        return;
    }

    btn.textContent = "Envoi en cours...";
    btn.disabled = true;

    emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, this)
        .then(() => {
            lastSent = Date.now();
            status.textContent = "Message envoyé ! Je vous réponds dès que possible.";
            status.style.color = "#4fd6a1";
            this.reset();
            btn.textContent = "Envoyer";
            btn.disabled = false;
        })
        .catch((error) => {
            status.textContent = "Une erreur est survenue. Réessayez ou contactez-moi directement.";
            status.style.color = "#ff6b6b";
            btn.textContent = "Envoyer";
            btn.disabled = false;
            console.error(error);
        });
});