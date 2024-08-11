import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPersonae from './pages/ListPersonae';
import DetailsPersona from './pages/DetailsPersona';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPersonae />} />
        <Route path="/persona/:persona" element={<DetailsPersona />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
