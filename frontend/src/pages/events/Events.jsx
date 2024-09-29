import withNavbar from '../../components/HOC/withNavbar'
import EventPoster from './components/eventPoster'
import '@/styles/eventPage.css'


import { PiHeartBreak } from "react-icons/pi";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from 'react';

const Events = () => {
  const eventssample = [
    {
      title: 'Event 1',
      date: '2022-12-12',
      description: 'This is a sample event description for event 1',
      location: 'Sample Location 1',
      saved: true,
      finished: false
    },
    {
      title: 'Event 2',
      date: '2022-12-12',
      description: 'This is a sample event description for event 2',
      location: 'Sample Location 2',
      saved: true,
      finished: false
    },
    {
      title: 'Event 3',
      date: '2022-12-12',
      description: 'This is a sample event description for event 3',
      location: 'Sample Location 3',
      saved: true,
      finished: false
    },
    {
      title: 'Event 4',
      date: '2022-12-12',
      description: 'This is a sample event description for event 4',
      location: 'Sample Location 4',
      saved: true,
      finished: false
    },
    {
      title: 'Event 5',
      date: '2022-12-12',
      description: 'This is a sample event description for event 5',
      location: 'Sample Location 5',
      saved: true,
      finished: false
    },
    {
      title: 'Event 6',
      date: '2022-12-12',
      description: 'This is a sample event description for event 6',
      location: 'Sample Location 6',
      saved: true,
      finished: false
    },
    {
      title: 'Event 7',
      date: '2022-12-12',
      description: 'This is a sample event description for event 7',
      location: 'Sample Location 7',
      saved: true,
      finished: false
    },
    {
      title: 'Event 8',
      date: '2022-12-12',
      description: 'This is a sample event description for event 8',
      location: 'Sample Location 8',
      saved: true,
      finished: false
    },
    {
      title: 'Event 9',
      date: '2022-12-12',
      description: 'This is a sample event description for event 9',
      location: 'Sample Location 9',
      saved: true,
      finished: false
    },
    {
      title: 'Event 10',
      date: '2022-12-12',
      description: 'This is a sample event description for event 10',
      location: 'Sample Location 10',
      saved: true,
      finished: false
    }
  ]

  const sampleOldEvents = [
    {
      title: 'Event 1',
      date: '2022-12-12',
      description: 'This is a sample event description for event 1',
      location: 'Sample Location 1',
      saved: true,
      finished: true
    },
    {
      title: 'Event 2',
      date: '2022-12-12',
      description: 'This is a sample event description for event 2',
      location: 'Sample Location 2',
      saved: true,
      finished: true
    },
    {
      title: 'Event 3',
      date: '2022-12-12',
      description: 'This is a sample event description for event 3',
      location: 'Sample Location 3',
      saved: true,
      finished: true
    },
    {
      title: 'Event 4',
      date: '2022-12-12',
      description: 'This is a sample event description for event 4',
      location: 'Sample Location 4',
      saved: true,
      finished: true
    }
  ];

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listUpcomingNum, setListUpcomingNum] = useState(0);
  const [listPastNum, setListPastNum] = useState(0);

  useEffect(() => {
    setUpcomingEvents(eventssample);
    setPastEvents(sampleOldEvents);
    setLoading(false);

  }, []);

  const startUpcomingIndex = listUpcomingNum * 3;
  const displayedUpcomingEvents = upcomingEvents.slice(startUpcomingIndex, startUpcomingIndex + 3);
  const totalUpcomingPages = Math.ceil(upcomingEvents.length / 3);

  const startPastIndex = listPastNum * 3;
  const displayedPastEvents = pastEvents.slice(startPastIndex, startPastIndex + 3);
  const totalPastPages = Math.ceil(pastEvents.length / 3);

  return (
    <>
      {!loading ? (
        <div className='w-full h-full -mt-8'>
          <div className='md:text-2xl text-xl font-bold mb-1'>Upcoming Events</div>
          <div className='md:text-lg text-md font-medium mb-3'>Our new and exciting events and workshops to browse, read about, and register for</div>
          {upcomingEvents.length === 0 ? (
            <div className='py-6 select-none'>
              <div className='flex justify-center items-center'>
                <PiHeartBreak className='text-6xl' />
              </div>
              <p className='text-xl font-semibold text-center'>No upcoming events at the moment</p>
            </div>
          ) : (
            <div className='flex gap-4 w-full pb-10'>
              <div className='flex-col flex w-[99%] h-full gap-2 sm:border-t-2 border-[#a79d9d]'>
                {displayedUpcomingEvents.map((event, index) => (
                  <EventPoster key={index} eventData={event} eventsList={upcomingEvents} setEventsList={setUpcomingEvents} />
                ))}
              </div>
              {totalUpcomingPages > 1 ? (<div className='select-none flex flex-col gap-4 justify-center'>
                <div onClick={() => setListUpcomingNum(Math.max(listUpcomingNum - 1, 0))} disabled={listUpcomingNum === 0} className='px-4 py-2 disabled:opacity-50 hover:cursor-pointer'>
                  <FaChevronUp />
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                  {Array.from({ length: totalUpcomingPages }).map((_, pageIndex) => (
                    <span key={pageIndex} className={`h-2 w-2 mx-1 rounded-full ${pageIndex === listUpcomingNum ? 'bg-gray-800' : 'bg-gray-300'}`} onClick={() => setListUpcomingNum(pageIndex)} style={{ cursor: 'pointer' }} />
                  ))}
                </div>
                <div onClick={() => setListUpcomingNum(Math.min(listUpcomingNum + 1, Math.floor(upcomingEvents.length / 3)))} disabled={startUpcomingIndex + 3 >= upcomingEvents.length} className='hover:cursor-pointer px-4 py-2 disabled:opacity-50'>
                  <FaChevronDown />
                </div>
              </div>
              ) : null}
            </div>
          )}

          <div className='md:text-3xl text-md font-bold mb-1'>past Events</div>
          <div className='md:text-xl text-sm font-medium mb-3'>A collection of our past events details and records all thanks to our community</div>
          {pastEvents.length === 0 ? (
            <div className='py-6 select-none'>
              <div className='flex justify-center items-center'>
                <PiHeartBreak className='text-6xl' />
              </div>
              <p className='text-xl font-semibold text-center'>No upcoming events at the moment</p>
            </div>
          ) : (
            <div className='flex-col flex w-[99%] gap-2 border-t-2 border-[#a79d9d]'>
              {displayedPastEvents.map((event, index) => (
                <EventPoster key={index} eventData={event} eventsList={pastEvents} setEventsList={setPastEvents} />
              ))}
            </div>
          )}
          {totalPastPages > 1 ? (<div className=' select-none flex justify-center mt-4 items-center gap-2'>
            <div onClick={() => setListPastNum(Math.max(listPastNum - 1, 0))} disabled={listPastNum === 0} className='px-4 py-2 disabled:opacity-50 flex items-center hover:cursor-pointer'>
              <FaChevronLeft className='mr-2' />
              Previous
            </div>
            <div className='flex gap-1 justify-center items-center'>
              {Array.from({ length: totalPastPages }).map((_, pageIndex) => (
                <span key={pageIndex} className={`h-2 w-2 mx-1 rounded-full ${pageIndex === listPastNum ? 'bg-gray-800' : 'bg-gray-300'}`} onClick={() => setListPastNum(pageIndex)} style={{ cursor: 'pointer' }} />
              ))}
            </div>
            <div onClick={() => setListPastNum(Math.min(listPastNum + 1, Math.floor(pastEvents.length / 3)))} disabled={startPastIndex + 3 >= pastEvents.length} className='hover:cursor-pointer px-4 py-2 flex items-center disabled:opacity-50'>
              Next
              <FaChevronRight className='ml-2' />
            </div>
          </div>
          ) : null}
        </div>
      ) : (
        <div className="w-full h-screen bg-opacity-90 z-40 flex-col py-20">
          <div className="animate-spin mx-auto rounded-full h-24 w-24 border-t-2 border-b-2 border-b-[#cc3838] border-t-[#285D7C]" />
          <p className="text-[#cc3838] text-center text-xl font-semibold mt-4">Fetching Events...</p>
        </div>
      )}
    </>
  );
};

export default withNavbar(Events)