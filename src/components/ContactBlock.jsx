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
                                    bg-gray-100 p-2 rounded-lg mb-2 hover:bg-[#9C078F] active:bg-[#9C078F] hover:text-white active:text-white"
                >
                    <div
                        className="text-lg font-bold capitalize group-hover:text-white group-active:text-white">
                        {t(item.label)}
                    </div>
                    <a href={item.href}
                       className="text-sm font-bold text-[#9C078F] group-hover:text-white group-active:text-white hover:underline active:underline"
                    >
                        {item.title}
                    </a>
                </div>
            );
        })
    );
};

//*import { useContext } from "react";
// import { CarContext } from "../context/CarContext.jsx";
// import { useTranslation } from "react-i18next";
//
// export const ContactBlock = () => {
//     const { t } = useTranslation();
//     const { contacts } = useContext(CarContext);
//
//     const contactList = [
//         { label: "phone", title: contacts.phone, href: `tel:${contacts.phone}` },
//         { label: "email", title: contacts.email, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${contacts.email}` },
//         { label: "telegram", title: contacts.telegram, href: contacts.telegram },
//         { label: "instagram", title: contacts.instagram, href: contacts.instagram },
//     ];
//
//     return (
//         contactList.map((item, i) => (
//             <div
//                 key={i}
//                 className="group flex justify-between items-center border border-gray-400
//                    bg-gray-100 p-2 rounded-lg mb-2 hover:bg-[#9C078F] active:bg-[#9C078F] hover:text-white active:text-white"
//             >
//                 <div className="text-lg font-bold capitalize group-hover:text-white group-active:text-white">
//                     {t(item.label)}
//                 </div>
//                 <a
//                     href={item.href}
//                     className="text-sm font-bold text-blue-400 group-hover:text-white group-active:text-white hover:underline active:underline"
//                 >
//                     {item.title}
//                 </a>
//             </div>
//         ))
//     );
// };