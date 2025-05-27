// Sample events data
const events = [
    { name: "Music Night", date: "2025-06-15", seats: 5 },
    { name: "Tech Talk", date: "2024-05-10", seats: 10 }, // Past event
    { name: "Art Workshop", date: "2025-06-20", seats: 0 }, // Full
    { name: "Yoga Session", date: "2025-06-18", seats: 3 }
  ];
  
  // Function to check if event is upcoming
  function isUpcoming(eventDate) {
    const today = new Date();
    const event = new Date(eventDate);
    return event > today;
  }
  
  // Display valid events (upcoming and seats > 0)
  const eventListDiv = document.getElementById("eventList");
  
  events.forEach((event) => {
    if (isUpcoming(event.date) && event.seats > 0) {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${event.name}</strong> - Date: ${event.date} - Seats: ${event.seats}`;
      eventListDiv.appendChild(div);
    }
  });
  
  // Registration Logic with Error Handling
  function register(eventName) {
    try {
      const event = events.find(e => e.name === eventName);
  
      if (!event) {
        throw new Error("Event not found");
      }
  
      if (!isUpcoming(event.date)) {
        throw new Error("Event is in the past");
      }
  
      if (event.seats <= 0) {
        throw new Error("No seats available");
      }
  
      event.seats--;
      console.log(`Successfully registered for ${event.name}. Seats left: ${event.seats}`);
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  }
  
  // Example usage
  register("Yoga Session");  // ✅
  register("Art Workshop");  // ❌ No seats
  register("Tech Talk");     // ❌ Past event
  register("Unknown Event"); // ❌ Not found
  