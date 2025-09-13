import { carSpecifications } from "../constants/specifications.jsx";
import { useTranslation } from "react-i18next";

export const CarSpecificationBlock = () => {
    const { t } = useTranslation();
    return (
        <>
            <div
                className="text-xl font-bold capitalize mb-0 border border-gray-400 bg-gray-100 p-2 rounded-lg">
                { t("carSpecifications")}
            </div>
            <div className="grid grid-cols-3 gap-2.5 mb-0 py-5">
                {carSpecifications.map((item, i) => (
                    <div
                        key={i}
                        className="h-28 border border-gray-400 bg-gray-100 p-2 rounded-lg flex flex-col
                                items-center justify-center hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white cursor-pointer"
                    >
                        <div className="text-2xl">{item.icon}</div>
                        <div className="text-center">
                            <div className="text-sm text-gray-500">{t(item.titleKey)}</div>
                            <div className="text-xl font-bold">{item.value}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};