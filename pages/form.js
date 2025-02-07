import { useState } from "react";
import Nav from "../components/Nav";

export default function Form() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* Navigation */}
      <Nav />

      {/* Form Content */}
      <div className="form-container">
        <h1>Enter your name:</h1>
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => setSubmitted(true)}>Submit</button>

        {/* Greeting Message */}
        {submitted && <p>Hello, {name}!</p>}
      </div>

      {/* Styling */}
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
          color: #0070f3;
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
          background-color: #0070f3;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #005bb5;
        }
        p {
          margin-top: 20px;
          font-size: 18px;
          color: #333;
        }
      `}</style>
    </div>
  );
}
