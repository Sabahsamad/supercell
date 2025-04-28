document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple form validation
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        return;
    }
    
    // Display success message
    document.getElementById('successMessage').style.display = 'block';
    
    // Optionally, here you could also send the form data to a server
    // using an AJAX request or fetch API
    
    // Reset the form
    document.getElementById('contactForm').reset();
});
