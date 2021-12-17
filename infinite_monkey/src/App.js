import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './App.css';
import Book from './pages/Book';
import Buy from './pages/Buy';
import About from './pages/About';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <div className='TopNav'>
      <div className='LeftNav'>
        <h4>infinitemonkeyDAO</h4>
      </div>
      <div className='RightNav'>
        <button className='walletconnect'>connect wallet</button>
      </div>
    </div>

    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="book" element={<Book />} />
          <Route path="about" element={<About />} />
          <Route path="buy" element={<Buy />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>

    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


export default App;
