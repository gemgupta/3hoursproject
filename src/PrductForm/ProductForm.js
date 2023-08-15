import React, { useState } from "react";
import "./ProductForm.css";
const ProductForm = ({ addProduct }) => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { productId, productName, price };
    addProduct(newProduct);
    setProductId("");
    setProductName("");
    setPrice("");
  };

  return (
    <div>
      <h2>List Your Products</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input
            type="number"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
        </label>

        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
