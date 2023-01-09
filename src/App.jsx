import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResumePage from './pages/ResumePage/ResumePage';

//https://api.github.com/users/timurzubcenko

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/github-resume-client' element={<MainPage />} />
          <Route path='/user/:username' element={<ResumePage />} />
          <Route path='/github-resume-client/user/:username' element={<ResumePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
