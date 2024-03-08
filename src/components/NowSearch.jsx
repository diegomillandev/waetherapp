import { humidity, ow, wind } from "../assets";
import useWeather from "../hooks/useWeather";
import dayjs from "dayjs";

export const NowSearch = () => {
    const { weather } = useWeather();

    const temp = (weather.main.temp - 273.15).toFixed(0);
    const humidityWeather = weather.main.humidity;
    const name = weather.name;
    const icon = weather.weather[0].icon;
    const speed = weather.wind.speed;

    const description = weather.weather[0].description;

    return (
        <div className="bg-blue-600 rounded-lg w-full md:w-[28.125rem] px-8 py-6">
            <div className="flex flex-col items-center">
                <img
                    src={`/assets/weather_icons/${icon}.png`}
                    alt="icons of weather"
                    className="w-28 h-28"
                />
                <div className=" flex justify-center gap-10 items-center">
                    <p className="text-8xl relative text-gray-100">
                        <span>{temp}</span>
                        <span className="text-4xl absolute text-gray-400 font-extralight">
                            °C
                        </span>
                    </p>
                </div>
                <p className="text-gray-700 text-sm font-light text-center capitalize">
                    {description}
                </p>
                <p className="mt-4 text-gray-300 text-4xl">{name}</p>
            </div>
            <hr className="bg-gray-300 border-0 h-0.5 rounded-full my-4" />
            <div className="flex justify-around gap-2">
                <div className="flex gap-2 items-center">
                    <img src={humidity} alt="" className="w-7 h-7" />
                    <div className="">
                        <p className="text-gray-300 text-xl">
                            {humidityWeather}%
                        </p>
                        <p className="text-gray-400 text-sm text-center -mt-1">
                            Humidity
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={wind} alt="" className="w-8 h-8" />
                    <div className="">
                        <p className="text-gray-300 text-xl ">{speed} km/h</p>
                        <p className="text-gray-400 text-sm text-left -mt-1">
                            Wind Speed
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <p className="text-gray-400 text-xs font-light">
                    {dayjs().format("dddd, MMMM D, YYYY")}
                </p>
                <a href="https://openweathermap.org/api" target="_blank">
                    <img src={ow} className="w-24" />
                </a>
            </div>
        </div>
    );
};
