import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '../../components/TextField';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import Card from '../../UI/Card';
import InstagramLogo from '../../components/Logo/index';
import { FacebookButton, SubmitButton } from '../../components/Button';
import OrDivider from '../../components/OrDivider';
import GetApp from '../../components/GetApp'
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/Actions/auth';

const textField = [
  { type: 'text', name: 'email_or_phone', placeHolder: "Mobile Number or Email" },
  { type: 'text', name: 'fullName', placeHolder: "Full Name" },
  { type: 'text', name: 'username', placeHolder: "Username" },
  { type: 'password', name: 'password', placeHolder: "Password" }
]

const SignupSchema = Yup.object().shape({
  email_or_phone: Yup.string("Enter your Email/Phone Number")
    .required("Email/Phone Number is required")
    .test('test-name', 'Enter Valid Phone/Email',
      function (value) {
        const emailRegex = /^([a-zA-Z0-9_\.\-\!\#\$\%\^\&\*?\'\<\>])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9\-])+$/;
        const phoneRegex = /^[0-9]{10,11}$/; // Change this regex based on requirement
        let isValidEmail = emailRegex.test(value);
        let isValidPhone = phoneRegex.test(value);
        if (!isValidEmail && !isValidPhone) {
          return false;
        }
        return true;
      })
});


export default function SignUp() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch()
  }, [])
  return (
    <Card>
      <Formik initialValues={{
        email_or_phone: '',
        fullName: '',
        username: '',
        password: ''
      }}
        validationSchema={SignupSchema}
        validateOnChange={false}
        onSubmit={(values) => {
          dispatch(signUp(values))
        }}>
        {({ handleChange, handleBlur, handleSubmit, values, errors,
          touched }) => (
          <Form className='p-10 border'>
            <InstagramLogo />
            <h1 className='text-lg text-center text-gray-400 font-semibold py-3'>Sign up to see photos and videos from your friends.</h1>
            <FacebookButton />
            <OrDivider />
            {textField.map((field, index) => {
              return <TextField key={index} type={field.type} name={field.name} placeHolder={field.placeHolder} />
            })}
            <div className='text-[13px] text-center text-gray-500'>
              <p className='my-3'>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
              <p className='my-3'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
              </p>
            </div>
            <SubmitButton value='Sign up' />
          </Form>
        )}
      </Formik>
      <Card >
        <p className="border text-base text-center py-6">Have an account?
          <Link to='/login' className='text-sky-500 font-semibold'>&nbsp;Log in</Link>
        </p>
      </Card>
      <GetApp /> <br />
    </Card >
  )
}
