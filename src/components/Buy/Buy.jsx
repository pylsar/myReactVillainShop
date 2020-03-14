import React from "react";

const Buy = ({ name, price }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};

export default Buy;