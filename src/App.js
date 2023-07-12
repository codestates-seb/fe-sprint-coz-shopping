import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/" element={<MainPage></MainPage>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
