import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </div>
  );
}

export default App;
