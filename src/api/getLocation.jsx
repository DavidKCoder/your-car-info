
export const getLocation = () => {
    return new Promise((resolve) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        const res = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                        );
                        const data = await res.json();

                        resolve(
                            data?.address?.country + ", " + data?.address?.city||
                            data?.address?.town ||
                            data?.address?.village ||
                            "Unknown location"
                        );
                    } catch (error) {
                        console.error(error);
                        resolve("Unable to fetch location");
                    }
                },
                async () => {
                    // 🚨 Permission denied → fallback to IP-based geolocation
                    try {
                        const res = await fetch("https://ipapi.co/json/");
                        const data = await res.json();
                        resolve(`${data.city}, ${data.country_name}`);
                    } catch {
                        resolve("Permission denied");
                    }
                }
            );
        } else {
            // 🚨 Browser doesn’t support geolocation → fallback
            fetch("https://ipapi.co/json/")
                .then((res) => res.json())
                .then((data) => resolve(`${data.city}, ${data.country_name}`))
                .catch(() => resolve("Geolocation not supported"));
        }
    });
};