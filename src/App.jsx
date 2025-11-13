import { useState, useEffect } from "react";
//react dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

//user components
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Animation from "./pages/Animation";
import Components from "./pages/Component";
import ForwordToHome from "./pages/ForwardToHome";
import Todos from "./pages/todos";
import Products from "./pages/Products";
import Carts from "./pages/Carts";

import { fetchProducts } from "./data/products";

//stylesheets
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";

function App() {
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => setProducts(fetchProducts()), []);
  useEffect(() => console.log(products), [products]);

  if (token === '') {
  return (<Login setToken={setToken} setRole={setRole} />)
  } else {

  //render
  return (
    <BrowserRouter basename="/csi205/">
      <Routes>
        <Route element={<AppLayout products={products} carts={carts} setToken={setToken} />}>
          <Route path="home" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="animation" element={<Animation />} />
          <Route path="components" element={<Components />} />
          <Route path="todos" element={<Todos />} />
          <Route
            path="products"
            element={
              <Products products={products} carts={carts} setCarts={setCarts} />
            }
          />
          <Route
            path="carts"
            element={<Carts carts={carts} setCarts={setCarts} />}
          />
          <Route path="*" element={<ForwordToHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  } 

}

export default App;
