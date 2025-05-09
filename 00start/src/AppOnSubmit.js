import './App.css';
import React,{useState} from 'react';

function SubmitName() {
  const [name, setName] = useState('');
  const handleSubmit = (event) =>{
    event.preventDefault(); // 기본 폼 제출 동작 방지
    alert(`제출된 이름: ${name}`);
  };
  return ( // 화면은 return 값에 쓰기
    <div className="App">
      <h2>폼 제출 이벤트</h2>
      <form onSubmit={handleSubmit}>
        <input  type = 'text' value ={name} onChange={(e)=>{
          setName(e.target.value)
        }} placeholder='이름을 입력하세요' />
        <button type = 'submit'>제출</button>
      </form>
    </div>
  );
}


function App() {

  return ( // 화면은 return 값에 쓰기
    <div className="App">
      <SubmitName></SubmitName>
    </div>
  );
}

export default App;
