// Get references to the form and input elements using their IDs
const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the input elements
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Create a notification message
    const message = `Username: ${username}\nPassword: ${password}`;

    // Display the alert with the message
    alert(message);

    // Optionally clear the form fields
    usernameInput.value = '';
    passwordInput.value = '';
});
