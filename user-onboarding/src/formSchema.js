import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(2, 'Name must be 2 characters or longer'),
    email: yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup.string()
        .min(8, 'Password is too short, 8 characters minimum')
        .required('Password is required'),
    tos: yup.boolean()
        .oneOf([true],'TOS must be accepted before proceeding')
        .required('Please read and accept the TOS before proceeding')
})