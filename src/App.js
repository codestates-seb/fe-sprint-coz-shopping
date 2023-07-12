import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Header from "./Components/Header";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/" element={<MainPage></MainPage>} />
      </Routes>
    </div>
  );
}

export default App;
