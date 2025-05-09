import './App.css';
import React,{useState} from 'react';

function ChangeApp() {
  const [text, setText] = useState('');

  const  handleChange = (event) =>{
    setText(event.target.value);
  };
  return ( // 화면은 return 값에 쓰기
    <div className="App">
      <h2>입력 필드 이벤트(자식 컴포넌트 이용)</h2>
      <input type='text' onChange ={handleChange} placeholder = '입력하세요'/>
      <p>입력한 값: {text}</p>
    </div>
  );
}
function App() {
  return ( // 화면은 return 값에 쓰기
    <div className="App">
      <ChangeApp></ChangeApp>
    </div>
  );
}

export default App;
