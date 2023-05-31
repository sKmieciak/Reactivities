import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { fetchProductsFromParser } from './data';
import Home from './pages/Home';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Protected from './pages/Protected';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const pageCount = 2;
    const urlLaptopy = 'https://www.x-kom.pl/g-2/c/159-laptopy-notebooki-ultrabooki.html';
    const urlSmartfony = 'https://www.x-kom.pl/g-4/c/1590-smartfony-i-telefony.html';
    const urlTelewizory = 'https://www.x-kom.pl/g-8/c/1117-telewizory.html';
    const urlTablety = 'https://www.x-kom.pl/g-4/c/1663-tablety.html';
    const urlMonitory = 'https://www.x-kom.pl/g-6/c/15-monitory.html';
    const urlDrukarki = 'https://www.x-kom.pl/g-6/c/6-drukarki.html';
    const urlKomputery = 'https://www.x-kom.pl/g-2/c/175-komputery-stacjonarne.html';

    const fetchData = async () => {
      const productsLaptopy = await fetchProductsFromParser(urlLaptopy, pageCount);
      const productsSmartfony = await fetchProductsFromParser(urlSmartfony, pageCount);
      const productsTelewizory = await fetchProductsFromParser(urlTelewizory, pageCount);
      const productsTablety = await fetchProductsFromParser(urlTablety, pageCount);
      const productsMonitory = await fetchProductsFromParser(urlMonitory, pageCount);
      const productsDrukarki = await fetchProductsFromParser(urlDrukarki, pageCount);
      const productsKomputery = await fetchProductsFromParser(urlKomputery, pageCount);

      // Do something with the fetched products, e.g., store them in state
      const allProducts = [
        ...productsLaptopy,
        ...productsSmartfony,
        ...productsTelewizory,
        ...productsTablety,
        ...productsMonitory,
        ...productsDrukarki,
        ...productsKomputery,
      ];
      setProducts(allProducts);
    };

    fetchData();
  }, []);

  const user = false;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home products={products} />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route
          path="/products/:category"
          element={<Products products={products} />}
        ></Route>
        <Route path="/products/" element={<Products products={products} />} />
        <Route path="/prod/" element={<Protected />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
