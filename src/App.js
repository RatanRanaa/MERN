import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar';
// import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import Registe from './screens/Registe';
import Login from './screens/Login';

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <NavBar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/registe' element={<Registe/>} />
        <Route path='/cart' element={<CartScreen/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/policy' element={<Policy/>} />
        <Route path='/' element={<HomeScreen/>} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
