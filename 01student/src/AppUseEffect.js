import './App.css';
import React, { useState, useEffect } from 'react';

// useEffect API 호출할 때 많이 씀
function EffectExample() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // 항상 실행됨 (렌더링될 때마다)
  useEffect(() => {
    console.log('항상 실행됨');
  });

  // 처음 한 번만 실행됨 (마운트 시)
  useEffect(() => {
    console.log('처음 한 번만 실행됨');
  }, []);

  // count가 변경될 때 실행됨
  useEffect(() => {
    console.log('count가 변경될 때 실행됨');
  }, [count]);

  return (
    <div>
      <h1>Count1: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Increment Count1</button>
      <br/><br/>
      <h1>Count2: {count2}</h1>
      <button onClick={() => setCount2(prev => prev + 1)}>Increment Count2</button>
    </div>
  );
}

export default EffectExample;

