// src/api/auth.jsx
const usersKey = "mockUsers";

export const signUp = async ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem(usersKey) || "[]");
    if (users.find(u => u.email === email)) {
        throw new Error("Пользователь уже существует");
    }
    const newUser = { email, password, id: Date.now() };
    localStorage.setItem(usersKey, JSON.stringify([...users, newUser]));
    return newUser;
};

export const loginApi = async ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem(usersKey) || "[]");
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) throw new Error("Неверный email или пароль");
    return user;
};
