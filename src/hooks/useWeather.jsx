import { useContext } from "react";
import ContextWeather from "../context/ProviderWeather";

const useWeather = () => {
    return useContext(ContextWeather);
};

export default useWeather;
