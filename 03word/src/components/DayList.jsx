import dummy from '../db/data.json';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DayList(){
  const [days,setDays] = useState([]);
  useEffect(() =>{
    fetch('http://localhost:3010/days')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setDays(data);
      });
  }, []);
  return (
    <ul className="list_day">
      {dummy.days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}