import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { deleteEvent } from '@/endpoints/eventsEndpoints';

export default function DeleteEventConfirmPopup({ eventData, setOpenPopup }) {
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (!deleting) return;

        const submitDeleteEvent = async () => {
            const response = await deleteEvent(eventData._id);
            if (response) {
                window.location.reload();
            }
            setOpenPopup(false);
        }

        submitDeleteEvent();
    }, [deleting]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-1/3 bg-white flex flex-col rounded-lg p-3 py-6 border-2 border-black items-center">
                <p className="text-lg font-bold text-center mb-6">are you sure you want to delete this event from the list?</p>
                <div className="flex gap-5 mx-auto">
                    <button onClick={() => setOpenPopup(false)} className="font-semibold px-4 py-1 rounded-lg bg-[#3d3d3d] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">No</button>
                    <button onClick={() => setDeleting(true)} className="font-semibold px-4 py-1 rounded-lg bg-[#cc3838] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Yes</button>
                </div>
            </div>
        </div>
    );
}

DeleteEventConfirmPopup.propTypes = {
    setOpenPopup: PropTypes.func.isRequired,
    eventData: PropTypes.object.isRequired
}