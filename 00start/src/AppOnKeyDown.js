import './App.css';
import React,{useState} from 'react';

function App() {
    const [key, setKey] = useState('');

    const handleKeyDown = (event) =>{
      setKey(event.key);
    };
  return (
    <div>
      <h2>키보드 이벤트</h2>
      <input type = 'text' onKeyDown={handleKeyDown} placeholder='키를 눌러보세요.' />
      <p>입력한 키: {key}</p>
    </div>
  );
}

export default App;
