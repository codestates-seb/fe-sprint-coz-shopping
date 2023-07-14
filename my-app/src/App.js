import MainPage from "./pages/Main";
import './base.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <MainPage></MainPage>
        </Router>
      </header>
    </div>
  );
}

export default App;
