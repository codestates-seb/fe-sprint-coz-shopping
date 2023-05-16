import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import './styles/App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header/>} />
    </Routes>
  );
}

export default App;
