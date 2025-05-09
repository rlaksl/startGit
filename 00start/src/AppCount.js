import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const MyComponent = () => {
  const [count,setCount]=useState(0);
  // let count = 0; // useState를 사용하지 않음
  const increment = () => {
    setCount(count+1);
    console.log(count+1); // 카운트 1부터 시작
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
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
