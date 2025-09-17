import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { CarProvider } from "./context/CarContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <I18nextProvider i18n={i18n}>
            <AuthProvider>
                <BrowserRouter>
                    <CarProvider>
                        <App />
                    </CarProvider>
                </BrowserRouter>
            </AuthProvider>
        </I18nextProvider>
    </StrictMode>,
);
