import { useState } from "react";


function AgeSelect() {
  const ageBands = ["영유아/아동", "10대", "20대", "30대", "40대", "50대", "60대", "그외"];
  const [selectedAgeBand, setSelectedAgeBand] = useState(ageBands[0]);


  return (
    <div>
      <h1>연령대 선택</h1>
      <select onChange={(e) => setSelectedAgeBand(e.target.value)}>
        <option disabled>-- 나이대 선택 --</option>
        {ageBands.map((ageBand) => (
          <option key={ageBand} value={ageBand} selected={ageBand === selectedAgeBand}>
            {ageBand}
          </option>
        ))}
      </select>
      <p>현재 값: {selectedAgeBand}</p>
    </div>
  );
}


export default function App() {
  return (
    <div>
      <AgeSelect />
    </div>
  );
}
