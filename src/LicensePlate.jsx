function LicensePlate() {
    return (
        <div className="flex items-center w-full max-w-64 border-2 border-black rounded-md p-2 bg-white mb-5">
            <div className="flex flex-col items-center justify-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1280px-Flag_of_Armenia.svg.png"
                    alt="Armenian Flag"
                    className="w-6 h-4"
                />
                <span className="text-sm font-bold">AM</span>
            </div>
            {/* Middle vertical strip */}
            <div className="w-1 h-10 bg-gray-300 mx-2"></div>
            {/* Main plate numbers */}
            <div className="flex space-x-1 items-center text-black font-bold text-4xl">
                <span>69</span>
                <span>DV</span>
                <span>669</span>
            </div>
        </div>
    );
}

export default LicensePlate;
