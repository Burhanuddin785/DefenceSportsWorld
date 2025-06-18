 import * as Yup from 'yup'
 
 const validationSchema = Yup.object({
    name: Yup.string().required("Category name is required"),
    templateImage: Yup.mixed().required("Template image is required"),
    heroImage: Yup.mixed().required("Hero image is required"),
    tagLine: Yup.string().required("Tagline is required")
  });

  export default validationSchema