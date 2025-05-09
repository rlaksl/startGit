import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
// 100부터 시작해서 +, - 버튼
const MyComponent = () => {
  const [count,setCount]=useState(100); // 100부터 시작
  const increment = () => {
    setCount(count+1);
    console.log(count+1);
  };
  const decrement = () => {
    setCount(count-1);
    console.log(count-1);
  };
  const reset = () => {
    setCount(100);
    console.log(100); // 카운트 100으로
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};


function App() {

  return ( // 화면은 return 값에 쓰기
    <div className="App">
      <MyComponent></MyComponent>
    </div>
  );
}

export default App;
