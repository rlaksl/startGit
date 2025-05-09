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
      <h1>학생 목록</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <button onClick={() => setSelectedStudent(student)}>
              {student.name}
            </button>
          </li>
        ))}
      </ul>


      {selectedStudent && (
        <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
          <h2>학생 정보</h2>
          <p>이름: {selectedStudent.name}</p>
          <p>나이: {selectedStudent.age}세</p>
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
        <input
          type="number"
          placeholder="나이"
          value={newStudent.age}
          onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
        />
        <button
          onClick={() => {
            const newId = students.length + 1;
            setStudents([...students, { id: newId, name: newStudent.name, age: newStudent.age }]);
            setNewStudent({ name: "", age: "" });
          }}
        >
          추가
        </button>
      </div>
    </div>
  );
}


export default App;
