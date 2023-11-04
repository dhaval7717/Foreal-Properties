import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    gender: 'male',
    birthdate: '',
    education: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (isFormSubmitted) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 10000); // Refresh the page after 5 seconds
      return () => clearTimeout(timer); // Clear the timer when the component unmounts
    }
  }, [isFormSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      setIsFormSubmitted(true);
      console.log('Form submitted with data:', formData);
    } else {
      // Show errors in the fields
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (formData.name.trim() === '') {
      errors.name = 'Name is required';
    }
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      errors.email = 'Email is invalid';
    }
   
    if (formData.password !== formData.confirm_password) {
      errors.confirm_password = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <> 
<div class="container">
  {/*Logo and Heading */}
    <div class="logo-container">
          <img src="./logo2.png" alt="Logo" class="logo"/>
          <h2 class="formal-property1">F O R E A L</h2>
          <h2 class="formal-property2"> PROPERTY</h2>
    </div>
  {/***************** */}
  <h3 class="create_ac"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span> Create an account</h3> 
    
  <form onSubmit={handleSubmit} method="POST">
    {/*Name */}
  <label htmlFor="name">Name*</label>
  <input type="text"
     id="name"
     name="name"
     required placeholder="Enter your name"
     onChange={handleInputChange}
     value={formData.name}/> 
     <br/><br/>

  <label htmlFor="email">Email*</label>
            <input type="email"
             id="email" name="email"
             required placeholder="Enter your Email"
             onChange={handleInputChange}
             value={formData.email}
             />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
             <br/><br/>

          
          {/*password */}
          <label htmlFor="password">Password*</label>
          <input type="password"
          id="password"
          name="password"
          required 
          placeholder="Create a Password"
          onChange={handleInputChange}
          value={formData.password}/>
          {formErrors.password && <p className="error">{formErrors.password}</p>}
          <br/><br/>

            {/*confirm password */}
            <label htmlFor="confirm_password">Confirm Password*</label>
            <input  type="password"
            id="confirm_password"
            name="confirm_password"
            required
            placeholder="Confirm Password"
            onChange={handleInputChange}
            value={formData.confirm_password}/>
             {formErrors.confirm_password && (
            <p className="error">{formErrors.confirm_password}</p>
          )}
            <br/><br/>
            {/*Gender Section */}
            <label for="gender">Select Gender</label>
            <div class="gender_select">
              {/*Male */}
            <input class="male_in"
             type="radio"
              id="male"
              name="male"
              onChange={handleInputChange}
              value={formData.male}/>
            <label htmlFor="male"><span class="gender_label">Male</span></label>

            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {/*Female */}
            <input class="female_in"
            type="radio" 
            id="female" 
            name="female" 
            onChange={handleInputChange}
            value={formData.female}/>
            <label htmlFor="female"><span class="gender_label">Female</span></label>
            </div>

          {/*Birth date */}
          <br/>
            <label htmlFor="birthdate">Select Birthday Date</label>
            <input  type="date"
            id="birthdate"
            name="birthdate"
            onChange={handleInputChange}
            value={formData.birthdate} required/><br/><br/>

          {/*Education */}
          <div class="ed">
          <label htmlFor="education">Select Education:</label>
            <select id="education"
            name="education"
            onChange={handleInputChange}
            value={formData.education} required >
                <option value="" disabled selected>Select Education Qualification 
                </option>
                <option value="diploma">DIPLOMA</option>
                <option value="btech">B.Tech/B.E</option>
                <option value="diploma">M.Tech/M.E</option>
                <option value="diploma">B.B.A</option>
                <option value="diploma">M.B.A</option>
                <option value="diploma">B.COM</option>
                <option value="diploma">M.COM</option>
                <option value="diploma">OTHER</option>
            </select>
          </div>
          <br/>

          {/*Terms & Condition */}
          <div class="terms">
                <input type="checkbox" id="terms" name="terms" required/>
                <label for="terms">I agree to the terms and conditions:</label>
            </div>
            <br/>
          {/*Signup Button */}
          <input type="submit" class="submit-button" value="Sign Up" />
          {/*Already  */}
          <div class="already_ac">
          <p class="ac_question">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           Already have an account? <a class="login" href='#login'>login</a></p>
          </div>
         
  </form>
    
  {isFormSubmitted && (
      <>
       <p className="success-box">Thank you for signing up!</p>
       <img class="image" src="./timer-time.gif" />
      </>      )}
 
</div>
    </>
  );
}

export default App;
