import './App.css';
import React, { useState } from "react";


function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", age: 21 },
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlie", age: 23 },
  ]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({ name: "", age: "" });


  return (
    <div style={{ padding: "20px" }}>
      <h2>학생 목록</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <button onClick={() => setSelectedStudent(student)}>
            {student.name}
            </button>
          </li>
        ))}
      </ul>


      {selectedStudent && ( // 논리 연산자 (selectdeStudent가 존재할 때만 아래 JSX를 렌더링)
        <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
          <h2>학생 정보</h2>
          <p>학생 번호(ID): {selectedStudent.id}</p>
          <p>이름: {selectedStudent.name}</p>
          <p>나이: {selectedStudent.age}세</p>
          
          <button
          onClick={() => {
            setStudents(students.filter(s => s.id !== selectedStudent.id)); // 삭제: id가 다른 학생만 남김
            setSelectedStudent(null) // 선택된 학생 초기화(화면에서 정보 사라짐)
          }}
        >
          삭제
        </button>

        </div>
        
      )}


      <div style={{ marginTop: "20px" }}>
        <h2>새 학생 추가</h2>
        <input
          type="text"
          placeholder="이름"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        {/* 
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          문제: e.target.value는 문자열(String)인데 age는 숫자 
          해결: 방법: 숫자 변환 필요
          age: Number(e.target.value) 또는 parseInt 사용        
        */}

        <input
          type="number"
          placeholder="나이"
          value={newStudent.age}
          onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
        />
        <button
          onClick={() => {
            // const newId = students.length + 1;
            const newId = Math.max(...students.map(s => s.id)) + 1;
            setStudents([...students, { id: newId, name: newStudent.name, age: newStudent.age }]);
            setNewStudent({ name: "", age: "" });
          }}
        >
          추가
        </button>
        {/* const newId = students.length + 1;
          잠재적 문제: students가 삭제되거나 순서가 바뀌면 ID가 중복될 수 있음
          개선 방법: 가장 큰 id를 찾아서 +1하기
          Math.max(...students.map(s => s.id)) +1
        
        */}

        
      </div>
    </div>
  );
}



export default App;
