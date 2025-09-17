import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LicensePlate from "../LicensePlate.jsx";
import { CarSpecificationBlock } from "./CarSpecificationBlock.jsx";
import { ContactBlock } from "./ContactBlock.jsx";
import { getCarById } from "../api/getCarById.jsx";
import { GiCarKey } from "react-icons/gi";
import { LanguageSwitcher } from "./LanguageSwitcher.jsx";
import SettingsIcon from "./HomePage/SettingIcon.jsx";

import { useTranslation } from "react-i18next"; // твой API fetch

export const CarPage = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [isBlocked, setIsBlocked] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const data = await getCarById("dv669");
                setCar(data);
            } catch {
                setError("The car was not found.");
            }
        };
        fetchCar();
    }, [id]);

    const handleReport = async () => {
        try {
            // Здесь можно сделать POST-запрос на сервер
            await fetch(`/api/report/${car.id}`, {
                method: "POST",
                body: JSON.stringify({ message: "Машина мешает" }),
                headers: { "Content-Type": "application/json" },
            });

            alert("Владелец получил уведомление!");
        } catch (err) {
            console.error(err);
            alert("Ошибка отправки сообщения");
        }
    };

    if (error) return <div className="p-5 text-center">{error}</div>;
    if (!car) return <div className="p-5 text-center">Loading...</div>;

    return (
        <div className="flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg">
                <div className="p-4 pb-0">
                    {/* Header */}
                    <div className="flex justify-between items-center pb-5">
                        <div className="flex justify-between items-center gap-2.5">
                            <div className="border border-gray-400 bg-gray-100 p-3 rounded-lg">
                                <GiCarKey size={25} className="text-black" />
                            </div>
                            <div>
                                <div className="text-gray-400 text-[14px]">{t("carType")}</div>
                                <div className="text-black text-sm">{car.type || "SUV"}</div>
                            </div>
                        </div>

                        {/* Language Switcher */}
                        <LanguageSwitcher />
                        {/*<SettingsIcon />*/}
                    </div>

                    {/* Car Model */}
                    <div
                        className="flex justify-between items-center mb-0 border border-gray-400 bg-gray-100 p-2 rounded-lg">
                        <div className="text-lg font-bold ">{car.model}</div>
                        <div className="text-lg font-bold">{car.year}</div>
                    </div>
                    {/* Car Image */}
                    <div className="flex justify-center items-center py-5">
                        <img src={car.image} alt="car" />
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
                {/*<div className="flex justify-center mt-4">*/}
                {/*    <button*/}
                {/*        onClick={handleReport}*/}
                {/*        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"*/}
                {/*    >*/}
                {/*        {t("carIsBlockingMe")}*/}
                {/*    </button>*/}
                {/*</div>*/}

                <div
                    className="font-bold mb-0 border p-2 rounded-lg bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300 text-center text-gray-500 text-xs">
                    {t("footerText")}
                </div>
            </div>
        </div>
    );
};
