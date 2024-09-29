async function searchEvents() {
    const query = document.getElementById('searchInput').value;
    const apiKey = "QEFC4MR55CNE7KT2UN";
    const apiURL = 'https://www.eventbriteapi.com/v3/users/me/?token=3IZT5BHXA5VK7OR6TFIJ';

    try{
        const response = await fetch(apiURL);
        if(!response.ok) {
            throw new Error('Error fetching events');
        }
        const data = await response.json();
        displayEvents(data.events);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('events').innerHTML = '<p style="color:red;">${error.message}</p>';
    }
}

function displayEvents(events) {
    const eventsDiv = document.getElementById('events');
    eventsDiv.innerHTML = '';

    if (events.length == 0) {
        eventsDiv.innerHTML = '<p>No events found. </p>';
        return;
    }

    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event';

        const image = event.logo ? `<img src="${event.logo.url}" alt="${event.name.text}">` : '<p>No image available</p>';

        const eventDetails = `
            ${image}
            <h3>${event.name.text}</h3>
            <p><strong>Date:</strong> ${new Date(event.start.local).toLocaleString()}</p>
            <p><strong>Location:</strong> ${event.venue ? event.venue.address.localized_address_display : 'Online Event'}</p>
            <p>${event.description.text ? event.description.text.substring(0, 100) + '...' : 'No description available.'}</p>
            <a href="${event.url}" target="_blank">View Event</a>
        `;

        eventDiv.innerHTML = eventDetails;
        eventsDiv.appendChild(eventDiv);

    });
}