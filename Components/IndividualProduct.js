import React from "react";
import AddToCartBtn from "../Components/AddToCartBtn";
export default function IndividualProduct({ img, item, price }) {
  return (
    <div
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img style={{ width: "80%" }} src={img} />
      <p style={{ fontSize: "20px" }}>{item}</p>
      <p
        style={{
          fontSize: "20px",
          marginTop: "-14px",
          marginBottom: "12px",
          color: "#c67edf",
        }}
      >
        Price: {price}
      </p>
      <AddToCartBtn />
    </div>
  );
}
