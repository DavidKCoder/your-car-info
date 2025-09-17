import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { CarContext } from "../context/CarContext.jsx";

export const CarSpecificationBlock = () => {
    const { t } = useTranslation();
    const { specs: carSpecifications } = useContext(CarContext);

    return (
        <>
            <div
                className="text-xl font-bold capitalize mb-0 border border-gray-400 bg-gray-100 p-2 rounded-lg">
                {t("carSpecifications")}
            </div>
            <div className="grid grid-cols-3 gap-2.5 mb-0 py-5">
                {carSpecifications.map((item, i) => (
                    <div
                        key={i}
                        className="group h-28 border border-gray-400 bg-gray-100 p-2 rounded-lg flex flex-col
                                items-center justify-center hover:bg-[#9C078F] active:bg-[#9C078F] hover:text-white active:text-white cursor-pointer"
                    >
                        <div className="text-2xl">{item.icon}</div>
                        <div className="text-center">
                            <div className="text-sm text-gray-500 group-hover:text-white group-active:text-white">{t(item.title)}</div>
                            <div className="text-xl font-bold">{item.value} {item.subValue}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};