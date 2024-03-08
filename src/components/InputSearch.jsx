import { IoSearchSharp } from "react-icons/io5";
import ContextWeather from "../context/ProviderWeather";
import { useContext } from "react";

export const InputSearch = () => {
    const { handleShowForm } = useContext(ContextWeather);

    return (
        <>
            <div
                onClick={handleShowForm}
                className="w-[3.75rem] h-[2.5rem] md:w-[12rem] rounded-lg bg-gray-700 flex items-center justify-around px-2 cursor-pointer "
            >
                <div className="flex items-center gap-2">
                    <IoSearchSharp className="text-gray-500 text-xl" />
                    <p className="hidden md:block text-gray-500 text-sm">
                        Search city...
                    </p>
                </div>
            </div>
        </>
    );
};
