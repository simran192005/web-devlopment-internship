document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Initialize and add the map
    function initMap() {
        const location = { lat: -34.397, lng: 150.644 };
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: location
        });
        const marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

    // Load the map script with callback
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
});
