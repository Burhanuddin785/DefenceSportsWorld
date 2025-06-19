import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import SubCategorySchema from '../../../schemas/AdminComponents/SubCategorySchema'

const SubCategoryUpload = () => {
  const [categories, setCategories] = useState([]);

  // Fetch parent categories on mount
  useEffect(() => {
    axios.get('http://localhost:8080/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error("Error fetching categories", err));
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      tagLine: '',
      parentCategory: '',
      cardImage: null,
      heroImage: null
    },
    validationSchema: SubCategorySchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("uploadType", "subCategories");
      formData.append("name", values.name);
      formData.append("tagLine", values.tagLine);
      formData.append("parentCategory", values.parentCategory);
      formData.append("cardImage", values.cardImage);
      formData.append("heroImage", values.heroImage);

      try {
        const confirm = window.confirm("Are you sure you want to upload this subcategory?");
        if (!confirm) return;

        const res = await axios.post("http://localhost:8080/api/subcategories", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        console.log(res.data);
        resetForm();
      } catch (err) {
        console.error("Upload failed", err);
      }
    }
  });

  return (
    <div className="SubCategoryUpload">
      <form className='form' onSubmit={formik.handleSubmit}>
        <div className='wrapper'>
          <label>Name</label>
          <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} />
          {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
        </div>

        <div className='wrapper'>
          <label>Tagline</label>
          <input type="text" name="tagLine" onChange={formik.handleChange} value={formik.values.tagLine} />
          {formik.touched.tagLine && formik.errors.tagLine && <div>{formik.errors.tagLine}</div>}
        </div>

        <div className='wrapper'>
          <label>Parent Category</label>
          <select name="parentCategory" onChange={formik.handleChange} value={formik.values.parentCategory}>
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
          {formik.touched.parentCategory && formik.errors.parentCategory && <div>{formik.errors.parentCategory}</div>}
        </div>

        <div className='wrapper'>
          <label>Card Image</label>
          <input type="file" name="cardImage" accept="image/*" onChange={(e) => formik.setFieldValue("cardImage", e.currentTarget.files[0])} />
          {formik.touched.cardImage && formik.errors.cardImage && <div>{formik.errors.cardImage}</div>}
        </div>

        <div className='wrapper'>
          <label>Hero Image</label>
          <input type="file" name="heroImage" accept="image/*" onChange={(e) => formik.setFieldValue("heroImage", e.currentTarget.files[0])} />
          {formik.touched.heroImage && formik.errors.heroImage && <div>{formik.errors.heroImage}</div>}
        </div>

        <button type="submit">Upload Subcategory</button>
      </form>
    </div>
  );
};

export default SubCategoryUpload;
