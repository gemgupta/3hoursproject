import React from 'react';
import './ProductList.css'
const ProductList = ({ products, removeProduct }) => {
  return (
   
      <ul className='list'>
        {products.map((product, index) => (
          <li className='listitem' key={index}>
            {product.productName} - INR {product.price}
            <button onClick={() => removeProduct(index)}>Remove</button>
          </li>
        ))}
      </ul>
   
  );
};

export default ProductList;
