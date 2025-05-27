// Exercise 6: Arrays and Methods

let events = [
    { name: "Music Festival", category: "Music" },
    { name: "Baking Workshop", category: "Workshop" },
    { name: "Rock Concert", category: "Music" },
  ];
  
  // Add new event using push()
  events.push({ name: "Yoga Session", category: "Health" });
  
  // Filter to show only music events
  const musicEvents = events.filter(event => event.category === "Music");
  console.log("Music Events:", musicEvents);
  
  // Map to format display cards
  const displayCards = events.map(event => `Event: ${event.name} (${event.category})`);
  console.log("Display Cards:");
  displayCards.forEach(card => console.log(card));
  