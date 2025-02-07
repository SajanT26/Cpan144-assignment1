import { useState } from "react";
import Nav from "../components/Nav";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
  }); 
  const [submitted, setSubmitted] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <Nav />
      <h1>Fill Out the Form</h1>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dob"
        placeholder="Your Date of Birth"
        value={formData.dob}
        onChange={handleChange}
      />

      <button onClick={() => setSubmitted(true)}>Submit</button>

      {submitted && (
        <div className="result">
          <h2>Submitted Information</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Date of Birth:</strong> {formData.dob}</p>
        </div>
      )}

      <style jsx>{`
        .form-container {
          text-align: center;
          margin: 20px auto;
          padding: 20px;
          max-width: 400px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
          margin-bottom: 20px;
          color:rgb(24, 2, 102);
        }
        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        button {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          background-color:rgb(243, 0, 0);
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #005bb5;
        }
        .result {
          margin-top: 20px;
          text-align: left;
        }
        .result h2 {
          color: #0070f3;
        }
      `}</style>
    </div>
  );
}
