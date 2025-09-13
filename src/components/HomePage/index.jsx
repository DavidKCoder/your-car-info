import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { getLocation } from "../../api/getLocation.jsx";
import { GrMapLocation } from "react-icons/gr";
import { LanguageSwitcher } from "../LanguageSwitcher.jsx";
import carImg from "../../assets/nissan-x-trail.jpg";
import LicensePlate from "../../LicensePlate.jsx";
import { CarSpecificationBlock } from "../CarSpecificationBlock.jsx";
import { ContactBlock } from "../ContactBlock.jsx";
import SettingsIcon from "./SettingIcon.jsx";
import { CarContext } from "../../context/CarContext.jsx";

export const HomePage = () => {
    const { t } = useTranslation();
    const { model, year } = useContext(CarContext);

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
                        <SettingsIcon />
                    </div>
                    {/* Car Model */}
                    <div
                        className="flex justify-between items-center mb-0 border border-gray-400 bg-gray-100 p-2 rounded-lg">
                        <div className="text-lg font-bold ">{model}</div>
                        <div className="text-lg font-bold">{year}</div>
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

};