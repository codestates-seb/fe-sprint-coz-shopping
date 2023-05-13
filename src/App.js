import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/Global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <header></header>
      <Routes>
        <Route path="/" element={<div>root</div>} />
        <Route path="/products/list" element={<div>product list</div>} />
        <Route path="/bookmark" element={<div>bookmark</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
