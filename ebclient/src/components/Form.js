import React, { useState } from "react";
import axios from "axios";

function Form({ onRefetch }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object to send in the POST request
    const postData = {
      email,
      message,
      time,
    };

    try {
      // Send a POST request to the specified URL
      const response = await axios.post("http://localhost:5001", postData);
      console.log("POST Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    onRefetch();
    setEmail("");
    setMessage("");
    setTime("");
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputContainerStyle}>
          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="message" style={labelStyle}>
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={textareaStyle}
            required
          />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="time" style={labelStyle}>
            Time:
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}

const containerStyle = {
  textAlign: "center",
  margin: "20px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const inputContainerStyle = {
  marginBottom: "15px",
};

const labelStyle = {
  fontWeight: "bold",
};

const inputStyle = {
  padding: "8px",
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const textareaStyle = {
  padding: "8px",
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "4px",
  minHeight: "100px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginTop: "10px",
};

export default Form;
