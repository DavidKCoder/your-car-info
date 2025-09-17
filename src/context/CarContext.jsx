import { createContext, useState, useEffect } from "react";
import { PiEngineFill, PiSpeedometerBold } from "react-icons/pi";
import { IoSpeedometerSharp } from "react-icons/io5";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiCarWheel } from "react-icons/gi";
import carImg from "../assets/nissan-x-trail.jpg"

export const CarContext = createContext(null);

export const CarProvider = ({ children }) => {
    const LOCAL_STORAGE_KEY = "carInfo";

    const ICON_MAP = {
        Engine: <PiEngineFill />,
        Horsepower: <PiSpeedometerBold />,
        "Max speed": <IoSpeedometerSharp />,
        Fuel: <BsFillFuelPumpFill />,
        Places: <MdAirlineSeatReclineExtra />,
        Drivetrain: <GiCarWheel />,
    };

    const defaultSpecs = [
        { id: 1, title: "Engine", value: "2.0", subValue: "" },
        { id: 2, title: "Horsepower", value: "150", subValue: "hp" },
        { id: 3, title: "Max speed", value: "240", subValue: "km/h" },
        { id: 4, title: "Fuel", value: "Petrol", subValue: "" },
        { id: 5, title: "Places", value: "5", subValue: "Seats" },
        { id: 6, title: "Drivetrain", value: "4x4", subValue: "" },
    ];

    const defaultLicensePlate = { left: "69", middle: "DV", right: "669" };

    const [model, setModel] = useState("Nissan X-Trail T30");
    const [year, setYear] = useState("2006");
    const [specs, setSpecs] = useState(defaultSpecs.map(s => ({ ...s, icon: ICON_MAP[s.title] })));
    const [licensePlate, setLicensePlate] = useState(defaultLicensePlate);
    const [carImage, setCarImage] = useState(carImg);
    const [contacts, setContacts] = useState({
        phone: "+374000000",
        email: "example@mail.com",
        telegram: "@myTelegram",
        instagram: "@myInstagram",
    });

    useEffect(() => {
        const savedCar = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedCar) {
            const parsed = JSON.parse(savedCar);

            const specsWithIcons = parsed.specs.map((s) => ({
                ...s,
                icon: ICON_MAP[s.title],
            }));

            setModel(parsed.model);
            setYear(parsed.year);
            setSpecs(specsWithIcons);
            setLicensePlate(parsed.licensePlate || defaultLicensePlate);
        }
    }, []);

    useEffect(() => {
        const specsToSave = specs.map(({ id, title, value, subValue }) => ({
            id, title, value, subValue,
        }));

        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify({ model, year, specs: specsToSave, licensePlate }),
        );
    }, [model, year, specs, licensePlate]);

    return (
        <CarContext.Provider
            value={{
                model,
                setModel,
                year,
                setYear,
                specs,
                setSpecs,
                licensePlate,
                setLicensePlate,
                carImage,
                setCarImage,
                contacts,
                setContacts,
            }}
        >
            {children}
        </CarContext.Provider>
    );
};
