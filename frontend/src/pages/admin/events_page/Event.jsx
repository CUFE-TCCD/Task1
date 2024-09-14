import React from "react";
import withSidebar from "@/components/HOC/withSidebar";
import EventPoster from "@/components/EventPosters/eventPoster";
import EventTypePoster from "@/components/EventPosters/eventTypePoster";
import '/src/styles/eventPage.css';

const Event = () => {
  const events = [
    {
      title: 'Zayed Orientation Day ',
      date: '2024-09-16',
      shortDescription: 'we are ecxited to welcome our freshmen students and introduce them to the great entity they have become a part of and to TCCD with our activities and way of work, join us for this day to know more about us and our programs',
      image: "/src/assets/tccdbackground.jpeg"
    },
    {
      title: 'Event 2',
      date: '2022-02-01',
      shortDescription: 'This is a short description for event 2',
      image: "/src/assets/tccdbackground.jpeg"
    },
    {
      title: 'Event 3',
      date: '2022-03-01',
      shortDescription: 'This is a short description for event 3',
      image: "/src/assets/tccdbackground.jpeg"
    },
    {
      title: 'Event 4',
      date: '2022-04-01',
      shortDescription: 'This is a short description for event 4',
      image: "/src/assets/tccdbackground.jpeg"
    },
    {
      title: 'Event 5',
      date: '2022-05-01',
      shortDescription: 'This is a short description for event 5',
      image: "/src/assets/tccdbackground.jpeg"
    },
    {
      title: 'Event 6',
      date: '2022-06-01',
      shortDescription: 'This is a short description for event 6',
      image: "/src/assets/tccdbackground.jpeg"
    },
    {
      title: 'Event 7',
      date: '2022-10-16',
      shortDescription: 'This is a short description for event 7',
      image: "/src/assets/tccdbackground.jpeg"
    }
  ];

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
    <>
      <p className="text-[20px]">the collection of our new and excited events and our past milestones and successes</p>
      <div className="flex flex-col w-full mt-6">
        <p className='text-[30px] font-bold w-fit py-1'>upcoming events</p>
        <div className="flex flex-col sm:gap-0 px-3 border-l-2 border-[#a79d9d] gap-4 h-full w-full select-none">
          {events.map((event, index) => (
            <EventPoster key={index} {...event} />
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
    </>
  )
};

export default withSidebar(Event);
