import { FormSearch, Header, Message, NowSearch } from ".";
import useWeather from "../hooks/useWeather";

export const WeatherApp = () => {
    const { weather } = useWeather();
    return (
        <div className="bg-gray-950 min-h-screen">
            <FormSearch />
            <Header />
            <main className="mx-4 flex justify-center">
                {weather?.name ? <NowSearch /> : <Message />}
            </main>
        </div>
    );
};
