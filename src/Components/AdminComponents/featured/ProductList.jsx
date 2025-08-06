import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.defencesportsworld.com/api/products")
      .then((res) => {
        setProducts(res.data);
        
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });
  }, []);

  const handleDelete = (id)=>{
    if(window.confirm("Are you sure you want to delete this product")){
      axios.delete(`https://api.defencesportsworld.com/api/products/${id}`)
      .then(()=>{
        alert("Product Deleted Successfully");
      })
      .catch((err)=>{console.log(err); alert("Something went wrong")})

    }
  }

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
              <td> <div className="scrollable-specs"> {product.name}</div></td>
              <td>{product.serialNumber}</td>
              <td>{product.rate}</td>
              <td> <div className="scrollable-specs"> {product.description}</div></td>
              <td> <div className="scrollable-specs">
                <ul style={{ paddingLeft: "16px" }}>
                  {product.specifications.map((spec, i) => (
                    <li key={i}>
                      <strong>{spec.description}:</strong> {spec.detail}
                    </li>
                  ))}
                </ul>
                  </div>
              </td>
              <td>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {product.images.map((img, i) => (
                    <img
                      key={i}
                      src={`https://api.defencesportsworld.com/adminUploads/products/${product.subCategory}/${img.filename}`}
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
                <button onClick={()=>{ handleDelete(product._id)} }>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
