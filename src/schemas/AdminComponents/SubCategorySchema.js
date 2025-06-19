import * as Yup from 'yup'

const validationSchema = Yup.object({
      name: Yup.string().required('Name is required'),
      tagLine: Yup.string().required('Tagline is required'),
      parentCategory: Yup.string().required('Parent category is required'),
      cardImage: Yup.mixed().required('Card image is required'),
      heroImage: Yup.mixed().required('Hero image is required')
    });

export default validationSchema