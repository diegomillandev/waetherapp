import axios from "axios";
import { TbCurrentLocation } from "react-icons/tb";
import useWeather from "../hooks/useWeather";

export const CurrentLocation = () => {
    const { setWeather } = useWeather();

    const handleCurrentLocation = (e) => {
        e.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                fetchWeather(latitude, longitude);
            });
        }
    };

    const fetchWeather = async (lat, lon) => {
        try {
            const appId = import.meta.env.VITE_API_KEY;
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
            const { data: weather } = await axios.get(urlWeather);
            console.log(weather);
            setWeather(weather);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="md:flex-1 flex justify-end ps-4">
            <div
                onClick={handleCurrentLocation}
                className="bg-blue-700 w-[2.5rem cursor-pointer md:w-[10rem] h-[2.5rem] rounded-lg flex gap-1 justify-center items-center"
            >
                <TbCurrentLocation className="text-white text-xl" />
                <p className="hidden md:block text-white text-sm font-extralight">
                    Current location
                </p>
            </div>
        </div>
    );
};
