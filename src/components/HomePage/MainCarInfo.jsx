import { useContext } from "react";
import { CarContext } from "../../context/CarContext.jsx";

export default function MainCarInfo() {
    const { model, year, specs } = useContext(CarContext);

    return (
        <div>
            <h2>{model} - {year}</h2>
            <div className="grid grid-cols-3 gap-2">
                {specs.map((item) => (
                    <div key={item.id} className="flex flex-col items-center border p-2 rounded">
                        <div className="text-2xl">{item.icon}</div>
                        <div>{item.title}</div>
                        <div>{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
