// Store event details
const eventName = "Cultural Fest";
const eventDate = "2025-06-15";
let availableSeats = 50;

// Show event info using template literals
const eventInfo = `Event: ${eventName} | Date: ${eventDate} | Seats Available: ${availableSeats}`;
console.log(eventInfo);
document.getElementById("eventDetails").innerText = eventInfo;

// Simulate user registration
availableSeats--;
console.log(`Seats after registration: ${availableSeats}`);
