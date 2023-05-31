import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { products } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  width: 80%;
  padding: 20px 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

const ProductList = ({ cat, filters, sort }) => {
  const [apiProducts, setApiProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3001/products?category=${cat}`
            : "http://localhost:3001/products"
        );
        setApiProducts(res.data.data.products);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    setFilteredProducts(
      apiProducts.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [apiProducts, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createAt - b.createAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
   useEffect(() => {
     setFilteredProducts(apiProducts.map((item) => item));
   }, [apiProducts]);
  console.log(filteredProducts);
  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default ProductList;
