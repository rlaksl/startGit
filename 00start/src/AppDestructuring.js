import './App.css';
import React,{useState} from 'react';

// 구조 분해 할당: 배열이나 객체의 내용을 일반 변수에 넣는 작업
// 배열 구조 분해
// 기본
// const arr = [1,2,3];
// const [a,b,c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);

// // 필요한 값만 가져오기 (건너뛰기)
// const [x,,y] = [10,20,30]; // ,로 빈 칸을 두면 해당 인덱스는 건너뜀
// console.log(x); // 10
// console.log(y); // 30

// // 기본값 설정(값이 없을 때)
// const [name = 'Guest', age = 20] = ['Tom'];
// console.log(name);
// console.log(age); // 배열에 없으므로 기본값인 20 출력

// // 나머지 값 한 번에 가져오기: ...rest로 남은 요소들을 배열로 저장할 수 있음
// const [first, ...rest] = [1,2,3,4];
// console.log(first);
// console.log(rest); // [2,3,4] 나머지가 배열로 할당

//객체 구조 분해
//기본 {namem, age} =user 객체에서 키, 이름과 동일한 변수로 값을 분해
// const user = {name: 'Alice', age: 25};
// const {name, age} = user;
// console.log(name);
// console.log(age);

// // 변수명 변경(원래키: 새변수)
// const {name: userName, age: userAge} = user;
// console.log(userName);

// 기본값 설정(키가 없을 때)
const {name = 'Guest', isAdmin = false} = {name: 'Bob'};
console.log(name); // Bob (객체에 값이 있음)
console.log(isAdmin); // false (객체에 없으므로 기본값 사용)

// 중첩 객체 분해: {키: {내부키}} 형태로 중첩된 객체의 값을 분해할 수 있음
const user = {
  id: 1,
  info: {email: 'abc@def.com', phone: '010-1234-5789'}
};
const {info: {email, phone}} = user;
console.log(email);

/*구조 분해 할당의 장점 
1. 코드가 간결해짐
2. 함수에서 객체/ 배열 인자 쉽게 받기
*/






function App() {

  return ( // 화면은 return 값에 쓰기
    <div className="App">
      
    </div>
  );
}

export default App;
