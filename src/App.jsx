import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Tienda from './components/Tienda'
import QuienesSomos from './components/QuienesSomos'
import Contacto from './components/Contacto'


function App() {
  return (
    <>
      <Navbar />
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App

