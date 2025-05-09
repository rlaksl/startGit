import './App.css';
import React,{useState} from 'react';


function myFunction(){
  return 'functionString';
}
var a = myFunction; // 함수가 필요할 때
console.log(a); // 출력: 함수 내용
// ƒ myFunction() {
//   return 'functionString';
// }
console.log(a()); // 출력: functionString

var a = myFunction(); // 함수의 리턴값이 필요할 때
console.log(a); // 출력: functionString


function ChangeApp(props) {
  const [text, setText] = useState('');

  const  handleChange = (event) =>{
    // setText(event.target.value);
    setText(props.onChange());
  };
  return ( // 화면은 return 값에 쓰기
    <div className="App">
      <h2>입력 필드 이벤트 (컨포넌트마다 이벤트가 다르게 적용)</h2>
      <input type='text' onChange ={handleChange} placeholder = '입력하세요'/>
      <br />
      <br />
      <input type='text' onChange ={props.onChange} placeholder = '입력하세요'/>
      <p>입력한 값: {text}</p>
    </div>
  );
}
function App() {
  // let str = '';
  let counter = 0;
  return ( // 화면은 return 값에 쓰기
    <div className="App">
      <ChangeApp onChange={(event)=>{
        // str = str + "*";
        // return str;
        return counter++;
      }}></ChangeApp>
    </div>
  );
}

export default App;
