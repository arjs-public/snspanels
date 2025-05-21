// Cache DOM elements
const form = document.getElementById('url-form');
const submitBtn = document.getElementById('submit-btn');
const baseUrlInput = document.getElementById('baseUrl');
const gameIdInput = document.getElementById('game-id');
const leagueInput = document.getElementById('league');
const tokenInput = document.getElementById('token');
const urlSelect = document.getElementById('url-select');

// Event listener for the submit button
submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get values from input fields
  const baseUrl = baseUrlInput.value;
  const gameId = gameIdInput.value;
  const league = leagueInput.value;
  const token = tokenInput.value;
  const selectedUrl = urlSelect.value;

  // Check if any required field is empty
  if (!gameId || !league || !token) {
    alert('Please fill in all fields!');
    return;
  }

  // Build the URL
  // The base URL is combined with the selected panel, game ID, league, and token
  const url = `${baseUrl}/${selectedUrl}/?game=${gameId}&league=${league}&token=${token}`;
  console.log('Generated URL:', url);

  // Open URL in a new tab/window
  window.open(url, '_blank');
});

// Set the baseUrl input field based on the current window location
window.onload = function() {
    const currentOrigin = window.location.origin;
    console.log('Current origin:', currentOrigin);
    // Check if the current origin is localhost or a local IP address
    if (!currentOrigin.includes('localhost') && !currentOrigin.includes('127.0.0.1')) {
        console.log('Not Localhost, setting baseUrl to GitHub Pages');
        baseUrlInput.value = 'https://arjs-public.github.io/snspanels';
    } else {
        console.log('Localhost detected, setting baseUrl to local development server');
        baseUrlInput.value = 'http://localhost:5500'; // Assuming local server runs on port 5500
    }
}
