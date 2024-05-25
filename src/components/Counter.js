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

            <>
            {x==5? loggedInView(): <h1>Not 4</h1>}

            </>






            // <>
            // {isLoggedin && loggedInView()}
            // </>

        // <div className="counter-container">






        //     <p>Counter min Value: {props.minValue}</p>

        //     <div className="counter-display">Clicked Times: {count}</div>
        //     <div className="button-container">
        //         <button onClick={handleDecrement2} className="counter-button">-</button>
        //         <button onClick={() => setCount(count + 1)} className="counter-button">+</button>
        //     </div>

        //     {ItemList()}







        // </div>
    );
}


// Solution 1: Fine solution for this use case
// For i in 2-100
//      checkPrime(i)



// Optimal 

// For i in range 0-len(prime):
//      Get  prime[i]


// prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, ........ 100]

// prime[0] = 2
// prime[1] = 3
// prime[2] = 5


// Ternary Operator

// if(x==5) {
//     // do something

// } else {
//     // do something else
// }



// Ternary Operator

// x==5 ? doSomething() : doSomethingElse();
// condition ? true action : false action

