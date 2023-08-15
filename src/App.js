import React, { useState, useEffect } from 'react';
import ProductForm from './PrductForm/ProductForm';
import ProductList from './PrductForm/Productlist';
import './PrductForm/ProductForm.css'

function App() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
    calculateTotalPrice();
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const removeProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const calculateTotalPrice = () => {
    const total = products.reduce((sum, product) => sum + parseFloat(product.price), 0);
    setTotalPrice(total);
  };

  return (
    <div className='form-control'>
     
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} removeProduct={removeProduct} />
      <div>Total Price: INR {totalPrice.toFixed(2)}</div>
    </div>
  );
}

export default App;
