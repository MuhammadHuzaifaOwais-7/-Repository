document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        const email = $('#email').val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            alert('Your message has been submitted!');
            this.reset(); // Reset the form
        } else {
            alert('Please enter a valid email address.');
        }
    });
});