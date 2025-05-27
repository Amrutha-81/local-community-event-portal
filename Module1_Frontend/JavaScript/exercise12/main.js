document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const form = e.target;
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const event = form.elements['event'].value;
  
    const userData = {
      name,
      email,
      event
    };
  
    // Simulate loading message
    const statusMessage = document.getElementById('statusMsg');
    statusMessage.style.color = 'blue';
    statusMessage.textContent = 'Submitting...';
  
    // Simulated delay with setTimeout
    setTimeout(() => {
      // Post to mock API (using a placeholder)
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          statusMessage.style.color = 'green';
          statusMessage.textContent = 'Registration successful!';
          form.reset();
        })
        .catch(error => {
          statusMessage.style.color = 'red';
          statusMessage.textContent = 'Registration failed. Please try again.';
          console.error('Error:', error);
        });
    }, 2000); // 2 second delay
  });
  