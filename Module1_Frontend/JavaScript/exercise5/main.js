// Exercise 5: Objects and Prototypes

// Constructor function for Event
function Event(name, date, seats, category) {
    this.name = name;
    this.date = new Date(date);
    this.seats = seats;
    this.category = category;
  }
  
  // Add method to prototype to check availability
  Event.prototype.checkAvailability = function() {
    return this.seats > 0;
  };
  
  // Create some events
  const event1 = new Event("Community Cleanup", "2025-06-15", 20, "Environment");
  const event2 = new Event("Art Workshop", "2025-06-20", 0, "Arts");
  
  // List keys and values of an event
  console.log("Event1 details:");
  for (const [key, value] of Object.entries(event1)) {
    console.log(`${key}: ${value}`);
  }
  
  // Check availability
  console.log(`Is "${event1.name}" available?`, event1.checkAvailability()); // true
  console.log(`Is "${event2.name}" available?`, event2.checkAvailability()); // false
  