import { GrMapLocation } from "react-icons/gr";
import LicensePlate from "./LicensePlate.jsx";
import carImg from "./assets/nissan-x-trail.jpg";
import { useEffect, useState } from "react";
import { getLocation } from "./api/getLocation.jsx";
import { ContactBlock } from "./components/ContactBlock.jsx";
import { CarSpecificationBlock } from "./components/CarSpecificationBlock.jsx";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./components/LanguageSwitcher.jsx";
import { LuSettings } from "react-icons/lu";


function App() {
    const { t } = useTranslation();

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
                                <div className="text-gray-400 text-[14px]">{t("yourLocation")}</div>
                                <div className="text-black text-sm">{location}</div>
                            </div>
                        </div>
                        {/* Language Switcher */}
                        <LanguageSwitcher />
                        <div className="fixed top-[15%] right-4 border border-gray-400 bg-gray-100 p-1 rounded-lg">
                            <LuSettings
                                size={25}
                                className="animate-spin cursor-pointer"
                                style={{ animationDuration: '5s' }} // slow spin
                            />
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
                    <CarSpecificationBlock />
                    {/* User info */}
                    <div className="pb-5">
                        <ContactBlock />
                    </div>
                </div>
                <div
                    className="font-bold mb-0 border p-2 rounded-lg bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300 text-center text-gray-500 text-xs">
                    {t("footerText")}
                </div>
            </div>
        </div>
    );
}

export default App;
