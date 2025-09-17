import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./components/HomePage/index.jsx";
import { SettingsPage } from "./components/SettingsPage/index.jsx";
import { CarPage } from "./components/CarPage.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<CarPage />} />
            <Route
                path="/settings"
                element={
                    <ProtectedRoute>
                        <SettingsPage />
                    </ProtectedRoute>
                }
            />
            <Route path="/car/:id" element={<CarPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default App;
