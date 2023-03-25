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
import ArtikelVideo from './pages/videoArtikel'
import Kolaborasi from './pages/kolaborasi'
import SudahKolaborasi from './pages/sudahKolaborasi';
import Kontribusi from './pages/kontribusi'
import AjukanDonasi from './pages/ajukanDonasi';

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
        <Route path='edukasi/artikel/:id' component={Artikel} element={<Artikel />} />
        <Route path='edukasi/artikelVideo/:id' component={ArtikelVideo} element={<ArtikelVideo />} /> 
        <Route path='kolaborasi/' element={<Kolaborasi />} />
        <Route path='sudah-kolaborasi' element={<SudahKolaborasi />} /> 
        <Route path='kontribusi/' element={<Kontribusi />} /> 
        <Route path='ajukanDonasi' element={<AjukanDonasi />} />
      </Route>
    </Routes>
  );
}

export default App;
