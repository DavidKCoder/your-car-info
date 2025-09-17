import carImg from "../assets/nissan-x-trail.jpg";

export const getCarById = async (id) => {
    // Здесь можно добавить несколько фиктивных машин
    const mockCars = [
        {
            id: "dv669",
            model: "Nissan X-Trail",
            year: 2006,
            image: carImg,
            plate: "69-DV-669",
            specs: {
                engine: "2.0L",
                fuel: "Petrol",
                mileage: 120000,
            },
            contactsAvailable: true,
            contacts: {
                phone: "+374XXXXXXXX",
                email: "owner@mail.com",
                telegram: "@owner",
            },
        },
        {
            id: "xyz789",
            model: "Toyota Corolla",
            year: 2019,
            image: "/toyota-corolla.jpg",
            plate: "11-BBB-11",
            specs: {
                engine: "1.8L",
                fuel: "Petrol",
                mileage: 90000,
            },
            contactsAvailable: false,
            contacts: {},
        },
    ];

    // имитация запроса с задержкой
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const car = mockCars.find((c) => c.id === id);
            if (car) resolve(car);
            else reject(new Error("Car not found"));
        }, 500); // 0.5 сек задержка
    });
};
