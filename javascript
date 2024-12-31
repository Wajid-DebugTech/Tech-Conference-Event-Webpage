// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Confirmation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual submission for demo purposes
    alert('Thank you for registering! We will contact you shortly.');
});
