import * as Yup from 'yup'

const signupSchema =Yup.object({
    firstName: Yup.string().min(3).max(25).required(),
    lastName: Yup.string().min(3).max(25).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(4).max(8).required(),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'),null]),
})
const loginSchema =Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(4).max(8).required()
})

export {
    signupSchema,
    loginSchema
}