export const fetchEvents = async (setEventsData) => {
    try {
        const response = await fetch('http://localhost:5300/api/v1/events', {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setEventsData(data);
    } catch (error) {
        console.error('Error fetching events:', error);
    }
};

export const addNewEvent = async (eventName, eventDate, eventDescription, eventLocation) => {
    try {
        const response = await fetch('http://localhost:5300/api/v1/event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4NWNjZTgzLWQyZDQtNDllMi04YjcxLTcxZTJmYzdmNmY2OCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNzI5MjU5MCwiZXhwIjoxNzI3Mjk2MTkwfQ.Ss8pM-ZP965wlfluqCDavk91_DLZAJEIUnrJMw3K3zw`
            },
            body: JSON.stringify({
                title: eventName,
                date: eventDate,
                description: eventDescription,
                location: eventLocation
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

    } catch (error) {
        console.error('Error adding new event:', error);
    }
};

export const editEvent = async (eventName, eventDate, eventDescription, eventLocation, id) => {
    try {
        const response = await fetch(`http://localhost:5300/api/v1/events/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4NWNjZTgzLWQyZDQtNDllMi04YjcxLTcxZTJmYzdmNmY2OCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNzI5MjU5MCwiZXhwIjoxNzI3Mjk2MTkwfQ.Ss8pM-ZP965wlfluqCDavk91_DLZAJEIUnrJMw3K3zw`
            },
            body: JSON.stringify({
                title: eventName,
                date: eventDate,
                description: eventDescription,
                location: eventLocation
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        return true;
    } catch (error) {
        console.error('Error editing event:', error);
        return false;
    }
};

export const deleteEvent = async (_id) => {
    try {
        const response = await fetch(`http://localhost:5300/api/v1/events/${_id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4NWNjZTgzLWQyZDQtNDllMi04YjcxLTcxZTJmYzdmNmY2OCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNzI5MjU5MCwiZXhwIjoxNzI3Mjk2MTkwfQ.Ss8pM-ZP965wlfluqCDavk91_DLZAJEIUnrJMw3K3zw`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return true;
    }
    catch (error) {
        console.error('Error deleting event:', error);
        return false;
    }
};

