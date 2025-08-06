import React, { useEffect, useState } from "react";
import axios from "axios";

const SubCategoryList = () => {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.defencesportsworld.com/api/subcategories")
      .then((res) => {
        setSubCategories(res.data);
      })
      .catch((err) => {
        console.error("Error fetching subcategories:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Subcategories</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Tagline</th>
            <th>Card Image</th>
            <th>Hero Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {subCategories.map((sub, index) => (
            <tr key={index}>
              <td>{sub.name}</td>
              <td>{sub.tagLine}</td>
              <td>
                <img
                  src={`https://api.defencesportsworld.com/adminUploads/subCategories/${sub.cardImage}`}
                  alt="Card"
                  style={{ width: "100px", height: "auto" }}
                />
              </td>
              <td>
                <img
                  src={`https://api.defencesportsworld.com/adminUploads/subCategories/${sub.heroImage}`}
                  alt="Hero"
                  style={{ width: "100px", height: "auto" }}
                />
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

export default SubCategoryList;
