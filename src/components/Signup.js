import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { saveUserData } from '../redux/actions';
import { signupSchema } from '../schemas/user.schema';

const Signup = () => {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    } = useFormik({
        initialValues: initialValues,
        validationSchema: signupSchema,
        onSubmit: (values) => {
            dispatch(saveUserData(values))
            navigate('/home')
        }
    });


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="mb-3">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                            />
                            <p style={{ color: "red" }}> {errors?.firstName}</p>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                            />
                            <p style={{ color: "red" }}> {errors?.lastName}</p>
                        </div>
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
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                            <p style={{ color: "red" }}> {errors?.confirmPassword}</p>
                        </div>
                        <button type="submit" className="btn btn-primary mx-1">
                            submit
                        </button>
                        <label>Already user ? <Link to='/'>login</Link></label>
                    </form>
                </div>
            </div>
        </div >

    )
}

export default Signup
