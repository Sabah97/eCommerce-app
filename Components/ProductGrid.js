import React from "react";
import IndividualProduct from "./IndividualProduct";

export default function ProductGrid() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <IndividualProduct
          img="product-1.jpg"
          item="Black Tee"
          price="500BDT"
        />
      </div>
      <div className="grid-item">
        <IndividualProduct
          img="product-1.jpg"
          item="Black Tee"
          price="500BDT"
        />
      </div>

      <div className="grid-item">
        <IndividualProduct
          img="product-1.jpg"
          item="Black Tee"
          price="500BDT"
        />
      </div>

      <div className="grid-item">
        <IndividualProduct
          img="product-1.jpg"
          item="Black Tee"
          price="500BDT"
        />
      </div>
    </div>
  );
}
