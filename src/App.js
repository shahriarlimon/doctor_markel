
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import SingleAppointment from './Components/Pages/Home/SingleAppointment';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Login/Register/Register';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointment/:appointmentID' element={<SingleAppointment/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
