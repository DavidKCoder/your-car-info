import { GrMapLocation } from "react-icons/gr";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoSpeedometerSharp } from "react-icons/io5";
import { PiEngineFill } from "react-icons/pi";
import { PiSpeedometerBold } from "react-icons/pi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiCarWheel } from "react-icons/gi";
import LicensePlate from "./LicensePlate.jsx";
import carImg from "./assets/nissan-x-trail.jpg";

const carSpecifications = [
    { id: 3, icon: <PiEngineFill />, title: "Engine", value: "2.0" },
    { id: 1, icon: <PiSpeedometerBold />, title: "Horsepower", value: "150 hp" },
    { id: 2, icon: <IoSpeedometerSharp />, title: "Max speed", value: "240 km/h" },
    { id: 0, icon: <BsFillFuelPumpFill />, title: "Petrol", value: "Fuel" },
    { id: 3, icon: <MdAirlineSeatReclineExtra />, title: "Places", value: "5 Seats" },
    { id: 3, icon: <GiCarWheel />, title: "Drivetrain", value: "4x4" },
];

function App() {
    return (
        <div className="flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg">
                <div className="p-4 pb-0 ">
                    <div className="flex justify-between items-center mb-0">
                        <div className="flex justify-between items-center gap-2.5">
                            <div className="border border-gray-400 bg-gray-100 p-3 rounded-lg">
                                <GrMapLocation />
                            </div>
                            <div>
                                <div className="text-gray-400 text-[14px]">Your location</div>
                                <div className="text-black text-sm">Yerevan, Nor Norq</div>
                            </div>
                        </div>
                        <div className="border border-gray-400 bg-gray-100 p-2 rounded-lg font-medium">
                            DK
                        </div>
                    </div>
                    <div
                        className="flex justify-between items-center mb-0 border border-gray-400 bg-gray-100 p-2 rounded-lg">
                        <div className="text-lg font-bold ">Nissan X-Trail T30</div>
                        <div className="text-lg font-bold">2006</div>
                    </div>
                    <div className="flex justify-center items-center mb-8">
                        <img src={carImg} alt="car" />
                    </div>
                    <div className="flex items-center justify-center">
                        <LicensePlate />
                    </div>
                    <div
                        className="text-xl font-bold capitalize mb-0 border border-gray-400 bg-gray-100 p-2 rounded-lg">
                        car specifications
                    </div>
                    <div className="grid grid-cols-3 gap-2.5 mb-0">
                        {carSpecifications.map((item, i) => (
                            <div
                                key={i}
                                className="h-28 border border-gray-400 bg-gray-100 p-2 rounded-lg flex flex-col items-center justify-center hover:bg-blue-500 hover:text-white"
                            >
                                <div className="text-2xl">{item.icon}</div>
                                <div className="text-center">
                                    <div className="text-sm text-gray-500">{item.title}</div>
                                    <div className="text-xl font-bold">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className="group flex justify-between items-center border border-gray-400 bg-gray-100 p-2 rounded-lg mb-2 hover:bg-blue-500 hover:text-white">
                        <div className="text-xl font-bold capitalize group-hover:text-white">Phone</div>
                        <a href="tel:+37455753272"
                           className="text-lg font-bold capitalize text-blue-400 group-hover:text-white hover:underline"
                        >
                            +374 55 753272
                        </a>
                    </div>
                    <div
                        className="group flex justify-between items-center border border-gray-400 bg-gray-100 p-2 rounded-lg mb-2 hover:bg-blue-500">
                        <div className="text-xl font-bold capitalize group-hover:text-white">Telegram</div>
                        <a
                            href="https://t.me/@David_Coder"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-bold text-blue-400 group-hover:text-white hover:underline"
                        >
                            @David_Coder
                        </a>
                    </div>
                    <div
                        className="group flex justify-between items-center mb-0 border border-gray-400 bg-gray-100 p-2 rounded-lg hover:bg-blue-500 cursor-pointer">
                        <div className="text-xl font-bold capitalize group-hover:text-white">Email</div>
                        <a
                            href="mailto:karapetyand91@gmail.com"
                            className="text-lg font-bold text-blue-400 group-hover:text-white hover:underline"
                        >
                            karapetyand91@gmail.com
                        </a>
                    </div>
                </div>
                <div
                    className="font-bold capitalize mb-0 border p-2 rounded-lg bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} David's App. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default App;
