import { WeatherApp } from "./components";
import { ProviderWeather } from "./context/ProviderWeather";

export const App = () => {
    return (
        <ProviderWeather>
            <WeatherApp />
        </ProviderWeather>
    );
};
