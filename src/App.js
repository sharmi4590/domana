
import './App.css';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/Aboutus';
import StepsLayout from './components/StepsLayout';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import CopyRight from './components/CopyRight';
import Signup from './components/Signup';
import Home from './Home.js';
import Login from './components/Login.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
