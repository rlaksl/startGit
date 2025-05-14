import './App.css';
import React, { useState } from "react";

const fruits = ["사과", "바나나", "배"];


function CheckboxList() {
  const [selecteds, setSelecteds] = useState(
    new Array(fruits.length).fill(false)
  );


  const toggleFruitSelected = (index) => {
    const newSelecteds = selecteds.map((el, _index) =>
      _index === index ? !el : el
    );
    setSelecteds(newSelecteds);
  };


//사용자가 선택한 과일만 가져오기
  const selectedFruits = selecteds
    .map((el, index) => (el ? fruits[index] : null))
    .filter((el) => el);


  return (
    <div>
      <h1 className="font-bold">체크박스 연습</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            <label className="cursor-pointer flex items-center gap-x-3">
              <input
                type="checkbox"
                checked={selecteds[index]}
                onChange={() => toggleFruitSelected(index)}
              />
              {fruit}
            </label>
          </li>
        ))}
      </ul>
      <p>선택상태: {JSON.stringify(selecteds)}</p>
      <p>선택된 과일: {selectedFruits.join(", ")}</p>
    </div>
  );
}


export default function App() {
  return (
    <div className="p-4">
      <CheckboxList />
    </div>
  );
}