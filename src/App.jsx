import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage/index.jsx";
import { SettingsPage } from "./components/SettingsPage/index.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/settings" element={<SettingsPage />} />
        </Routes>
    );
}

export default App;
