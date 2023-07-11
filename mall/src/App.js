import logo from './logo.svg';
import './App.css';
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Main from "../src/pages/Main";

function App() {
  return (
    <div className="App">
      <Header />
        <Main/>
      <Footer />
    </div>
  );
}

export default App;
