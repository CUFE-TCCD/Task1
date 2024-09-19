import { useState, useEffect } from "react";
import { FaRegImages } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import PropTypes from 'prop-types';
import axios from 'axios';

export default function NewEventForm({ setOpenForm }) {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [loading, setLoading] = useState(false);

    const handleClearForm = () => {
        setEventName('');
        setEventDate('');
        setEventDescription('');
        setEventLocation('');
        document.querySelectorAll('input').forEach(input => input.value = '');
        document.querySelectorAll('textarea').forEach(textarea => textarea.value = '');
    }

    useEffect(() => {
        if (!loading)
            return;

        const submitEvent = async () => {
            try {
                await axios.post('https://virtserver.swaggerhub.com/FAROUQDIAAELDIN/Task1TCCD/1.0.0/event', {
                    title: eventName,
                    date: eventDate,
                    description: eventDescription,
                    location: eventLocation
                });
                setTimeout(() => {
                    window.location.reload();
                }, 4000);
            } catch (error) {
                console.error(error);
            }
            finally {
                setLoading(false);
            }
        };
        submitEvent();
    }, [loading]);

    return (
        <div className={`absolute bg-white w-full h-fit pb-6 z-40 transition-all duration-[800ms] ease-in-out`}>
            <div className="flex justify-between w-[98%]">
                <p className="text-[26px] font-bold">add New Event</p>
                <IoMdClose onClick={() => setOpenForm(false)} size={30} className="hover:cursor-pointer" />
            </div>

            {/* title, date, and description section here*/}
            <div className="flex w-full flex-col gap-4 mt-4 select-none">
                <p className="font-semibold text-2xl -mb-3 border-b border-black">{"1) Main data"}</p>
                <div>
                    <p className="font-semibold text-lg">a.Event Name</p>
                    <p className="font-semibold text-sm mb-2">The main title of the whole event planned</p>
                    <input onChange={(e) => setEventName(e.target.value)} type="text" placeholder="ea: Super awesome event" className={`w-full lg:w-1/3 p-2 border-2 border-[#a79d9d] rounded-lg ${eventName === "" ? "bg-gray-200" : ""}`} />
                </div>
                <div>
                    <p className="font-semibold text-lg">b.Event Date</p>
                    <p className="font-semibold text-sm mb-2">The main title of the whole event planned</p>
                    <input onChange={(e) => setEventDate(e.target.value)} type="date" className={`w-full lg:w-1/3 p-2 border-2 border-[#a79d9d] rounded-lg ${eventDate === "" ? "bg-gray-200" : ""}`} />
                </div>
                <div>
                    <p className="font-semibold text-lg">c.Event Description</p>
                    <div className="flex justify-between items-center w-full lg:w-1/3">
                        <p className="font-semibold text-sm mb-2">Short summary of the event to be posted on the front pages</p>
                        <p className="text-xs text-end font-semibold mr-2">{eventDescription.length}</p>
                    </div>
                    <textarea onChange={(e) => setEventDescription(e.target.value)} placeholder="ea: Super awesome event" className={`w-full lg:w-1/3 h-40 p-2 border-2 border-[#a79d9d] rounded-lg ${eventDescription === "" ? "bg-gray-200" : ""}`} />
                </div>
                <div>
                    <p className="font-semibold text-lg">d.Event Location</p>
                    <p className="font-semibold text-sm mb-2">tell the audience where the buzz is happening</p>
                    <input onChange={(e) => setEventLocation(e.target.value)} type="text" placeholder="ea: main giza campus blue room" className={`w-full lg:w-1/3 p-2 border-2 border-[#a79d9d] rounded-lg ${eventLocation === "" ? "bg-gray-200" : ""}`} />
                </div>

                {/* media section here*/}
                <p className="font-semibold text-2xl -mb-3 border-b border-black mt-8">{"2) Media Attachments"}</p>
                <div>
                    <p className="font-semibold text-lg">e.Event Media</p>
                    <p className="font-semibold text-sm mb-2">Any Media you wish to be displayed on the event page</p>
                    <div className="relative w-full lg:w-1/3 h-80 border-2 border-[#a79d9d] bg-gray-200 rounded-lg flex-col flex items-center justify-center">
                        <FaRegImages size={50} />
                        <p className="font-semibold text-sm mt-1">Drag and drop or click to upload all needed media</p>
                        <input type="file" accept="image/*,video/*" className="absolute top-0 w-full h-full hover:cursor-pointer opacity-0" />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-lg">f.Downloadable Content</p>
                    <p className="font-semibold text-sm mb-2">Any media or files you wish for the audience to be able to download off the page</p>
                    <div className="relative w-full lg:w-1/3 h-80 border-2 border-[#a79d9d] bg-gray-200 rounded-lg flex-col flex items-center justify-center">
                        <FaRegImages size={50} />
                        <p className="font-semibold text-sm mt-1">Drag and drop or click to upload all needed media</p>
                        <input type="file" accept="image/*,video/*" className="absolute top-0 w-full h-full hover:cursor-pointer opacity-0" />
                    </div>
                </div>

                {/* extra stuff addition section here*/}
                <p className="font-semibold text-2xl -mb-3 border-b border-black mt-8">{"3)Extra content"}</p>
                <div>
                    to be added later
                </div>

                {/*final section for submission or cancelation buttons*/}
                <hr className="border-y border-[#a79d9d]" />
                <div className="flex justify-center gap-4 rounded-lg border-2 border-[#a79d9d] p-4 w-fit mx-auto bg-gray-300">
                    {loading ? <AiOutlineLoading3Quarters className="animate-spin" size={30} /> : <>
                        <button onClick={() => setOpenForm(false)} className="font-semibold px-6 py-1 rounded-lg bg-[#3d3d3d] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Cancel</button>
                        <button onClick={() => handleClearForm()} className="font-semibold px-6 py-1 rounded-lg bg-[#285D7C] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Clear</button>
                        <button onClick={() => setLoading(true)} className="font-semibold px-6 py-1 rounded-lg bg-[#cc3838] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Save</button>
                    </>}
                </div>
            </div>
        </div>
    )

}

NewEventForm.propTypes = {
    setOpenForm: PropTypes.func.isRequired,
}