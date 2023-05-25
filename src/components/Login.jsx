import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export function Login() {
    let navigate = useNavigate();

    let [formValues, setFormValues] = useState({
        email: 'inital email',
        password: 6
    })

    let [errors, setErrors] = useState({
        email: null,
        password: null
    })

    let loginFun = (e) => {
        e.preventDefault();
        if (errors.email || errors.password) {
            return;
        }
        console.log("Add");
        console.log(formValues);
        navigate('/products')
    }

    let operationHandler = (e) => {

        if (e.target.name == 'email') {
            if (e.target.value.length >= 10) {
                setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value
                })
                setErrors({
                    ...errors,
                    email: null
                })

            }
            else {
                setErrors({
                    ...errors,
                    email: "Email must be greater than or equal 10"
                })
            }
        }
        if (e.target.name === 'password') {
            if (e.target.value >= 6) {
                setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value
                })
                setErrors({
                    ...errors,
                    password: null
                })

            }
            else {
                setErrors({
                    ...errors,
                    password: "Password must be greater than or equal 6"
                })
            }
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div col='12'>
                <div className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '800px'}}>
                    <div className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                        <h2 className="fw-bold mb-2 text-uppercase">Login Form</h2>
                        <Form className='container mt-4 ms-2 alert alert-primary' onSubmit={loginFun}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Email</Form.Label>
                    <Form.Control onChange={operationHandler} type="email" name='email' placeholder="Enter Your Email" required />
                    <Form.Text className="text-danger">
                        {errors.email}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Your Password</Form.Label>
                    <Form.Control onChange={operationHandler} type="password" name='password' placeholder="Enter Your Password" required />
                    <Form.Text className="text-danger">
                        {errors.password}
                    </Form.Text>
                </Form.Group>
                <Button className='btn-lg' variant="warning" type="submit">
                    Login
                </Button>
            </Form>
         </div>
                </div>
        </div>
        </div>
    )
}  