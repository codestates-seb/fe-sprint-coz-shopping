import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/products/list" element={<Profile />} />
          <Route path="/bookmark" element={<Board />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
