import { FaSearch } from "react-icons/fa";
import { useEffect, useRef } from "react";
import useWeather from "../hooks/useWeather";

export const FormSearch = () => {
    const {
        handleShowForm,
        showForm,
        handleSearch,
        searchCity,
        fetchWeather,
        weather,
    } = useWeather();
    const inputRef = useRef(null);

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && showForm) {
                handleShowForm();
                handleSearch({ target: { value: "" } });
            }
        });
        return () => {
            window.removeEventListener("keydown", () => {});
        };
    }, [showForm]);

    useEffect(() => {
        if (showForm) {
            inputRef.current.focus();
        }
    }, [showForm]);

    useEffect(() => {
        if (weather?.name) {
            if (showForm) handleShowForm();
            handleSearch({ target: { value: "" } });
        }
    }, [weather]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchCity.length === 0) return;
        fetchWeather(searchCity);
    };
    return (
        showForm && (
            <div className="absolute z-20 w-full h-full bg-zinc-950/50 flex justify-center items-start pt-[10%] px-10">
                <form onSubmit={handleSubmit}>
                    <div className="bg-gray-700 flex items-center p-2 rounded-lg w-[20rem] md:w-[30rem]">
                        <FaSearch className="text-3xl mr-2 text-gray-500" />
                        <input
                            ref={inputRef}
                            type="text"
                            className="w-full text-gray-400 mx-auto h-10 bg-transparent focus:outline-none "
                            placeholder="Search for a city"
                            onChange={handleSearch}
                            value={searchCity}
                        />
                        {searchCity.length === 0 ? (
                            <p className="block bg-gray-500 px-0.5 rounded">
                                esc
                            </p>
                        ) : (
                            <button
                                type="submit"
                                className="bg-blue-700 text-gray-200 px-2 py-2 rounded"
                            >
                                Search
                            </button>
                        )}
                    </div>
                </form>
            </div>
        )
    );
};
