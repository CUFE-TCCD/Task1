export default function EventTypePoster({ title }) {

    return (
        <div className="group relative flex-none w-full md:w-[33%] min-h-[270px] overflow-hidden rounded-lg z-10 bg-black">
            <div className="text-white font-bold text-[25px] w-full h-full text-center content-center absolute top-0">{title}</div>
            <div className="w-full h-1/2 p-3 translate-y-[200%] group-hover:translate-y-[120%] transition-transform duration-300 ease-in-out flex justify-center">
                <button className="bg-white font-semibold px-4 py-1 h-10 rounded-lg hover:bg-[#285D7C] hover:text-white transition-colors duration-200 ease-in-out">View all</button>
            </div>
        </div>
    )
}