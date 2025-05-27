$(document).ready(function () {
    // Show event cards with animation
    $('#showEvents').click(function () {
      $('.event-card').fadeIn();
    });
  
    // Handle registration click
    $('#registerBtn').click(function () {
      alert('You are registered for Music Night!');
      $(this).text('Registered').prop('disabled', true);
    });
  });
  