import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-40 object-cover mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-2">${product.price}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
