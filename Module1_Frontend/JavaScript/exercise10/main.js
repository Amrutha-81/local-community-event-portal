// Sample events array
const events = [
    { id: 1, name: "Music Concert", category: "music", location: "Park" },
    { id: 2, name: "Art Workshop", category: "art", location: "Community Center" },
    { id: 3, name: "Cooking Class", category: "food", location: "Kitchen" },
  ];
  
  // Function with default parameters and destructuring
  const displayEvent = ({ name, category, location } = {}) => {
    console.log(`Event: ${name} | Category: ${category} | Location: ${location}`);
  };
  
  // Cloning array using spread operator before filtering
  const filterEventsByCategory = (eventsList, category = "music") => {
    const clonedEvents = [...eventsList];
    return clonedEvents.filter(({ category: cat }) => cat === category);
  };
  
  // Usage example
  const musicEvents = filterEventsByCategory(events);
  musicEvents.forEach(event => displayEvent(event));
  