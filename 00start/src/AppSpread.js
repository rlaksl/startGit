import './App.css';
import React, { useState } from "react";

// spread 연산자 (...): 배열이나 객체의 요소를 개별적으로 펼쳐지는(spread)역할을 함
const students = ['Alice', 'Bob', 'Charlie'];
const newStudents = [...students];

console.log(newStudents);

const newStudents2 = students;
console.log(newStudents2);


function App() {
  
  return (
    <div>
      
    </div>
  );
}


export default App;
