import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';
import { useEffect, useState } from 'react';

export default function Day(){
  // const day = 1;
  // const wordList = dummy.words.filter(word => word.day === Number(day));

  const {day} =useParams(); // useParam의 리턴값은 객체여서 에러가 난다
  const [words, setWords] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3010/words?day=${day}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setWords(data);
      });
  }, [day]);

  const wordList = dummy.words.filter(word => word.day === Number(day));
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