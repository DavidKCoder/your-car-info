import { useContext, useState, useEffect } from "react";
import { CarContext } from "../../context/CarContext.jsx";
import { useNavigate } from "react-router-dom";

export const SettingsPage = () => {
    const navigate = useNavigate();
    const { model, setModel, year, setYear, specs, setSpecs, licensePlate, setLicensePlate } = useContext(CarContext);

    const [tempModel, setTempModel] = useState(model);
    const [tempYear, setTempYear] = useState(year);
    const [tempSpecs, setTempSpecs] = useState(specs);
    const [tempPlate, setTempPlate] = useState(licensePlate);
    const [success, setSuccess] = useState(false); // success message state

    useEffect(() => {
        setTempModel(model);
        setTempYear(year);
        setTempSpecs(specs);
        setTempPlate(licensePlate);
    }, [model, year, specs, licensePlate]);

    const handleSpecChange = (id, newValue) => {
        setTempSpecs(prev =>
            prev.map(item => (item.id === id ? { ...item, value: newValue } : item)),
        );
    };

    const handlePlateChange = (field, value) => {
        if (field === "middle" && /[^0-9]/.test(value)) return;
        if ((field === "left" || field === "right") && /[^a-zA-Z]/.test(value)) return;

        setTempPlate(prev => ({ ...prev, [field]: value.toUpperCase() }));
    };

    const handleSave = () => {
        setModel(tempModel);
        setYear(tempYear);
        setSpecs(tempSpecs);
        setLicensePlate(tempPlate);

        // Show success message
        setSuccess(true);

        // Navigate after 1.5 seconds
        setTimeout(() => {
            navigate("/");
        }, 1500);
    };

    const handleCancel = () => {
        setTempModel(model);
        setTempYear(year);
        setTempSpecs(specs);
        setTempPlate(licensePlate);
        navigate("/");
    };

    return (
        <div className="p-6 max-w-2xl mx-auto w-full">
            <h1 className="text-2xl font-bold mb-6">Edit Car Info</h1>

            {/* Model & Year */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block text-gray-700 mb-1">Model:</label>
                    <input
                        type="text"
                        value={tempModel}
                        onChange={e => setTempModel(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1">Year:</label>
                    <input
                        type="text"
                        value={tempYear}
                        onChange={e => setTempYear(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>
            </div>

            {/* Specifications */}
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="grid grid-cols-3 gap-4">
                {tempSpecs.map(item => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center border border-gray-300 rounded-md p-3 bg-gray-100"
                    >
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <div className="text-gray-600 text-sm mb-1">{item.title}</div>
                        <input
                            type="text"
                            value={item.value}
                            onChange={e => handleSpecChange(item.id, e.target.value)}
                            className="border border-gray-300 rounded-md p-1 w-full text-center"
                        />
                    </div>
                ))}
            </div>

            {/* License Plate */}
            <h2 className="text-xl font-semibold mb-4 mt-6">License Plate</h2>
            <div className="flex gap-2 items-center mb-6 font-bold text-xl">
                <input
                    type="text"
                    value={tempPlate.left}
                    onChange={e => handlePlateChange("left", e.target.value)}
                    maxLength={2}
                    className="border border-gray-300 p-2 rounded-md w-16 text-center uppercase"
                />
                <input
                    type="text"
                    value={tempPlate.middle}
                    onChange={e => handlePlateChange("middle", e.target.value)}
                    maxLength={2}
                    className="border border-gray-300 p-2 rounded-md w-16 text-center"
                />
                <input
                    type="text"
                    value={tempPlate.right}
                    onChange={e => handlePlateChange("right", e.target.value)}
                    maxLength={3}
                    className="border border-gray-300 p-2 rounded-md w-16 text-center uppercase"
                />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
                <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
                >
                    Save
                </button>
                <button
                    onClick={handleCancel}
                    className="px-6 py-2 bg-gray-400 text-white font-bold rounded-md hover:bg-gray-500"
                >
                    Cancel
                </button>
            </div>

            {/* Success message */}
            {success && (
                <div
                    className="fixed top-0 left-0 w-full h-12 flex items-center justify-center bg-green-500 text-white font-bold p-2">
                    Car info saved successfully!
                </div>
            )}
        </div>
    );
};
