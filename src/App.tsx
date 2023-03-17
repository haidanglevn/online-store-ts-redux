import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import List from "./components/List";
import Product from "./components/Product";
import StoreNavBar from "./components/StoreNavBar";

function App() {
  return (
    <div className="App">
      <StoreNavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
