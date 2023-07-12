
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Main from "./pages/Main";
import Products from "./pages/Products";
import Bookmark from "./pages/Bookmark";


import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main></Main>}>
          </Route>
          <Route path="/products/list" element={<Products></Products>}>
          </Route>
          <Route path="/bookmark" element={<Bookmark></Bookmark>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
