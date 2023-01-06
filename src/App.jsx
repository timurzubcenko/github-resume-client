import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResumePage from './pages/ResumePage/ResumePage';
import { useState } from 'react';

//https://api.github.com/users/timurzubcenko

function App() {

  const [arrUser, setArrUser] = useState({
    name: '',
    avatar: '',
    followers: 0,
    following: 0,
    created: '',
    public_repos: '',
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage arrUser={arrUser} setArrUser={setArrUser} />} />
          <Route path='/:username' element={<ResumePage arrUser={arrUser} setArrUser={setArrUser} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
