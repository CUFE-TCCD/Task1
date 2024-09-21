import { useState } from 'react';
import PropTypes from 'prop-types';

export default function DeleteEventConfirmPopup({setOpenPopup}) {
    const [adminName, setAdminName] = useState("");

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-1/3 bg-white flex flex-col rounded-lg p-3 py-6 border-2 border-black items-center">
                <p className="text-lg font-bold text-center mb-6">Please enter your admin name and password and press confirm</p>
                <input onChange={(e) => setAdminName(e.target.value)} type="text" placeholder="Admin Name" className={`w-[80%] p-2 border-2 border-[#a79d9d] mb-6 rounded-lg ${adminName === "" ? "bg-gray-200" : ""}`} />
                <input onChange={(e) => setAdminName(e.target.value)} type="password" placeholder="Admin Password" className={`w-[80%] p-2 border-2 border-[#a79d9d] mb-4 rounded-lg ${adminName === "" ? "bg-gray-200" : ""}`} />
                <div className="flex gap-5 mt-5 mx-auto">
                    <button onClick={() => setOpenPopup(false)} className="font-semibold px-4 py-1 rounded-lg bg-[#3d3d3d] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Cancel</button>
                    <button className="font-semibold px-4 py-1 rounded-lg bg-[#cc3838] hover:bg-white text-white hover:text-black hover:border-black border-transparent border transition-colors duration-200 ease-in-out">Confirm</button>
                </div>
            </div>
        </div>
    );
}

DeleteEventConfirmPopup.propTypes = {
    setOpenPopup: PropTypes.func.isRequired
}