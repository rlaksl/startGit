import { useState } from "react";

function RadioButtonGroup() {
  const [selectedGender, setSelectedGender] = useState("M");

  return (
    <div>
      <h1>라디오 버튼 연습</h1>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="M"
            checked={selectedGender === "M"}
            onChange={() => setSelectedGender("M")}
          />
          남성
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="W"
            checked={selectedGender === "W"}
            onChange={() => setSelectedGender("W")}
          />
          여성
        </label>
      </div>
      <p>현재 값: {selectedGender}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <RadioButtonGroup />
    </div>
  );
}
