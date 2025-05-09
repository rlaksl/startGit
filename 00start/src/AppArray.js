import logo from './logo.svg';
import './App.css';
import utils from './utils' //.js 는 생락햘 수 있음
import {helper1,helper2} from './utils'
import Button from './Button';
import Counter from './Counter';

function Greeting(){
  return <h1>안녕하세요 </h1>
}

function GreetingProp(props){
  return <h1>{props.name}</h1>
}

function GreetingProps(props){
  // return <span>{props.name} {props.age}</span>
  return <h1>{props.name}의 나이는 {props.age}세입니다.</h1>
  
}

function GreetingPro(props){
  if(props.isLoggedIn){
    return <h1>Welecome Back!</h1>;
  }else{
    return <h1>Please seign up</h1>;
  }
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function App() {
  const name ='john';
  const element =<h1>Hello, {name}!</h1>
  const userIsLoggedId = true; // 로그인 상태 변수 (true, false로 변경 가능)
  const numbers = [1,2,3,4,5];
  
  // 두 수 더하기
  const add = (a, b) => a +b;
  console.log(add(2,3));

  // 인사말 반환
  const greet = name => `Hello, ${name}!`;
  console.log(greet('환희'));
  
  // 배열의 제곱값 만들기(map 사용)
  const Number = [1,2,3,4];
  const squares = Number.map(num => num * num);
  console.log(squares);

  // 짝수만 필터링
  const nums = [1,2,3,4,5,6];
  const evens = nums.filter(n => n % 2 ===0);
  console.log(evens);

  // 객체 반환(소괄호로 감싸기)
  const createUser = (name, age) => ({name, age});
  console.log(createUser('영희', 25));

  // 배열의 총합 계산 (reduce 사용)
  const arr =[10, 20, 30];
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);

  // 문자열 길이 반환
  const getLength = str => str.length;
  console.log(getLength('화살표 함수'))

  // setTimeout 사용
  setTimeout (() => {
    console.log('3초 뒤 출력');
  }, 3000);

  // 삼항 연산자와 함께 사용
  const isAdult = age => age >= 18 ? '성인' : '미성년자';
  console.log(isAdult(20));

  // 다중 매개변수, 중괄호와 return 사용
  const calculateArea = (width, height) =>{
    return width * height;
  }
  console.log(calculateArea(5,4));

  // find() 메소드: 배열에서 조건을 만족하는 첫 번째 요소를 반환
  const numberss = [5,12,8,130,44];
  const found = numberss.find(element => element > 10);
  console.log(found);

  // some() 메소드: 배열의 요소 중 하나라도 조건을 만졳하면 true를 반환
  const numbersss = [1,2,3,4,5];
  const hasEven = numbersss.some(element => element % 2 ===0);
  console.log(hasEven);

  //every() 메소드: 배열의 모든 요소가 조건을 만족하면 true를 반환
  const numberssss = [2,4,6,8,10];
  const allEven = numberssss.every(element => element % 2 ===0);
  console.log(allEven);

  // includes() 메소드: 배열에 특정 요소가 포함되어 있는지 확인
  const fruits = ['apple', 'banana', 'orange'];
  const hasBanana = fruits.includes('banana');
  console.log(hasBanana);

  //slice() 메소드: 배열의 일부분을 새로운 배열로 반환
  const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  const sliced = animals.slice(1,4);
  console.log(sliced);

  //fill() 메소드
    // 배열의 모든 요소를 특정 값으로 채우기
  const array1 = [1,2,3,4,5];
  array1.fill(0);
  console.log(array1);

    //시작 인덱스 지정하기
  const array2 = [1,2,3,4,5];
  array2.fill(0,2) // 인덱스 2부터 끈까지 0으로 채움
  console.log(array2);

    // 시작 인덱스와 끝 인덱스 지정하기 (끝 인덱스는 포함되지 않음)
  const array3=[1,2,3,4,5,];
  array3.fill(0,1,3); // 인덱스 1부터 3 이전까지 (인덱스 1,2)를 0으로 채움
  console.log(array3);

    // 새 배열 만들고 채우기
  const newArray = new Array(5).fill('A');
  console.log(newArray);

  // sort() 메소드: 배열의 요소를 정렬. 기본적으로 문자열로 변환 후 오름차순으로 정렬
  const fruitss = ['banana', 'apple', 'orange', 'grape'];
  fruitss.sort();
  console.log(fruitss);

    // 역정렬(내림차순 정렬)
  const num = [1, 30, 4, 21, 1000];
  num.sort((a,b) => b-a);
  console.log(num);

  // join() : 배열을 문자열로 변환
  let words = ['Hello', 'world'];
  console.log(words.join(' '));
  
  // 인라인 스타일링
  const names = '김'
  const naver ={
    name: '네이버',
    url: 'https://naver.com',
  };
  
  
  // alert(utils());
  // alert(helper1());
  // alert(helper2());
  return ( // 화면은 return 값에 쓰기
    <div className="App">
      <br/>
      <h1>Hello React!</h1>
      <Button/> <Button/> <Button/><br/>
      <Counter/><Counter/><Counter/>
      {element} {element} {element}
      <Greeting/>
      <GreetingProp name='엘리자베스'/>
      <GreetingProp name='아나스타샤'/>

      {/* <div>
        <GreetingProps name='Tom'/>의 나이는
        <GreetingProps age='15'/>세 입니다.
      </div> */}
      <GreetingProps name='Tom' age='15'/>

      <GreetingPro isLoggedIn = {userIsLoggedId}/>
      <NumberList numbers={numbers} />

      {/* 인라인 스타일링 */}
      <h1
        style={{
          color: "#f0f",
          backgroundColor: "green",
        }}
      >
        Hello, {names}.<p>{2 + 3}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a>
      
    </div>
  );
}

export default App;
