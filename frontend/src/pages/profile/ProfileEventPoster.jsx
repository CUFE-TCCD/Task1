import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import fakeEventImage from '@/assets/tccdbackground.jpeg';

export default function EventPoster({ eventData}) {
    const [fadeIn, setFadeIn] = useState('opacity-0 -translate-x-1/2');
    const [deleteEvent, setDeleteEvent] = useState(false);
    const formattedDate = new Date(eventData.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    useEffect(() => {
        setTimeout(() => {
            setFadeIn('opacity-0 translate-x-0');
            setTimeout(() => {
                setFadeIn('opacity-100');
            }, 300);
        }, 10);
    }, []);

    return (
        <>
            {deleteEvent && <DeleteEventConfirmPopup eventData={eventData} setOpenPopup={setDeleteEvent}/> }
            <div className="group flex-none sm:flex hidden w-full h-full z-10 gap-4 border-b-2 border-[#a79d9d] py-4">
                <img src={fakeEventImage} alt="event" className="w-1/3 object-fit rounded-lg -z-10" />
                <div className={`w-2/3 py-3 px-6 relative border-l-2 border-[#a79d9d] ${fadeIn} transition-all duration-[400ms] ease-in-out`}>
                    <p className="font-bold text-2xl">{eventData.title}</p>
                    <div className="text-md mt-1 font-medium flex gap-1 items-end"><p className="font-bold text-lg">Date:</p>{formattedDate}</div>
                    <div className="text-md mt-2 font-medium flex gap-1 leading-6">
                        <p className="font-bold">Description:</p>
                        <span className="break-words whitespace-pre-wrap max-w-[88%]">{eventData.description}</span>
                    </div>
                    {/* <div className="gap-5 flex mt-4">
                        <button onClick={() => setDeleteEvent(true)} className="font-semibold px-4 py-1 rounded-lg bg-black hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">
                            ❤️
                        </button>
                    </div> */} {/* will update later to be used to remove bookmarked events */}
                </div>
            </div>
            <div className="relative group sm:hidden w-full min-h-[180px] z-10">
                <img className="absolute top-0 h-full w-full object-fit z-0 rounded-lg" src={null} alt="event" />
                <div className="absolute w-full bottom-0 bg-black bg-opacity-55 h-1/3 group-hover:h-full z-10 transition-all duration-300 ease-in-out rounded-b-lg group-hover:rounded-lg" />
                <div className="w-full h-full p-3 z-20 absolute top-0 translate-y-2/3 group-hover:translate-y-0 text-white transition-all duration-300 ease-in-out">
                    <p className="text-sm">{eventData.title}</p>
                    <p className="text-xs">{formattedDate}</p>
                    <p className="text-xs mt-2 group-hover:block hidden">Description: {eventData.description}</p>
                    {/* <div className="gap-2 mt-2 group-hover:flex hidden">
                        <button onClick={() => setDeleteEvent(true)} className="font-semibold px-2 py-1 rounded-lg text-xs bg-black hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">
                            ❤️
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    );
}

EventPoster.propTypes = {
    eventData: PropTypes.object.isRequired,
};