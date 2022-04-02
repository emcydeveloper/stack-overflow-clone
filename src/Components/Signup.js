import "../Styles/signup.css";

export default function Signup() {
  return (
    <div className="signup">
      
      <form>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          // onChange={handleChange}
          name="firstName"
          // value={formData.firstName}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          // onChange={handleChange}
          name="lastname"
          // value={formData.lastname}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          // onChange={handleChange}
          name="email"
          // value={formData.email}
        />
        <label htmlFor="mobile">Mobile no.</label>
        <input
          type="tel"
          placeholder="Mobile"
          // onChange={handleChange}
          name="mobile"
          // value={formData.mobile}
        />

        <label htmlFor="Country">Country</label>
        <input
          type="text"
          placeholder="Country"
          // onChange={handleChange}
          name="country"
          // value={formData.country}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          placeholder="City"
          // onChange={handleChange}
          name="city"
          // value={formData.city}
        />

        <label htmlFor="state">State</label>
        <input
          type="text"
          placeholder="State"
          // onChange={handleChange}
          name="state"
          // value={formData.state}
        />

        <textarea
          // value={formData.comments}
          placeholder="Comments"
          // onChange={handleChange}
          name="comments"
        />
      </form>
    </div>
  );
}
