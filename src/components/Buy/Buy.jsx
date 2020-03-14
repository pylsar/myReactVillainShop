import React from "react";

import './Buy.scss'

const Buy = ({ name, price }) => {
  return (
    <div className="buy">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};

export default Buy;