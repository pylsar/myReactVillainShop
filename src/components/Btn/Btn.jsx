import React from "react";

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

export default Btn;
