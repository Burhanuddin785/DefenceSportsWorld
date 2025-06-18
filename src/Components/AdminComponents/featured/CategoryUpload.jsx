import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik'
import validationSchema from '../../../schemas/AdminComponents/CategorySchema'

const CategoryUpload = () => {
    const form = useFormik(
        {
            validationSchema : validationSchema,
            initialValues : {
                name: "",
                templateImage: null,
                heroImage: null,
                tagLine: ""
            },
            onSubmit: async (values, {resetForm}) => {
                const confirm = window.confirm("Are you sure you want to add this category?");
                if(!confirm) return;

                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("templateImage", values.templateImage);
                formData.append("heroImage", values.heroImage);
                formData.append("tagLine", values.tagLine);

                try {
                    
                    const res = await axios.post("http://localhost:8080/api/categories", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                    }).then(window.alert("Category added successfully"));
                    console.log(res.data); // Show toast or success message
                    resetForm();
                } catch (err) {
                    console.error("Upload failed", err);
                }
            }

        }
    )
  return (
    <div className='CategoryUpload'>
        <form className='form' onSubmit={form.handleSubmit}>
            <div className='wrapper'>
            <div className="text">Name</div>
            <input
            type="text"
            name='name'
            value={form.values.name}
            className={"input " + (form.errors.name && form.touched.name) ? "isInvalid" : ""} onChange={form.handleChange}
            />
            {form.errors.name && form.touched.name && (
                <div className="error">{form.errors.name}</div>
            )}
            </div>

            <div className='wrapper'>
            <div className="text">Thumbnail Image</div>
            <input
            type="file"
            name='templateImage'
            className={"input " + (form.errors.templateImage && form.touched.templateImage) ? "isInvalid" : ""}
            onChange={(event) =>
            form.setFieldValue("templateImage", event.currentTarget.files[0])
            }/>
            {form.errors.templateImage && form.touched.templateImage && (
                <div className="error">{form.errors.templateImage}</div>
            )}
            </div>

            <div className='wrapper'>
            <div className="text">Hero Image</div>
            <input
            type="file"
            name='heroImage'
            className={"input " + (form.errors.heroImage && form.touched.heroImage) ? "isInvalid" : ""}
            onChange={(event) =>
            form.setFieldValue("heroImage", event.currentTarget.files[0])
            }/>
            {form.errors.heroImage && form.touched.heroImage && (
                <div className="error">{form.errors.heroImage}</div>    
            )}
            </div>

            <div className='wrapper'>
            <div className="text">Tag Line</div>
            <input
            type="text"
            name='tagLine'
            value={form.values.tagLine}
            className={"input " + (form.errors.tagLine && form.touched.tagLine) ? "isInvalid" : ""} onChange={form.handleChange}
            />
            {form.errors.tagLine && form.touched.tagLine && (
                <div className="error">{form.errors.tagLine}</div>
            )}
            </div>

            <button className="submit">Upload Category</button>
            
        </form>
    </div>
  )
}

export default CategoryUpload