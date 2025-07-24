import { validateYupSchema } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
      name: Yup.string().required("Required"),
      serialNumber: Yup.number().required("Required"),
      rate: Yup.number().required("Required"),
      description: Yup.string().required("Required"),
      stock: Yup.number().required("Required"),
      discount: Yup.number(),
      category: Yup.string().required("Required"),
      subCategory: Yup.string().required("Required"),
    })
export default validationSchema 