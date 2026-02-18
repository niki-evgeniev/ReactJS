import { useState } from "react";

export default function Calculator() {
    let results = null;
    let [number, setNumber] = useState("");
    let firstNumber = "0";

    function handleNumber(digit) {
        setNumber(prev => prev + digit);
    }
    if (number > 0) {
        firstNumber = number + firstNumber;
        console.log(firstNumber);
    }

    return (
        <>
            <div className="calc">
                <div className="calc__screen">
                    <div className="calc__prev">{firstNumber}</div>
                    <div className="calc__curr">{results}</div>
                </div>
                <div className="calc__keys">
                    <button className="key key--wide key--func">AC</button>
                    <button className="key key--func">DEL</button>
                    <button className="key key--op">÷</button>

                    <button
                        onClick={() => handleNumber("7")} className="key">7</button>
                    <button className="key">8</button>
                    <button className="key">9</button>
                    <button className="key key--op">×</button>

                    <button className="key">4</button>
                    <button className="key">5</button>
                    <button className="key">6</button>
                    <button className="key key--op">−</button>

                    <button className="key">1</button>
                    <button className="key">2</button>
                    <button className="key">3</button>
                    <button className="key key--op">+</button>

                    <button className="key key--wide">0</button>
                    <button className="key">.</button>
                    <button className="key key--eq">=</button>
                </div>
            </div>
        </>
    )
}