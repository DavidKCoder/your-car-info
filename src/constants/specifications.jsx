import { PiEngineFill, PiSpeedometerBold } from "react-icons/pi";
import { IoSpeedometerSharp } from "react-icons/io5";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiCarWheel } from "react-icons/gi";

export const carSpecifications = [
    { id: 1, icon: <PiEngineFill />, title: "Engine", value: "2.0" },
    { id: 2, icon: <PiSpeedometerBold />, title: "Horsepower", value: "150 hp" },
    { id: 3, icon: <IoSpeedometerSharp />, title: "Max speed", value: "240 km/h" },
    { id: 4, icon: <BsFillFuelPumpFill />, title: "Petrol", value: "Fuel" },
    { id: 5, icon: <MdAirlineSeatReclineExtra />, title: "Places", value: "5 Seats" },
    { id: 6, icon: <GiCarWheel />, title: "Drivetrain", value: "4x4" },
];

export const userInfo = [
    {}
]