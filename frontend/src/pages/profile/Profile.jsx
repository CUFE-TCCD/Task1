import React, { useState, useEffect } from 'react';
import withNavbar from '../../components/HOC/withNavbar';
import EventPoster from './ProfileEventPoster';
const Profile = () => {
  // Temporary user data
  const [user, setUser] = useState({
    name: "John Doe",
    title: "Regular", // Can be "Regular", "Professor", or "Company"
    Email: "Johndoe@test.com",
    photo: "https://i.ibb.co/9Gb3dY0/18b9ffb2a8a791d50213a9d595c4dd52.jpg", // initially empty, default photo will be used
    bookmarkedEvents: [1],
    events: [{
      id: 1,
      title: 'Job Fair',
      date: '2023-09-20',
      description: 'A large event with several companies recruiting new employees.',
  },
  {
      id: 2,
      title: 'Research Day',
      date: '2023-09-21',
      description: 'Presentations and papers from various fields.',
  }], // Events for regular users or professors
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

      
      <div className="mt-10">
      <h3 className="text-2xl font-bold mb-4">{isEvents ? "EVENTS" : "LOCATIONS"}</h3>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <ul>
            {isEvents ? ( //Events
              <>
              <div className="flex flex-col sm:gap-0 px-3 border-l-2 border-[#a79d9d] gap-4 h-full w-full select-none">
            <h4 className="text-xl font-semibold mb-3">Registered</h4>
            {user.events.filter(event => !user.bookmarkedEvents.includes(event.id)).map((event) => (
              <EventPoster
                key={event.id}
                eventData={event}
              />
            ))}
          </div>
              <div className="flex flex-col sm:gap-0 px-3 border-l-2 border-[#a79d9d] gap-4 h-full w-full select-none">
            <h4 className="text-xl font-semibold mb-3">Bookmarked</h4>
            {user.events.filter(event => user.bookmarkedEvents.includes(event.id)).map((event) => (
              <EventPoster
                key={event.id}
                eventData={event}
              />
            ))}
          </div>
          </>
            ) : ( // Locations
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

