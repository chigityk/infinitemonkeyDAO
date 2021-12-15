import logo from './logo.svg';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Book from './pages/Book';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
