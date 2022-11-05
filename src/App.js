import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Student/Register';
import StudentHome from './pages/Student/StudentHome';
import DoctorHome from './pages/Doctor/DoctorHome';
import DoctorRegister from './pages/Doctor/DoctorRegister';
import ColorIdentificationTest from './pages/Student/Quizes/ColorIdentificationTest';
import RapidReadingTest from './pages/Student/Quizes/RapidReadingTest';
import WrtingTest from './pages/Student/Quizes/WrtingTest';
import ImageIdentificationTest from './pages/Student/Quizes/ImageIdentificationTest';

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
      <Route exact path="/ColorIdentificationTest" element={<ColorIdentificationTest/>}/>
      <Route exact path="/RapidReadingTest" element={<RapidReadingTest/>}/>
      <Route exact path="/WrtingTest" element={<WrtingTest/>}/>
      <Route exact path="/ImageIdentificationTest" element={<ImageIdentificationTest/>}/>
      </Routes>
    </>
  );
}
export default App;
