export const Message = ({ message = "No city to show" }) => {
    return (
        <div className="bg-gray-600 rounded-lg w-full md:w-[28.125rem] px-6 py-4">
            <p className="text-2xl text-gray-400 text-center">{message}</p>
        </div>
    );
};
