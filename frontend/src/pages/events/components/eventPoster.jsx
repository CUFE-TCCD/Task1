import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import fakeEventImage from '@/assets/tccdbackground.jpeg';
import "@/styles/eventPage.css";

import { FaRegStar } from "react-icons/fa";
import { LuStarOff } from "react-icons/lu";


export default function EventPoster({ eventData, eventsList, setEventsList }) {
    const [fadeIn, setFadeIn] = useState('opacity-0 -translate-x-1/2');
    const [registerEvent, setRegisterEvent] = useState(false);

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


    useEffect(() => {
        if (registerEvent) {
            const updatedEventsList = eventsList.filter(event => event.title !== eventData.title);
            setEventsList(updatedEventsList);
            setRegisterEvent(false);
        }
    }, [registerEvent]);

    return (
        <>
            <div className="relative group flex-none sm:flex hidden w-full h-full z-10 gap-4 border-b-2 border-[#a79d9d] p-3">
                {!eventData.saved ? <FaRegStar className="absolute z-30 top-4 right-4 text-2xl hover:opacity-100 opacity-50 hover:cursor-pointer transition-all duration-150 ease-in-out" />
                    : <LuStarOff className="absolute z-30 top-4 right-4 text-2xl hover:opacity-100 opacity-50 hover:cursor-pointer transition-all duration-150 ease-in-out" />}
                <div className="relative w-[30%] min-w-[300px] aspect-w-16 aspect-h-9">
                    <img src={fakeEventImage} alt="event" className="absolute inset-0 w-full h-full object-fit rounded-lg" />
                </div>
                <div className={`w-full py-3 px-6 relative border-l-2 border-[#a79d9d] ${fadeIn} transition-all duration-[400ms] ease-in-out`}>
                    <p className="font-bold xl:text-2xl text-lg">{eventData.title}</p>
                    <div className="xl:text-md text-sm font-medium flex gap-1 items-center">
                        <p className="font-bold xl:text-lg text-md">Date:</p>
                        {formattedDate}
                    </div>
                    <div className="xk:text-md text-sm font-medium flex gap-1 items-center">
                        <p className="font-bold xl:text-lg text-md">Location:</p>
                        {eventData.location}
                    </div>
                    <div className="sl:text-md text-sm mt-1 font-medium flex gap-1 leading-6 items-start">
                        <p className="font-bold xl:text-lg text-md">Description:</p>
                        <span className="description-text mt-1">{eventData.description}</span>
                    </div>
                    <div className="md:gap-5 gap-2 flex mt-4">
                        <button className="md:text-md text-sm font-semibold px-4 py-1 rounded-lg bg-[#285D7C] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">View Details</button>
                        {!eventData.finished ? <button onClick={() => setRegisterEvent(true)} className="md:text-md text-sm font-semibold px-4 py-1 rounded-lg bg-[#cc3838] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Register</button> : null}
                    </div>
                </div>
            </div>
            <div className="relative group sm:hidden w-full min-h-[180px] z-10">
                <img className="absolute top-0 h-full w-full object-fit z-0 rounded-lg" src={fakeEventImage} alt="event" />
                <div className="absolute w-full bottom-0 bg-black bg-opacity-55 h-1/3 group-hover:h-full z-10 transition-all duration-300 ease-in-out rounded-b-lg group-hover:rounded-lg" />

                {!eventData.saved ?
                    <div className="absolute py-3 bottom-0 right-3 h-1/3 z-20 text-md text-white group-hover:h-full transition-all duration-300 ease-in-out">
                        <FaRegStar className="hover:opacity-60 opacity-100 hover:cursor-pointer transition-all duration-150 ease-in-out" />
                    </div>
                    :
                    <div className="absolute py-3 bottom-0 right-3 h-1/3 z-20 text-md text-white group-hover:h-full transition-all duration-300 ease-in-out">
                        <LuStarOff className="hover:opacity-60 opacity-100 hover:cursor-pointer transition-all duration-150 ease-in-out" />
                    </div>}

                <div className="w-full h-fit p-3 z-20 absolute top-0 translate-y-[200%] group-hover:translate-y-0 text-white transition-all duration-300 ease-in-out">
                    <p className="text-sm">{eventData.title}</p>
                    <p className="text-xs">{formattedDate}</p>
                    <p className="text-xs mt-2 group-hover:block hidden">Description: {eventData.description}</p>
                    <div className="gap-2 mt-2 group-hover:flex hidden">
                        <button className="font-semibold px-2 py-1 rounded-lg text-xs bg-[#285D7C] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">View Details</button>
                        {!eventData.finished ? <button onClick={() => setRegisterEvent(true)} className="font-semibold px-2 py-1 rounded-lg text-xs bg-[#cc3838] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Register</button> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

EventPoster.propTypes = {
    eventData: PropTypes.object.isRequired,
    eventsList: PropTypes.array.isRequired,
    setEventsList: PropTypes.func.isRequired
}