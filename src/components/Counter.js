// Counter.js
import React, { useState } from "react";
import '../style/Counter.css'; // Ensure the path to the CSS file is correct


export default function Counter(props) {
    const [count, setCount] = useState(0);

    const [isLoggedin, setIsLoggedIn] = useState(true);
    const [x, setx] = useState(5);


    const handleDecrement2 = () => {
        console.log("Button was clicked")
        if(count > props.minValue) {
            setCount(count-1)
        }
    }

    const ItemList = () => {
        if(count>0 && count<=5) {
            return(
                <div>
                <ul>
                    <li>Item1</li>
                    <li>Item2</li>
                    <li>Item3</li>
                    <li>Item4</li>
                    <li>Item5</li>
                </ul>

                </div>

            )
        } else if(count>5) {
            return(
                <div>
                <ul>
                    <li>Greater than 5 list</li>
                </ul>

                </div>

            )
        } else {
            return null;
            // return undefined;
        }
    }


    const loggedInView = () => {

        // if(isLoggedin) {
            return(
                <div className="counter-container">
                <p>Counter min Value: {props.minValue}</p>
    
                <div className="counter-display">Clicked Times: {count}</div>
                <div className="button-container">
                    <button onClick={handleDecrement2} className="counter-button">-</button>
                    <button onClick={() => setCount(count + 1)} className="counter-button">+</button>
                </div>
    
                {ItemList()}
            </div>
        );
        // }

    }




    return (

        <div className="counter-container">

            <p>Counter min Value: {props.minValue}</p>

            <div className="counter-display">Clicked Times: {count}</div>
            <div className="button-container">
                <button onClick={handleDecrement2} className="counter-button">-</button>
                <button onClick={() => setCount(count + 1)} className="counter-button">+</button>
            </div>

            {ItemList()}

        </div>
    );
}

