import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import LicensePlate from "../LicensePlate.jsx";
import { CarSpecificationBlock } from "./CarSpecificationBlock.jsx";
import { ContactBlock } from "./ContactBlock.jsx";
import { getCarById } from "../api/getCarById.jsx";
import { GiCarKey } from "react-icons/gi";
import { LanguageSwitcher } from "./LanguageSwitcher.jsx";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { SiMinutemailer } from "react-icons/si";


import { useTranslation } from "react-i18next";
import { reportCar } from "../api/reportCar.jsx";
import SettingsIcon from "./HomePage/SettingIcon.jsx";
import { useAuth } from "../hooks/useAuth.jsx";
import { CarContext } from "../context/CarContext.jsx";
import { Loading } from "./Loading.jsx"; // твой API fetch

export const CarPage = () => {
    const { t } = useTranslation();
    const { carImage } = useContext(CarContext);

    const { user } = useAuth();
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [error, setError] = useState("");
    const [reportSent, setReportSent] = useState(false);

    useEffect(() => {
        // Проверяем localStorage, отправлял ли уже жалобу
        const sentReports = JSON.parse(localStorage.getItem("sentReports") || "[]");
        if (sentReports.includes(id)) {
            setReportSent(true);
        }

        const fetchCar = async () => {
            try {
                const data = await getCarById("dv669");
                setCar(data);
            } catch {
                setError("Автомобиль не найден.");
            }
        };
        fetchCar();
    }, [id]);

    const handleReport = async () => {
        try {
            // Мок-отправка жалобы
            await reportCar(car.id);

            // Сохраняем факт отправки в localStorage
            const sentReports = JSON.parse(localStorage.getItem("sentReports") || "[]");
            localStorage.setItem("sentReports", JSON.stringify([...sentReports, car.id]));

            setReportSent(true);
            alert("Владелец получил уведомление!");
        } catch (err) {
            console.error(err);
            alert("Ошибка отправки жалобы");
        }
    };

    if (error) return <div className="p-5 text-center">{error}</div>;
    if (!car) return <Loading />;

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

                        <LanguageSwitcher />
                        {/*{user && <SettingsIcon />}*/}
                    </div>

                    {/* Car Model */}
                    <div
                        className="flex justify-between items-center mb-0 border border-gray-400 bg-gray-100 p-2 rounded-lg">
                        <div className="text-lg font-bold ">{car.model}</div>
                        <div className="text-lg font-bold">{car.year}</div>
                    </div>
                    {/* Car Image */}
                    <div className="flex justify-center items-center py-5">
                        <img src={carImage} alt="car" className=" w-full max-h-80"/>
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
                {/*{!reportSent ?*/}
                {/*    <div className="flex justify-center pb-5">*/}
                {/*        <button*/}
                {/*            onClick={handleReport}*/}
                {/*            className="flex justify-between items-center gap-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 active:bg-red-600 transition"*/}
                {/*        >*/}
                {/*            <HiOutlineBellAlert size={20} /> {t("carIsBlockingMe")}*/}
                {/*        </button>*/}
                {/*    </div> :*/}
                {/*    <div className="flex justify-center pb-5">*/}
                {/*        <button*/}
                {/*            onClick={handleReport}*/}
                {/*            className="flex justify-between items-center gap-3 bg-green-600 text-white px-4 py-2 rounded transition"*/}
                {/*        >*/}
                {/*            <SiMinutemailer size={20} /> {t("sent")}*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*}*/}
                <div
                    className="font-bold mb-0 border p-2 rounded-lg bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300 text-center text-gray-500 text-xs">
                    {t("footerText")}
                </div>
            </div>
        </div>
    );
};
