import { useNavigate } from "react-router-dom";
import { LuSettings } from "react-icons/lu";

export default function SettingsIcon() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/settings");
    };

    return (
        <div className="fixed top-[20%] right-4 border border-gray-400 bg-gray-100 p-1 rounded-lg">
            <LuSettings
                size={25}
                className="animate-spin cursor-pointer"
                style={{ animationDuration: "5s" }}
                onClick={handleClick}
            />
        </div>
    );
}
