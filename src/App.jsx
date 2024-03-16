import React, { useState } from "react";

const App = () => {
    const [color, setColor] = useState();

    const changeColor = (color) => {
        if (color === "blue") {
            setColor("blue");
        } else if (color === "red") {
            setColor("red");
        } else if (color === "green") {
            setColor("green");
        }
    };
    return (
        <div
            className="relative w-full h-screen flex justify-center items-end duration-200"
            style={{ backgroundColor: color }}
        >
            <div className="absolute bg-gray-200 flex gap-3 p-3 rounded-full outline-none bottom-20">
                <p
                    className="py-2 px-5 rounded-full bg-blue-600 outline-none cursor-pointer"
                    onClick={() => changeColor("blue")}
                >
                    Blue
                </p>
                <p
                    className="py-2 px-5 rounded-full bg-red-600 outline-none cursor-pointer"
                    onClick={() => changeColor("red")}
                >
                    Red
                </p>
                <p
                    className="py-2 px-5 rounded-full bg-green-600 outline-none cursor-pointer"
                    onClick={() => changeColor("green")}
                >
                    Green
                </p>
            </div>
        </div>
    );
};

export default App;
