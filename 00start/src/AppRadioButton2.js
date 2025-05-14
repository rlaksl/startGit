import { useState } from "react";


function RadioButtonGroup() {
  const ageBands = ["영유아/아동", "10대", "20대", "30대", "40대", "50대", "60대", "그외"];
  const [selectedAgeBand, setSelectedAgeBand] = useState(ageBands[0]);


  return (
    <div>
      <h1>연령대 선택</h1>
      <div>
        {ageBands.map((ageBand) => (
          <label key={ageBand}>
            <input
              type="radio"
              name="ageBand"
              value={ageBand}
              checked={selectedAgeBand === ageBand}
              onChange={() => setSelectedAgeBand(ageBand)}
            />
            {ageBand}
          </label>
        ))}
      </div>
      <p>현재 값: {selectedAgeBand}</p>
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
