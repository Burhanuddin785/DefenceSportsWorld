import { validateYupSchema } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
      name: Yup.string().required("Required"),
      serialNumber: Yup.number().required("Required"),
      rate: Yup.number().required("Required"),
      description: Yup.string().required("Required"),
      stock: Yup.number().required("Required"),
      discount: Yup.number(),
      category: Yup.object({
        id: Yup.string().required("Category ID is required"),
        name: Yup.string().required("Category name is required")
      }).required("Category is required"),
      subCategory: Yup.object({
        id: Yup.string().required("SubCategory ID is required"),
        name: Yup.string().required("SubCategory name is required")
      }).required("SubCategory is required"),
    })
export default validationSchema 