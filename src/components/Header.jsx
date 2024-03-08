import { logo } from "../assets";
import { CurrentLocation, InputSearch } from ".";

export const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4 md:py-6">
            <div className="flex-1">
                <img
                    src={logo}
                    alt="logo app"
                    className="block w-[160px] md:w-[200px]"
                />
            </div>
            <InputSearch />
            <CurrentLocation />
        </header>
    );
};
