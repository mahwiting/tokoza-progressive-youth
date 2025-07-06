// Initialize Map
function initMap() {
    // Check if map element exists
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    // Coordinates for Thokozani (using Johannesburg coordinates as example)
    const thokozaniCoords = [-26.36014031, 28.1413417];
    
    // Create map centered on Thokozani
    const map = L.map('map').setView(thokozaniCoords, 14);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker for organization location
    const orgIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });

    L.marker(thokozaniCoords, { icon: orgIcon }).addTo(map)
        .bindPopup('Thokoza Progressive Youth Centre<br>8579 Tsepo Street')
        .openPopup();

    // Add circle to show area of impact
    L.circle(thokozaniCoords, {
        color: '#1a4b8c',
        fillColor: '#3a6cb3',
        fillOpacity: 0.2,
        radius: 1000
    }).addTo(map).bindPopup('Our community impact area');
}

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', initMap);