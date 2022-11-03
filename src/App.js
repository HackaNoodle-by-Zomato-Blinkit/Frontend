import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentHome from './pages/Student/StudentHome';


function App() {
  return (
    <>
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/studenthome" element={<StudentHome/>}/>
      </Routes>
    </>
  );
}

export default App;
