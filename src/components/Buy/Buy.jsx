import React from "react";
import PropTypes from 'prop-types'

import './Buy.scss'

const Buy = ({ name, price }) => {
  return (
    <div className="buy">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};

Buy.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Buy;