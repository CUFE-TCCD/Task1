export const fetchEvents = async () => {
    try {
        const response = await fetch("http://localhost:5300/api/v1/events", {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching events:", error);
        return null;
    }
};

export const fetchBookmarkedEvents = async () => {
    try {
        const response = await fetch("http://localhost:5300/api/v1/events/bookmarks", {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching bookmarked events:", error);
        return null;
    }
};

export const bookEvent = async (eventID) => {
    try {
        const response = await fetch(`http://localhost:5300/api/v1/events/${eventID}/bookmark`, {
            method: "POST",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return true;
    }
    catch (error) {
        console.error("Error booking event:", error);
        return false;
    }
};

export const unbookEvent = async (eventID) => {
    try {
        const response = await fetch(`http://localhost:5300/api/v1/events/${eventID}/remove-bookmark`, {
            method: "POST",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return true;
    }
    catch (error) {
        console.error("Error unbooking event:", error);
        return false;
    }
};