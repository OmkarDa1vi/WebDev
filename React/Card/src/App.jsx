import React from "react";
import Card from "./Card";

export default function Layout() {
  const product = {
    productName: "Car",
    productDes: "This is a car",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        gap: "20px",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      <Card data={product} />
      <Card
        data={{ ...product, productName: "Bike", productDes: "This is a bike" }}
      />
      <Card
        data={{
          ...product,
          productName: "Truck",
          productDes: "This is a truck",
        }}
      />
    </div>
  );
}
