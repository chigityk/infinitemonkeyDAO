import logo from './logo.svg';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" element={<Book />} ></Route>
      </Router>
    </div>
  );
}

export default App;
