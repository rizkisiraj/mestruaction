import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutParagraph from './components/AboutParagraph';
import Container from './components/Container';
import DonationTimeline from './components/DonationTimeline';
import Donatur from './components/Donatur';
import Donasi from './pages/donasi';
import FormDonasi from './pages/FormDonasi';
import SudahDonasi from './pages/sudahDonasi';

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
      </Route>
    </Routes>
  );
}

export default App;
