const eventList = document.getElementById('eventList');
const loading = document.getElementById('loading');

const mockApiUrl = 'https://jsonplaceholder.typicode.com/posts'; // example API

function showLoading() {
  loading.style.display = 'block';
}

function hideLoading() {
  loading.style.display = 'none';
}

function renderEvents(events) {
  eventList.innerHTML = '';
  events.forEach(event => {
    const li = document.createElement('li');
    li.textContent = event.title;
    eventList.appendChild(li);
  });
}

// Using Promises with .then() and .catch()
function fetchEventsWithPromises() {
  showLoading();
  fetch(mockApiUrl)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      renderEvents(data.slice(0, 10));
      hideLoading();
    })
    .catch(error => {
      alert('Failed to fetch events: ' + error.message);
      hideLoading();
    });
}

// Using async/await
async function fetchEventsAsync() {
  showLoading();
  try {
    const response = await fetch(mockApiUrl);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    renderEvents(data.slice(0, 10));
  } catch (error) {
    alert('Failed to fetch events: ' + error.message);
  } finally {
    hideLoading();
  }
}

// Call one of the functions to test:
fetchEventsWithPromises();
// or
// fetchEventsAsync();
