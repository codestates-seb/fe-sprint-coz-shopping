import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/" element={<MainPage></MainPage>} />
      </Routes>
    </div>
  );
}

export default App;
