// Exercise 4: Functions, Scope, Closures, Higher-Order Functions

// Closure to track total registrations per category
function createRegistrationTracker() {
    const registrations = {};
  
    return function(category) {
      if (!registrations[category]) {
        registrations[category] = 0;
      }
      registrations[category]++;
      return registrations[category];
    };
  }
  
  const trackRegistrations = createRegistrationTracker();
  
  // Event list
  const events = [
    { id: 1, name: "Community Cleanup", category: "Environment" },
    { id: 2, name: "Art Workshop", category: "Arts" },
    { id: 3, name: "Tech Talk", category: "Technology" },
  ];
  
  // Function to add an event
  function addEvent(event) {
    events.push(event);
    console.log(`Event "${event.name}" added.`);
  }
  
  // Function to register a user for an event
  function registerUser(eventId, category) {
    // Simulate registration logic
    const count = trackRegistrations(category);
    console.log(`User registered for event ${eventId} in category "${category}". Total registrations for this category: ${count}`);
  }
  
  // Higher-order function to filter events by category using a callback
  function filterEventsByCategory(category, callback) {
    const filteredEvents = events.filter(event => event.category === category);
    callback(filteredEvents);
  }
  
  // Example usage:
  
  addEvent({ id: 4, name: "Cooking Class", category: "Food" });
  
  registerUser(1, "Environment");
  registerUser(2, "Arts");
  registerUser(3, "Technology");
  registerUser(4, "Food");
  registerUser(4, "Food");
  
  filterEventsByCategory("Food", (filteredEvents) => {
    console.log("Filtered Food Events:", filteredEvents);
  });
  