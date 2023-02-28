import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Home from './pages/home';
import Donasi from './pages/donasi';
import Edukasi from './pages/edukasi';
import Artikel from './pages/artikel'
import Kolaborasi from './pages/kolaborasi'
import Kontribusi from './pages/kontribusi'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Container />}>
        <Route path='home/' element={<Home />} /> 
        <Route path='home/edukasi/' element={<Edukasi />} /> 
        <Route path='home/edukasi/artikel/' element={<Artikel />} /> 
        <Route path='home/kolaborasi/' element={<Kolaborasi />} /> 
        <Route path='home/kontribusi/' element={<Kontribusi />} /> 
        <Route path='donasi/:id' element={<Donasi />} /> 
      </Route>
    </Routes>
  );
}

export default App;
