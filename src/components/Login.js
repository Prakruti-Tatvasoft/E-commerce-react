import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getAllCartProducts, userLogin } from '../redux/actions'
import { loginSchema } from '../schemas/user.schema'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValues = {
        email: "",
        password: ""
    }
    const {
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            await dispatch(userLogin(values))
            await dispatch(getAllCartProducts())
        }
    });

    const { user, status } = useSelector(state => state.member)
    
    let message = ''
    if(status === 400) {
        message  = 'Invalid credentials'
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    { message}
                    <h2 className="mb-3">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <p style={{ color: "red" }}> {errors?.email}</p>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <p style={{ color: "red" }}> {errors?.password}</p>
                        </div>
                        <button type="submit" className="btn btn-primary mx-1">
                            Log In
                        </button>
                        <label>New user ? <Link to='/signup'>sign up</Link></label>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Login
