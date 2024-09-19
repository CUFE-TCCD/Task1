import { useEffect, useState } from "react";
import DeleteEventConfirmPopup from "./deleteEventConfirmPopup";
import PropTypes from 'prop-types';

export default function EventPoster({ eventData, triggerEdit, triggerDetails }) {
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
            {deleteEvent && <DeleteEventConfirmPopup setOpenPopup={setDeleteEvent}/> }
            <div className="group flex-none sm:flex hidden w-full h-full z-10 gap-4 border-b-2 border-[#a79d9d] py-4">
                <img src={null} alt="event" className="w-1/3 object-fit rounded-lg -z-10" />
                <div className={`w-full py-3 px-6 relative border-l-2 border-[#a79d9d] ${fadeIn} transition-all duration-[400ms] ease-in-out`}>
                    <p className="font-bold text-2xl">{eventData.title}</p>
                    <p className="text-lg mt-1 font-medium">Date: {formattedDate}</p>
                    <p className="text-md mt-2 font-medium leading-6">Description: {eventData.shortDescription}</p>
                    <div className="gap-5 flex mt-4">
                        <button onClick={() => triggerDetails(eventData)} className="font-semibold px-4 py-1 rounded-lg bg-[#3d3d3d] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">More Details</button>
                        <button onClick={() => triggerEdit(eventData)} className="font-semibold px-4 py-1 rounded-lg bg-[#285D7C] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Edit</button>
                        <button onClick={() => setDeleteEvent(true)} className="font-semibold px-4 py-1 rounded-lg bg-[#cc3838] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Delete</button>
                    </div>
                </div>
            </div>
            <div className="relative group sm:hidden w-full min-h-[180px] z-10">
                <img className="absolute top-0 h-full w-full object-fit z-0 rounded-lg" src={null} alt="event" />
                <div className="absolute w-full bottom-0 bg-black bg-opacity-55 h-1/3 group-hover:h-full z-10 transition-all duration-300 ease-in-out rounded-b-lg group-hover:rounded-lg" />
                <div className="w-full h-full p-3 z-20 absolute top-0 translate-y-2/3 group-hover:translate-y-0 text-white transition-all duration-300 ease-in-out">
                    <p className="text-sm">{eventData.title}</p>
                    <p className="text-xs">{formattedDate}</p>
                    <p className="text-xs mt-2 group-hover:block hidden">Description: {eventData.shortDescription}</p>
                    <div className="gap-2 mt-2 group-hover:flex hidden">
                        <button onClick={() => triggerDetails(eventData)} className="font-semibold px-4 py-1 rounded-lg bg-[#3d3d3d] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">More Details</button>
                        <button onClick={() => triggerEdit(eventData)} className="font-semibold px-2 py-1 rounded-lg text-xs bg-[#285D7C] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Edit</button>
                        <button onClick={() => setDeleteEvent(true)} className="font-semibold px-2 py-1 rounded-lg text-xs bg-[#cc3838] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

EventPoster.propTypes = {
    eventData: PropTypes.object.isRequired,
    triggerEdit: PropTypes.func.isRequired,
    triggerDetails: PropTypes.func.isRequired
}