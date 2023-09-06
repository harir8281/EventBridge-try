import React from "react";

function ListItem({ email, message, time }) {
  return (
    <div style={cardStyle}>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Message:</strong> {message}
      </div>
      <div>
        <strong>Time:</strong> {time}
      </div>
    </div>
  );
}

function List({ data }) {
  return (
    <div>
      {data?.map((item, index) => (
        <ListItem
          key={index}
          email={item.email}
          message={item.message}
          time={item.time}
        />
      ))}
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "10px",
  margin: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

export default List;
