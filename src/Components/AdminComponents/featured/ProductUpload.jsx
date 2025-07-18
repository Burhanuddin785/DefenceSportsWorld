import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import validationSchema from "../../../schemas/AdminComponents/ProductSchema";

const ProductUpload = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [subCategories, setSubCategories] = useState([])
   useEffect(() => {
    axios.get('http://localhost:8080/api/subcategories')
      .then((res) => {setSubCategories(res.data); console.log(res.data)})
      .catch(err => console.error("Error fetching categories", err));
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      serialNumber: "",
      rate: "",
      description: "",
      stock: "",
      discount: "",
      subCategory: "",
      isFeatured: false,
      specifications: [{ description: "", detail: "" }],
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const confirm = window.confirm("Are you sure you want to add this product?");
                if(!confirm) return;

      const formData = new FormData();

      const selectedSubCategory = subCategories.find(
     (cat) => cat._id === values.subCategory
      );
      const folderName = selectedSubCategory ? selectedSubCategory._id : "default";
      formData.append("uploadType", folderName);

      Object.entries(values).forEach(([key, val]) => {
        if (key === "specifications") {
          formData.append("specifications", JSON.stringify(val));
        } else {
          formData.append(key, val);
        }
      });

      imageFiles.forEach((file) => {
        formData.append("images", file);
      });

      try {
        const res = await axios.post("http://localhost:8080/api/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Product uploaded!");
        resetForm();
        setImageFiles([]);
      } catch (err) {
        console.error("Upload failed:", err);
      }
    },
  });
  
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(prev => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="productUpload">
    <form className="form" onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <label>Product Name</label>  
      <input name="name" placeholder="Product Name" onChange={formik.handleChange} />
     
      <label>Serial Number</label>
      <input name="serialNumber" placeholder="Serial Number" type="number" onChange={formik.handleChange} />
      
      <label>Rate</label>
      <input name="rate" placeholder="Rate (₹)" type="number" onChange={formik.handleChange} />
      
      <label>Description</label>
      <textarea name="description" placeholder="Description" onChange={formik.handleChange}></textarea>
      
      <label>Stock</label>
      <input name="stock" placeholder="Stock Count" type="number" onChange={formik.handleChange} />
      
      <label>Discount</label>
      <input name="discount" placeholder="Discount (%)" type="number" onChange={formik.handleChange} />
      
      <div className='wrapper'>
          <label>Parent Sub-Category</label>
          <select name="subCategory" onChange={formik.handleChange} value={formik.values.subCategory}>
            <option value="">Select Category</option>
            {subCategories.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
          {formik.touched.parentCategory && formik.errors.parentCategory && <div>{formik.errors.parentCategory}</div>}
        </div>
      
      <label>
        Featured:
        <input name="isFeatured" type="checkbox" onChange={formik.handleChange} />
      </label>

      {/* Dynamic Specifications */}
    
        <label>Specifications</label>
        {formik.values.specifications.map((spec, index) => (
        <div key={index}>
            <input
              name={`specifications[${index}].description`}
              placeholder="Spec Label"
              onChange={formik.handleChange}
              value={spec.description}
            />
            <input
              name={`specifications[${index}].detail`}
              placeholder="Spec Detail"
              onChange={formik.handleChange}
              value={spec.detail}
            />
            <button type="button" onClick={() => {
              const specs = [...formik.values.specifications];
              specs.splice(index, 1);
              formik.setFieldValue("specifications", specs);
            }}>Remove</button>
        </div>
        ))}
        <button type="button" onClick={() => {
          formik.setFieldValue("specifications", [
            ...formik.values.specifications,
            { description: "", detail: "" },
          ]);
        }}>Add Specification</button>
    

      {/* Images Upload */}
        <label >Product Images</label>
        <input type="file" multiple onChange={handleImageChange} />
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
          {imageFiles.map((file, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={URL.createObjectURL(file)}
                alt={`preview-${index}`}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <button
                className="imgBTN"
                type="button"
                onClick={() => removeImage(index)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      <button type="submit">Upload Product</button>
    </form>
    </div>
  );
};

export default ProductUpload;