import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getCarById } from "../../api/getCarById.jsx";
import { Link, useParams } from "react-router-dom";

export const HomePage = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const data = await getCarById("abc123");
                setCar(data);
            } catch {
                setError("Автомобиль не найден");
            }
        };
        fetchCar();
    }, []);

    if (error) return <div className="p-5 text-center">{error}</div>;
    if (!car) return <div className="p-5 text-center">Loading...</div>;

    return (
        <div className="flex items-center justify-center bg-gray-50 my-2">
            <div className="w-11/12 max-w-lg bg-white shadow-md rounded-lg">
                <div className="bg-white shadow rounded p-4">
                    <img src={car.image} alt={car.model} className="w-full object-cover rounded" />
                    <h3 className="font-bold text-lg">{car.model}</h3>
                    <p>{car.year}</p>
                    <Link to={`/car/${car.id}`} className="text-blue-500 mt-2 block">Подробнее</Link>
                </div>
            </div>
        </div>
    );
};