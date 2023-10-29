import React from 'react';
import { TextField } from '../../components/TextField';
import { Formik, Form } from 'formik';
import Card from '../../UI/Card';
import InstagramLogo from '../../components/Logo';
import { FacebookButton, SubmitButton } from '../../components/Button';
import OrDivider from '../../components/OrDivider';
import GetApp from '../../components/GetApp'
import { Link } from 'react-router-dom';


const textField = [
    { type: 'text', name: 'email', placeHolder: "Phone number, username or email" },
    { type: 'password', name: 'password', placeHolder: "Password" }]

export default function Login() {
    return (
        <Card>
            <Formik initialValues={{
                email: '',
                fullName: '',
                username: '',
                password: ''
            }}
                // validationFSchema={LoginSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}>
                {(formik) => (
                    <Form className='px-12 py-6 xs:border-0 sm:border md:border lg:border sm:mx-auto '>
                        <InstagramLogo /> <br />
                        {textField.map((field, index) => {
                            return <TextField key={index} type={field.type} name={field.name} placeHolder={field.placeHolder} />
                        })}
                        <SubmitButton value='Log in' />
                        <OrDivider /> <br />
                        <FacebookButton />
                        <p className='mt-5 text-center text-sm'>Forgot password?</p>
                    </Form>
                )}
            </Formik>
            <Card >
                <p className="text-base text-center py-6 xs:border-0 sm:border md:border lg:border">Don't have an account?
                    <Link to='/signup' className='text-sky-500 font-semibold'>&nbsp; Sign up</Link>
                </p>
            </Card>
            <GetApp /> <br />
        </Card >
    )
}
