import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Home from './pages/home';
import Donasi from './pages/donasi';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Container />}>
        <Route path='/home' element={<Home />} /> 
        <Route path='donasi/:id' element={<Donasi />} /> 
      </Route>
    </Routes>
  );
}

export default App;
