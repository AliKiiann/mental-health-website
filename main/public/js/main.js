// Contact Form Handler
const submitBtn = document.getElementById('submitBtn');

if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const message = document.querySelector('textarea').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields!');
            return;
        }

        alert(`Thank you ${name}! We will contact you at ${email} soon.`);
    });
}