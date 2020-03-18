import React from "react";
import PropTypes from 'prop-types'

import './Btn.scss'

const Btn = ({ btnNameAdd, btnNameRemove, onClick }) => {
  return (
    <div className="btn">
      <button onClick={onClick}>
        {btnNameAdd}
        {btnNameRemove}
      </button>
    </div>
  );
};

Btn.propTypes = {
  btnNameAdd: PropTypes.string.isRequired,
  btnNameRemove: PropTypes.string,
  onClick: PropTypes.func
}


export default Btn;


