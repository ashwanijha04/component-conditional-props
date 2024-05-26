import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter'
import CounterHeader from './components/CounterHeader';
import CounterClassComponent from './components/CounterClassComponent';
import TaskManager from './components/TaskManager';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CounterHeader name="Normal Counter" minValue="-9999999"/> */}
    <TaskManager/>
    {/* <CounterClassComponent/> */}
    {/* <CounterHeader name="Cart" minValue="0"/>
    <CounterHeader name="Prime Numbers" minValue="2" maxValue="100"/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// index.js (minValue prop) -> CounterHeader.js -> Counter.js



// Problem 1 :
// Implement the Prime Counter, start with 2.
// [2-100]
 // [2,3,5,7,11,13,17, ]


//----------------------------------------


// Problem 2:
// Implement Fibonacci series with Counter starting with 1
// [1, infinity]
// Fibonacci series

// 1, 1, 2, 3, 5, 8, 13, 21, 34
// c = a + b

// firstNumber = 1
// secondNumber = 1

// Next number: first=1, second=1 --->first+second(1+1) = 2
// PrevNumber : 
// firstNumber = secondNumber
// secondNumber = nextNumber 