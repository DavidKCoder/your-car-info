import { GrMapLocation } from "react-icons/gr";
import LicensePlate from "./LicensePlate.jsx";
import carImg from "./assets/nissan-x-trail.jpg";
import { carSpecifications, userInfo } from "./constants/specifications.jsx";
import { useEffect, useState } from "react";
import { getLocation } from "./api/getLocation.jsx";

function App() {
    const [location, setLocation] = useState("Fetching location...");

    useEffect(() => {
        const fetchLocation = async () => {
            const currentLocation = await getLocation();
            setLocation(currentLocation);
        };
        fetchLocation();
    }, []);

    return (
        <div className="flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg">
                <div className="p-4 pb-0">
                    {/* Header */}
                    <div className="flex justify-between items-center pb-5">
                        <div className="flex justify-between items-center gap-2.5">
                            <div className="border border-gray-400 bg-gray-100 p-3 rounded-lg">
                                <GrMapLocation />
                            </div>
                            <div>
                                <div className="text-gray-400 text-[14px]">Your location</div>
                                <div className="text-black text-sm">{location}</div>
                            </div>
                        </div>
                        <div className="border border-gray-400 bg-gray-100 p-2 rounded-lg font-medium">
                            DK
                        </div>
                    </div>
                    {/* Car Model */}
                    <div
                        className="flex justify-between items-center mb-0 border border-gray-400 bg-gray-100 p-2 rounded-lg">
                        <div className="text-lg font-bold ">Nissan X-Trail T30</div>
                        <div className="text-lg font-bold">2006</div>
                    </div>
                    {/* Car Image */}
                    <div className="flex justify-center items-center py-5">
                        <img src={carImg} alt="car" />
                    </div>
                    {/* Car number */}
                    <div className="flex items-center justify-center">
                        <LicensePlate />
                    </div>
                    {/* Car specifications */}
                    <div
                        className="text-xl font-bold capitalize mb-0 border border-gray-400 bg-gray-100 p-2 rounded-lg hover:bg-amber-600 active:bg-amber-600">
                        car specifications
                    </div>
                    <div className="grid grid-cols-3 gap-2.5 mb-0 py-5">
                        {carSpecifications.map((item, i) => (
                            <div
                                key={i}
                                className="h-28 border border-gray-400 bg-gray-100 p-2 rounded-lg flex flex-col
                                items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer"
                            >
                                <div className="text-2xl">{item.icon}</div>
                                <div className="text-center">
                                    <div className="text-sm text-gray-500">{item.title}</div>
                                    <div className="text-xl font-bold">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* User info */}
                    <div className="pb-5">
                        {userInfo.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className="group flex justify-between items-center border border-gray-400 bg-gray-100 p-2 rounded-lg mb-2 hover:bg-blue-500 hover:text-white">
                                    <div
                                        className="text-xl font-bold capitalize group-hover:text-white">{item.label}</div>
                                    <a href={item.href}
                                       className="text-lg font-bold text-blue-400 group-hover:text-white hover:underline"
                                    >
                                        {item.title}
                                    </a>
                                </div>
                            );
                        })}
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
