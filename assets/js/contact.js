document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const form = this;
    const loadingEl = form.querySelector('.loading');
    const errorEl = form.querySelector('.error-message');
    const sentEl = form.querySelector('.sent-message');
    
    // Get form data
    const formData = {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        subject: form.querySelector('#subject').value,
        message: form.querySelector('#message').value
    };
    
    // Show loading
    loadingEl.classList.remove('d-none');
    errorEl.style.display = 'none';
    sentEl.style.display = 'none';
    
    // Email configuration using EmailJS
    emailjs.send('service_7qerg0m', 'template_59vh3md', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'xtianized1@gmail.com'
    })
    .then(function() {
        // Hide loading
        loadingEl.classList.add('d-none');
        // Show success message
        sentEl.style.display = 'block';
        // Reset form
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            sentEl.style.display = 'none';
        }, 5000);
    })
    .catch(function(error) {
        // Hide loading
        loadingEl.classList.add('d-none');
        // Show error message
        errorEl.style.display = 'block';
        errorEl.innerHTML = 'An error occurred. Please try again later.';
    });
}); 