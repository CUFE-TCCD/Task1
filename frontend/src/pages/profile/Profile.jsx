import React, { useState, useEffect } from 'react';
import withNavbar from '../../components/HOC/withNavbar';

const Profile = () => {
  // User data coming from an API or state
  const [user, setUser] = useState({
    name: "John Doe",
    title: "Company", // Can be "Regular", "Professor", or "Company"
    Email: "Johndoe@test.com",
    photo: "https://i.ibb.co/9Gb3dY0/18b9ffb2a8a791d50213a9d595c4dd52.jpg", // initially empty, default photo will be used
    events: ["Event 1", "Event 2", "Event 3"], // Events for regular users or professors
    locations: ["Location A", "Location B"], // Locations for companies
  });
  const isEvents = user.title === "Regular" || user.title === "Professor";
  // useEffect(() => {
  //   // Fetch user profile data from an API
  //   // setUser(fetchedData);
  // }, []);

  return (
    <div className="container mx-auto p-4 mt-10">
      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <h2 className="text-lg text-gray-600">{user.title}</h2>
          <p className="text-gray-600">{user.Email}</p>
          {/* <button className="bg-green-100 text-gray-800 font-semibold py-2 px-4 mt-6 rounded-lg shadow-md hover:bg-green-200">
            <span role="img" aria-label="envelope">✉️</span> Contact Me
          </button> */}
        </div>
        <div>
          <img
            src={user.photo} // default profile image
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
        </div>
      </div>

      {/* Events */}
      <div className="mt-10">
      <h3 className="text-2xl font-bold mb-4">{isEvents ? "EVENTS" : "LOCATIONS"}</h3>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          {/* <h4 className="text-xl font-semibold mb-3">idk</h4> */}
          <ul className="list-disc ml-6 space-y-2">
            {isEvents ? (
              user.events.map((event, index) => (
                <li key={index} className="text-gray-700">{event}</li>
              ))
            ) : (
              user.locations.map((location, index) => (
                <li key={index} className="text-gray-700">{location}</li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withNavbar(Profile);
