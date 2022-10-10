import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Qrcode from './pages/Qrcode/Qrcode';
function App() {
  return (
    <div className="App">
      <h1>Vaquinha da gi</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/qrcode' element={<Qrcode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
