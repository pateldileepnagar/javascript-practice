// Task 1: User Information Form
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;
    
    // Create user object
    const user = {
        fullName: fullName,
        email: email,
        age: age,
        city: city
    };
    
    // Show confirmation dialog
    const isConfirmed = confirm("Are you sure you want to submit?");
    
    // Get message and result elements
    const messageElement = document.getElementById('userFormMessage');
    const resultElement = document.getElementById('userFormResult');
    
    if (isConfirmed) {
        // Display success message
        messageElement.innerHTML = '<div class="message success">Form submitted successfully!</div>';
        
        // Display user information
        resultElement.innerHTML = `
            <h3>User Information:</h3>
            <p><strong>Full Name:</strong> ${user.fullName}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>City:</strong> ${user.city}</p>
        `;
    } else {
        // Display cancellation message
        messageElement.innerHTML = '<div class="message error">Form submission cancelled.</div>';
    }
});