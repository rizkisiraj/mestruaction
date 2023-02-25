import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Donasi from './pages/donasi';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Container />}>
        <Route path='donasi/:id' element={<Donasi />} /> 
      </Route>
    </Routes>
  );
}

export default App;
