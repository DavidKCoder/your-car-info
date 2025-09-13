import { useState } from "react";
import { useTranslation } from "react-i18next";
import { US, AM, RU } from "country-flag-icons/react/3x2";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const languages = [
        { code: "hy", label: "Հայ", flag: AM },
        { code: "en", label: "Eng", flag: US },
        { code: "ru", label: "Рус", flag: RU },
    ];

    const handleChange = (lang) => {
        i18n.changeLanguage(lang);
        setOpen(false);
    };

    const CurrentFlag = languages.find((l) => l.code === i18n.language)?.flag || US;

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setOpen(!open)}
                className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm hover:bg-gray-100 focus:outline-none"
            >
                <CurrentFlag className="w-5 h-5" />
                <span className="ml-2 font-medium">
                  {languages.find((l) => l.code === i18n.language)?.label || "EN"}
                </span>
                <svg
                    className="ml-2 -mr-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleChange(lang.code)}
                                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                                <lang.flag className="w-5 h-5" />
                                <span>{lang.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
