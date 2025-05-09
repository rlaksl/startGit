import './App.css';
// 1. 버튼 클릭 이벤트 추가하기


function ChildComponent(props){
  return(
    <div>
      ChildComponent<br/>
      <button onClick={props.onClick}>클릭하세요!</button>
    </div>
  );
}

function App() {
  const handleHello = () =>{
    alert('Hello')
  }
  const handleWorld = () =>{
    alert('World')
  }
  return ( // 화면은 return 값에 쓰기
    <div className="App">
      <ChildComponent onClick={handleHello}/>
      <ChildComponent onClick={handleWorld}/>
      <ChildComponent onClick={()=>{
        alert('내용')
      }}/>
      <ChildComponent onClick={()=>{
        alert('내용을 입력하세요')
      }}/>
    </div>
  );
}

export default App;

// 자식 컴포넌트에 클릭 이벤트를 다르게 실행하고 싶을 때
