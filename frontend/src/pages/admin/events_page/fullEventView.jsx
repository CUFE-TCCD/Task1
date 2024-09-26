import { IoMdClose } from "react-icons/io";
import PropTypes from 'prop-types';

export default function FullEventView({ setOpen, eventData }) {

    const formattedDate = new Date(eventData.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    console.log(eventData);
    return (
        <div className={`absolute bg-white w-full h-svh pb-6 z-40 transition-all duration-[800ms] ease-in-out pr-5`}>
            <div className="flex justify-between w-full">
                <p className="text-[26px] font-bold">{eventData.title}</p>
                <IoMdClose onClick={() => setOpen(null)} size={30} className="hover:cursor-pointer" />
            </div>


            <div className="flex-col gap-5 flex">
                <div className="flex gap-2 py-2 overflow-x-auto custom-scrollbar h-1/3 max-h-[250px] w-full mt-2">
                    {eventData.images.map((image, index) => (
                        <img className="max-w-[444px]" src={image} key={index} />
                    ))}
                </div>
                <p className="font-semibold text-xl flex gap-2">Date: <p className="font-normal text-lg">{formattedDate}</p></p>
                <p className="font-semibold text-xl flex gap-2">Description: <p className="font-normal text-lg">{eventData.shortDescription}</p></p>
                <div className="w-full">
                    <p className="font-semibold text-xl">Registrations:</p>
                        <table className="w-full h-fit border-2 border-black mt-2">
                            <thead>
                                <tr>
                                    <th className="border-2 border-black">Name</th>
                                    <th className="border-2 border-black">Email</th>
                                    <th className="border-2 border-black">Phone</th>
                                    <th className="border-2 border-black">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-black">John Doe</td>
                                    <td className="border border-black">djwaoidj</td>
                                    <td className="border border-black">123456789</td>
                                    <td className="border border-black">2024-09-16</td>
                                </tr>
                            </tbody>
                        </table>             
                </div>
            </div>


        </div>
    )

}

FullEventView.propTypes = {
    setOpen: PropTypes.func.isRequired,
    eventData: PropTypes.object.isRequired
}