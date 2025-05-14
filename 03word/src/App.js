import './App.css';
// import './index.css'; import 안해도 자동으로 됨
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from './components/EmptyPage';
import CreateDay from './components/CreateDay';
import CreateWord from './components/CreateWord';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path='/' element={<DayList/>} />
          <Route path='/day/:day' element={<Day/>} />
          <Route path='*' element={<EmptyPage/>} />
          <Route path='/create_word' element={<CreateWord/>} />
          <Route path='/create_day' element={<CreateDay/>} />
          <Route path='*' element={<EmptyPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
