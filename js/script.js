const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

//form validation
document.querySelector('#contactForm').addEventListener('submit', (e) => {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const reason = document.getElementById('reason').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('error-message');

    let isValid = true;

    // Validate fields
    if (!firstName.match(/^[A-Za-z]+$/)) isValid = false;
    if (!lastName.match(/^[A-Za-z]+$/)) isValid = false;
    if (!email.includes('@') || !email.includes('.')) isValid = false;
    if (reason === "") isValid = false;
    if (message.trim() === "") isValid = false;

    // Show error message if invalid
    if (!isValid) {
        e.preventDefault();
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});
