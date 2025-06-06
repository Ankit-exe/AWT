import React, { useState } from "react";

export const Newform = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <div>
        <div>Step {step} of 3</div>
      </div>

      {step === 1 && (
        <div>
          <h2>Personal Information</h2>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Email</h2>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
            <h2>Contact No.</h2>
          <div>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      <div>
        {step > 1 && <button onClick={prevStep}>Previous</button>}
        {step < 3 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={() => console.log(formData)}>Submit</button>
        )}
      </div>
    </div>
  );
};
