import { userInfo } from "../constants/specifications.jsx";
import { useTranslation } from "react-i18next";

export const ContactBlock = () => {
    const { t } = useTranslation();

    return (
        userInfo.map((item, i) => {
            return (
                <div
                    key={i}
                    className="group flex justify-between items-center border border-gray-400
                                    bg-gray-100 p-2 rounded-lg mb-2 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
                >
                    <div
                        className="text-lg font-bold capitalize group-hover:text-white group-active:text-white">
                        {t(item.label)}
                    </div>
                    <a href={item.href}
                       className="text-sm font-bold text-blue-400 group-hover:text-white group-active:text-white hover:underline active:underline"
                    >
                        {item.title}
                    </a>
                </div>
            );
        })
    );
};