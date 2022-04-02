import "../Styles/signup.css";
import { useState } from "react";
import userInfo from "../DataSource/UserInfo.js";

export default function Signup() {
  let userDetails = userInfo.data.users;
  const [formData, setFormData] = useState({
    id:"",
    firstName: "",
    lastname: "",
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
 
    let userID = userDetails.length+1;
    // console.log(userDetails,userID);
    
    userDetails = [...userDetails,{...formData,id:userID}]
    console.log(userDetails)
    event.preventDefault()
    // alert("submitted")
}

  return (
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
  );
}
