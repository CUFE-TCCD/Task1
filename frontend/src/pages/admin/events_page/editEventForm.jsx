import { useEffect, useState } from "react";
import { FaRegImages } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import PropTypes from 'prop-types';

export default function EditEventForm({ setOpenForm, eventData }) {
    const [eventName, setEventName] = useState(eventData.title);
    const [eventDate, setEventDate] = useState(eventData.date);
    const [eventDescription, setEventDescription] = useState(eventData.shortDescription);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    return (
        <div className={`absolute bg-white w-full h-fit pb-6 z-40 transition-all duration-[800ms] ease-in-out`}>
            <div className="flex justify-between w-[98%]">
                <p className="text-[26px] font-bold">add New Event</p>
                <IoMdClose onClick={() => setOpenForm(null)} size={30} className="hover:cursor-pointer" />
            </div>

            <div className="flex w-full flex-col gap-4 mt-4 select-none">
                <p className="font-semibold text-2xl -mb-3 border-b border-black">{"1) Main data"}</p>
                <div>
                    <p className="font-semibold text-lg">a.Event Name</p>
                    <p className="font-semibold text-sm mb-2">The main title of the whole event planned</p>
                    <input onChange={(e) => setEventName(e.target.value)} type="text" defaultValue={eventData.title} className={`w-full lg:w-1/3 p-2 border-2 border-[#a79d9d] rounded-lg ${eventName === "" ? "bg-gray-200" : ""}`} />
                </div>
                <div>
                    <p className="font-semibold text-lg">b.Event Date</p>
                    <p className="font-semibold text-sm mb-2">The main title of the whole event planned</p>
                    <input onChange={(e) => setEventDate(e.target.value)} type="date" defaultValue={eventData.date} className={`w-full lg:w-1/3 p-2 border-2 border-[#a79d9d] rounded-lg ${eventDate === "" ? "bg-gray-200" : ""}`} />
                </div>
                <div>
                    <p className="font-semibold text-lg">c.Event Description</p>
                    <div className="flex justify-between items-center w-full lg:w-1/3">
                        <p className="font-semibold text-sm mb-2">Short summary of the event to be posted on the front pages</p>
                        <p className="text-xs text-end font-semibold mr-2">{eventDescription.length}</p>
                    </div>
                    <textarea onChange={(e) => setEventDescription(e.target.value)} defaultValue={eventData.shortDescription} className={`w-full lg:w-1/3 h-40 p-2 border-2 border-[#a79d9d] rounded-lg ${eventDescription === "" ? "bg-gray-200" : ""}`} />
                </div>
                <p className="font-semibold text-2xl -mb-3 border-b border-black mt-8">{"2) Media Attachments"}</p>
                <div>
                    <p className="font-semibold text-lg">d.Event Media</p>
                    <p className="font-semibold text-sm mb-2">Any Media you wish to be displayed on the event page</p>
                    <div className="relative w-full lg:w-1/3 h-80 border-2 border-[#a79d9d] bg-gray-200 rounded-lg flex-col flex items-center justify-center">
                        <FaRegImages size={50} />
                        <p className="font-semibold text-sm mt-1">Drag and drop or click to upload all needed media</p>
                        <input type="file" accept="image/*,video/*" className="absolute top-0 w-full h-full hover:cursor-pointer opacity-0" />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-lg">e.Downloadable Content</p>
                    <p className="font-semibold text-sm mb-2">Any media or files you wish for the audience to be able to download off the page</p>
                    <div className="relative w-full lg:w-1/3 h-80 border-2 border-[#a79d9d] bg-gray-200 rounded-lg flex-col flex items-center justify-center">
                        <FaRegImages size={50} />
                        <p className="font-semibold text-sm mt-1">Drag and drop or click to upload all needed media</p>
                        <input type="file" accept="image/*,video/*" className="absolute top-0 w-full h-full hover:cursor-pointer opacity-0" />
                    </div>
                </div>
                <p className="font-semibold text-2xl -mb-3 border-b border-black mt-8">{"3)Extra content"}</p>
                <div>
                    to be added later
                </div>

                <hr className="border-y border-[#a79d9d]"/>
                <div className="flex justify-center gap-4 rounded-lg border-2 border-[#a79d9d] p-4 w-fit mx-auto bg-gray-300">
                    <button onClick={() => setOpenForm(null)} className="font-semibold px-6 py-1 rounded-lg bg-[#3d3d3d] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Cancel</button>
                    <button className="font-semibold px-6 py-1 rounded-lg bg-[#cc3838] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Save</button>
                </div>
            </div>
        </div>
    )
}

EditEventForm.propTypes = {
    setOpenForm: PropTypes.func,
    eventData: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        shortDescription: PropTypes.string,
        image: PropTypes.string
    })
};