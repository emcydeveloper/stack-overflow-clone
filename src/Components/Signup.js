import SignupHeader from "./SignupHeader";
import "./Styles/signup.css";
import { useState } from "react";


export default function Signup() {

  const [formData, setFormData] = useState({
    // id:"",
    firstName: "",
    lastname: "",
    username:"",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    comments: "",
  });

  

  function handleChange(event) {
    console.log(event);
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    fetch('https://6248a7b220197bb4626b9de5.mockapi.io/userinfo', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Success');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error');
    });

        event.preventDefault()

}

  return (
    <div className="login-conintainer">
      <SignupHeader />
    <div className="signup">
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastname"
          value={formData.lastname}
        />
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="username"
          value={formData.username}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <label htmlFor="mobile">Mobile no.</label>
        <input
          type="tel"
          placeholder="Mobile"
          onChange={handleChange}
          name="mobile"
          value={formData.mobile}
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          placeholder="Country"
          onChange={handleChange}
          name="country"
          value={formData.country}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          placeholder="City"
          onChange={handleChange}
          name="city"
          value={formData.city}
        />

        <label htmlFor="state">State</label>
        <input
          type="text"
          placeholder="State"
          onChange={handleChange}
          name="state"
          value={formData.state}
        />

        <textarea
          value={formData.comments}
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
        />
        <button>Submit</button>
      </form>
    </div>
    </div>
  );
}
