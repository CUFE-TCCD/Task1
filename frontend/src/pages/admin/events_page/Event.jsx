import withSidebar from "@/components/HOC/withSidebar";
import EventPoster from "./pageComponents/EventPosters/eventPoster";
import EventTypePoster from "./pageComponents/EventPosters/eventTypePoster";
import FullEventView from "./fullEventView";
import '/src/styles/eventPage.css';
import NewEventForm from "./newEventForm";
import EditEventForm from "./editEventForm";
import { fetchEvents } from "@/endpoints/eventsEndpoints";


import { useState, useEffect } from "react";

const Event = () => {
  const [addNewEvent, setAddNewEvent] = useState(false);
  const [editEvent, setEditEvent] = useState(null);
  const [viewedEvent, setViewedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    fetchEvents(setEvents);
    setFetching(false);
  }, []);

  const eventTypes = [
    {
      title: 'Job Fair',
      image: "/src/assets/tccdbackground.jpeg"
    },
    {
      title: 'Research Day',
      image: "/src/assets/tccdbackground.jpeg"
    },
    {
      title: 'Workshops',
      image: "/src/assets/tccdbackground.jpeg"
    },
    {
      title: 'Filed Trips',
      image: "/src/assets/tccdbackground.jpeg"
    }
  ];

  return (
    <div className={`w-full h-fit pb-6 relative`}>
      {addNewEvent && <NewEventForm setOpenForm={setAddNewEvent} openForm={addNewEvent} />}
      {editEvent !== null && <EditEventForm eventData={editEvent} setOpenForm={setEditEvent} />}
      {viewedEvent !== null && <FullEventView setOpen={setViewedEvent} eventData={viewedEvent} />}

      {fetching ? (
        <div className="w-full h-screen bg-white bg-opacity-90 z-40 flex-col py-20">
          <div className="animate-spin mx-auto rounded-full h-24 w-24 border-t-2 border-b-2 border-b-[#cc3838] border-t-[#285D7C]" />
          <p className="text-[#cc3838] text-center text-xl font-semibold mt-4">Fetching Events...</p>
        </div>
      ) : (
        <div className={`w-full h-full ${addNewEvent || editEvent !== null || viewedEvent !== null ? "h-screen overflow-hidden" : ""}`}>
          <p className="text-[17px] mt-3 md:mt-0">the collection of our new and excited events and our past milestones and successes</p>
          <button onClick={() => setAddNewEvent(true)} className="font-semibold px-6 py-1 mt-2 rounded-lg bg-[#cc3838] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Add New Event</button>
          <div className="flex flex-col w-full">
            <p className='text-[30px] font-bold w-fit py-1'>upcoming events</p>
            <div className="flex flex-col sm:gap-0 px-3 border-l-2 border-[#a79d9d] gap-4 h-full w-full select-none">
              {events.map((event, index) => (
                <EventPoster key={index} triggerEdit={setEditEvent} eventData={event} triggerDetails={setViewedEvent} />
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full mt-6">
            <p className='text-[30px] font-bold w-fit py-1 mb-2'>Past events</p>
            <div className="flex gap-2 py-2 overflow-x-auto custom-scrollbar h-full w-full">
              {eventTypes.map((event, index) => (
                <EventTypePoster key={index} {...event} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

export default withSidebar(Event);
