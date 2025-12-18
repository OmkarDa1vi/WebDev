import React from "react";

function Card(props) {
  return (
    <div
      style={{
        border: "1px solid #ffffffff",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#ffffffff",
        flex: "1 1 300px",
        maxWidth: "100%",
        textAlign: "left",
      }}
      className="card"
    >
      <h3>Product Name: {props.data.productName}</h3>
      <p>Product Description: {props.data.productDes}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
        <button style={{ padding: "10px", cursor: "pointer", flex: 1 }}>
          Add to Cart
        </button>
        <button style={{ padding: "10px", cursor: "pointer", flex: 1 }}>
          Know More
        </button>
      </div>
    </div>
  );
}

export default Card;
