import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function Day(){
  // const day = 1;
  // const wordList = dummy.words.filter(word => word.day === Number(day));

  const {day} =useParams(); // useParam의 리턴값은 객체여서 에러가 난다

  const words = useFetch(`http://localhost:3010/words?day=${day}`)
  //hooks에서 하고 있는 작업
  // const [words, setWords] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:3010/words?day=${day}`)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       setWords(data);
  //     });
  // }, [day]);

  const wordList = dummy.words.filter(word => word.day === Number(day)); // 여기서 숫자로 비교하고 있기 때문에 CreateWord에서 
  return(
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}