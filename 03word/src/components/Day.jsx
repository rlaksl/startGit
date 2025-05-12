import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';

export default function Day(){
  // const day = 1;
  // const wordList = dummy.words.filter(word => word.day === Number(day));

  const {day} =useParams(); // useParam의 리턴값은 객체여서 에러가 난다/
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