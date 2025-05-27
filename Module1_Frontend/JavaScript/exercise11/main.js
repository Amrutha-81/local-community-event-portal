const form = document.getElementById('registrationForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload
  
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const selectedEvent = form.elements['event'].value;

  // Simple validation
  if (name === "" || email === "") {
    errorMsg.textContent = "Please fill out all fields.";
    return;
  }
  if (!email.includes('@')) {
    errorMsg.textContent = "Please enter a valid email.";
    return;
  }
  
  errorMsg.textContent = ""; // Clear errors

  // Simulate registration success
  alert(`Thank you, ${name}! You are registered for ${selectedEvent}.`);

  // Clear form after successful registration
  form.reset();
});
