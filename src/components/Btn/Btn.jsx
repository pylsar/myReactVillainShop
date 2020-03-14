import React from "react";

const Btn = ({ btnNameAdd, btnNameRemove, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>
        {btnNameAdd}
        {btnNameRemove}
      </button>
    </div>
  );
};

export default Btn;
