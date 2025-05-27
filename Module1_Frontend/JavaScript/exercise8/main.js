// Sample events array
const events = [
    { id: 1, name: "Music Festival", category: "music", seats: 10 },
    { id: 2, name: "Baking Workshop", category: "workshop", seats: 5 },
    { id: 3, name: "Football Match", category: "sports", seats: 0 },
    { id: 4, name: "Jazz Night", category: "music", seats: 7 },
  ];
  
  // Container element
  const eventContainer = document.getElementById("eventContainer");
  const categoryFilter = document.getElementById("categoryFilter");
  const searchInput = document.getElementById("searchInput");
  
  // Function to display events
  function displayEvents(eventList) {
    eventContainer.innerHTML = ""; // Clear previous
  
    if (eventList.length === 0) {
      eventContainer.innerHTML = "<p>No events found.</p>";
      return;
    }
  
    eventList.forEach(event => {
      const card = document.createElement("div");
      card.style.border = "1px solid #ccc";
      card.style.padding = "10px";
      card.style.margin = "10px 0";
  
      card.innerHTML = `
        <h3>${event.name}</h3>
        <p>Category: ${event.category}</p>
        <p>Seats Available: ${event.seats}</p>
        <button ${event.seats === 0 ? "disabled" : ""} data-id="${event.id}">Register</button>
      `;
  
      // Add event listener to Register button
      card.querySelector("button").onclick = () => register(event.id);
  
      eventContainer.appendChild(card);
    });
  }
  
  // Register function to reduce seats and update UI
  function register(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event && event.seats > 0) {
      event.seats--;
      alert(`You registered for ${event.name}. Seats left: ${event.seats}`);
      applyFilters(); // Update displayed list
    } else {
      alert("Sorry, no seats available.");
    }
  }
  
  // Filter by category and search by name
  function applyFilters() {
    const category = categoryFilter.value.toLowerCase();
    const searchTerm = searchInput.value.toLowerCase();
  
    let filtered = events.filter(event => {
      const matchesCategory = category === "all" || event.category === category;
      const matchesSearch = event.name.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });
  
    displayEvents(filtered);
  }
  
  // Event listeners for filter and search
  categoryFilter.onchange = applyFilters;
  searchInput.onkeydown = applyFilters;
  
  // Initial display
  displayEvents(events);
  