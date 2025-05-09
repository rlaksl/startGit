import './App.css';
import React,{useState} from 'react';

function App() {
  const [text, setText] = useState('');

  const  handleChange = (event) =>{
    setText(event.target.value);
  };
  return ( // 화면은 return 값에 쓰기
    <div className="App">
      <h2>입력 필드 이벤트</h2>
      <input type='text' onChange ={handleChange} placeholder = '입력하세요'/>
      <p>입력한 값: {text}</p>
    </div>
  );
}

export default App;
