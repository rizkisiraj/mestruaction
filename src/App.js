import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutParagraph from './components/AboutParagraph';
import Container from './components/Container';
import DonationTimeline from './components/DonationTimeline';
import Donatur from './components/Donatur';
import Donasi from './pages/donasi';
import FormDonasi from './pages/FormDonasi';
import SudahDonasi from './pages/sudahDonasi';
import Home from './pages/home';
import Edukasi from './pages/edukasi';
import Artikel from './pages/artikel'
import Kolaborasi from './pages/kolaborasi'
import SudahKolaborasi from './pages/sudahKolaborasi';
import Kontribusi from './pages/kontribusi'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Container />}>
        <Route path='donasi/:id' element={<Donasi />}>
          <Route index element={<AboutParagraph />} />
          <Route path='perkembangan' element={<DonationTimeline />} />
          <Route path='donatur' element={<Donatur />} />
        </Route>
        <Route path='donasi/:id/form-donasi' element={<FormDonasi />} />
        <Route path='sudah-donasi' element={<SudahDonasi />} />
        <Route index element={<Home />} /> 
        <Route path='edukasi/' element={<Edukasi />} /> 
        <Route path='edukasi/artikel/' element={<Artikel />} /> 
        <Route path='kolaborasi/' element={<Kolaborasi />} />
        <Route path='sudah-kolaborasi' element={<SudahKolaborasi />} /> 
        <Route path='kontribusi/' element={<Kontribusi />} /> 
      </Route>
    </Routes>
  );
}

export default App;
