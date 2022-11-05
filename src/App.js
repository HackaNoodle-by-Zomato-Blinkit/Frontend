import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Student/Register';
import StudentHome from './pages/Student/StudentHome';
import DoctorHome from './pages/Doctor/DoctorHome';
import DoctorRegister from './pages/Doctor/DoctorRegister';

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/doctorregister" element={<DoctorRegister/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/studenthome" element={<StudentHome/>}/>
      <Route exact path="/doctorhome" element={<DoctorHome/>}/>
      </Routes>
    </>
  );
}
export default App;
