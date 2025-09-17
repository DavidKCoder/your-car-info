// src/api/reportCar.jsx
export const reportCar = async (carId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Пользователь пожаловался на машину ${carId}`);
            resolve({ success: true });
        }, 500); // 0.5 сек задержка
    });
};
