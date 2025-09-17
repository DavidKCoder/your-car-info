import { useState } from "react";
import { signUp } from "../api/auth.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";

export const SignUpPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await signUp({ email, password });
            login(user);
            navigate("/"); // редирект после регистрации
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#f0f0f0]">
            <form onSubmit={handleSubmit} className="bg-[#0e0e0e] text-white p-6 rounded-xl shadow-md w-full max-w-sm">
                <div className="mb-4">
                    <div className="text-xl font-bold">Create an account</div>
                    <div className="text-xs">Join us for an exceptional experience.</div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                {error && <div className="text-red-500 mb-2">{error}</div>}
                <input
                    type="name"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="border p-2 w-full mb-3 rounded"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="border p-2 w-full mb-3 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="border p-2 w-full mb-3 rounded"
                />
                <button type="submit"
                        className="w-full bg-[#cca927] text-black py-2 rounded hover:bg-green-600">Sign Up
                </button>
            </form>

        </div>
    );
};
