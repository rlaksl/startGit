import './App.css';
import React,{useState} from 'react';

function App() {
  const [bgColor, setBgColor] = useState("white");
  return (
    <div>
      <h2>마우스 이벤트</h2>
      <div
        style={{ width: "200px", height: "100px", backgroundColor: bgColor, textAlign: "center", lineHeight: "100px", margin: '0 auto',}}
        onMouseEnter={() => setBgColor("lightblue")}
        onMouseLeave={() => setBgColor("pink")}
      >
        마우스를 올려보세요!
      </div>
    </div>
  );
}

export default App;
