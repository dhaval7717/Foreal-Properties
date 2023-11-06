import React ,{ useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password and Confirm password should be same')
    .required('Confirm Password is required'),
  gender: Yup.string().required('Select Gender is required'),
  birthdate: Yup.date().required('Select Birthday Date is required'),
  education: Yup.string().required('Select Education is required'),
  terms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
});

const App = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  useEffect(() => {
    if (isFormSubmitted) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 10000); // Refresh the page after 5 seconds
      return () => clearTimeout(timer); // Clear the timer when the component unmounts
    }
  }, [isFormSubmitted]);
  
  return (


    <div className="container">
      <div class="logo-container">
          <img src="./logo2.png" alt="Logo" class="logo"/>
          <h2 class="formal-property1">F O R E A L</h2>
          <h2 class="formal-property2"> PROPERTY</h2>
    </div>
  {/***************** */}
  <h3 class="create_ac"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span> Create an account</h3> 

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirm_password: '',
          gender: '',
          birthdate: '',
          education: '',
          terms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log('Form submitted with data:', values);
          setIsFormSubmitted(true);
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <div className="input-field">
            <label htmlFor="name">Name*</label>
            <Field type="text" id="name" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div><br/>

          <div className="input-field">
            <label htmlFor="email">Email*</label>
            <Field type="email" id="email" name="email" placeholder="Enter your Email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div><br/>

          <div className="input-field">
            <label htmlFor="password">Password*</label>
            <Field type="password" id="password" name="password" placeholder="Create a Password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div><br/>

          <div className="input-field">
            <label htmlFor="confirm_password">Confirm Password*</label>
            <Field type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" />
            <ErrorMessage name="confirm_password" component="div" className="error" />
          </div><br/>

          <div className="gender_select">
            <label>Select Gender*</label>
            <div class="m-f">
            <div class="m">
              <Field type="radio" id="male" name="gender" value="Male" />
              <label htmlFor="male">Male</label>
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div class="f">
              <Field type="radio" id="female" name="gender" value="Female" />
              <label htmlFor="female">Female</label>
            </div>
            </div>
          </div>
          <ErrorMessage name="gender" component="div" className="error" /><br/>
          <div className="input-field">
            <label htmlFor="birthdate">Select Birthday Date*</label>
            <Field type="date" id="birthdate" name="birthdate" />
            <ErrorMessage name="birthdate" component="div" className="error" />
          </div>&nbsp;

          <div className="ed">
            <label htmlFor="education">Select Education*</label>
            <Field as="select" id="education" name="education">
              <option value="" disabled>Select Education Qualification</option>
              <option value="diploma">DIPLOMA</option>
              <option value="btech">B.Tech/B.E</option>
              <option value="mtech">M.Tech/M.E</option>
              <option value="bba">B.B.A</option>
              <option value="mba">M.B.A</option>
              <option value="bcom">B.COM</option>
              <option value="mcom">M.COM</option>
              <option value="other">OTHER</option>
            </Field>
            <ErrorMessage name="education" component="div" className="error" />
          </div>&nbsp;

          <div className="terms">
            <Field type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">I agree to the terms and conditions*</label>
            
          </div>
          <ErrorMessage name="terms" component="div" className="error" />&nbsp;
          <input type="submit" className="submit-button" value="Sign up"/>
          

          <div className="already_ac">
            <p className="ac_question">Already have an account? <a className="login" href="#login">login</a></p>
          </div>
        </Form>
        
      </Formik>
      {isFormSubmitted && (
      <>
       <p className="success-box">Thank you for signing up!</p>
       <img class="image" src="./timer-time.gif" />
      </>      )}

    </div>
  );
};

export default App;
