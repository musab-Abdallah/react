import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AddProduct from "./components/AddProduct"
import ProductDetails from "./Pages/ProductDetails"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="products/add" element={<AddProduct />} />
                <Route path="products/:productID" element={< ProductDetails/>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
