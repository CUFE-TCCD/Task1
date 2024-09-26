// write the logic of the  functions for fetching the Location endpoints
const API_URL = "https://your-real-api-url.com/locations"; // Replace with your actual API URL

// Function to retrieve the token (could be from localStorage or a state management solution)
const getToken = () => {
  // Example: If you store the token in localStorage
  return localStorage.getItem('token'); // Replace with your token retrieval method
};

// const authHeaders = () => ({
//   Authorization: `Bearer ${getToken()}`,
//   "Content-Type": "application/json",
// });

const getAllLocations = async () => {
  try {
    const response = await fetch('http://localhost:5300/api/v1/locations', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    });
    if (!response.ok) {
        throw new Error('Error fetching locations');
    }
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
};

const addLocation = async (newLocation) => {
  try {
    const response = await fetch('http://localhost:5300/api/v1/locations', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(newLocation),
    });
    if (!response.ok) {
      throw new Error('Error adding location');
    }
    console.log(response)
    return response
  } catch (error) {
    console.error("Error adding location:", error);
    throw error;
  }
};

const updateLocation = async (id, updatedLocation) => {
  try {
    const response = await fetch(`http://localhost:5300/api/v1/locations/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(updatedLocation),
    });
    if (!response.ok) {
      throw new Error('Error updating location');
    }
    return response;
  } catch (error) {
    console.error("Error updating location:", error);
    throw error;
  }
};

const deleteLocation = async (id) => {
  try {
    console.log(id)
    console.log(1)
    const response = await fetch(`http://localhost:5300/api/v1/locations/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    });
    console.log(2)
    console.log(response)
    if (!response.ok) {
        console.log(3)
        throw new Error('Error deleting location');
    }
    console.log(4)
    return await response.json();
  } catch (error) {
    console.log(error.message)
    console.error("Error deleting location:", error);
    throw error;
  }
};

export {getAllLocations , deleteLocation , updateLocation , addLocation} 