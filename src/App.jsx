import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import BookmarkPage from "./pages/BookmarkPage";
import ProductListPage from "./pages/ProductListPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainPage />
        <Routes>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/productlistpage" component={ProductListPage}></Route>
          <Route path="/bookmarkpage" component={BookmarkPage}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
