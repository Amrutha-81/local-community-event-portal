// Exercise 7: DOM Manipulation

// Sample event data
const events = [
    { name: "Community Meetup", date: "2025-06-15" },
    { name: "Art Exhibition", date: "2025-07-01" },
  ];
  
  // Access the container element
  const eventContainer = document.querySelector("#eventContainer");
  
  // Function to create and append event cards
  function displayEvents() {
    eventContainer.innerHTML = ""; // Clear previous content
  
    events.forEach(event => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <h3>${event.name}</h3>
        <p>Date: ${event.date}</p>
        <button onclick="registerEvent('${event.name}')">Register</button>
      `;
      eventContainer.appendChild(card);
    });
  }
  
  // Function to handle registration
  function registerEvent(eventName) {
    alert(`You registered for: ${eventName}`);
    // Here you can add logic to update UI or data
  }
  
  // Initial display call
  displayEvents();
  