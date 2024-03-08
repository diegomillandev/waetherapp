import { createContext, useState } from "react";
import axios from "axios";

const ContextWeather = createContext();

const ProviderWeather = ({ children }) => {
    const [showForm, setShowForm] = useState(false);
    const [searchCity, setSearchCity] = useState("");
    const [weather, setWeather] = useState({});

    const handleShowForm = () => {
        setShowForm(!showForm);
    };

    const handleSearch = (e) => {
        setSearchCity(e.target.value);
    };

    const fetchWeather = async (city) => {
        try {
            const appId = import.meta.env.VITE_API_KEY;
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${appId}`;
            const { data } = await axios.get(url);
            const { lat, lon } = data[0];
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
            const { data: weather } = await axios.get(urlWeather);
            setWeather(weather);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ContextWeather.Provider
            value={{
                handleShowForm,
                showForm,
                handleSearch,
                searchCity,
                fetchWeather,
                weather,
                setWeather,
            }}
        >
            {children}
        </ContextWeather.Provider>
    );
};

export { ProviderWeather };
export default ContextWeather;
