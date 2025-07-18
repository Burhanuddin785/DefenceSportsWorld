import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => {
        setProducts(res.data);
        
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Serial #</th>
            <th>Rate (₹)</th>
            <th>Description</th>
            <th>Specifications</th>
            <th>Images</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.serialNumber}</td>
              <td>{product.rate}</td>
              <td>{product.description}</td>
              <td>
                <ul style={{ paddingLeft: "16px" }}>
                  {product.specifications.map((spec, i) => (
                    <li key={i}>
                      <strong>{spec.description}:</strong> {spec.detail}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {product.images.map((img, i) => (
                    <img
                      key={i}
                      src={`http://localhost:8080/adminUploads/products/${product.subCategory}/${img}`}
                      alt={`Product ${i}`}
                      style={{ width: "70px", height: "auto", objectFit: "cover" }}
                    />
                  ))}
                </div>
              </td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
