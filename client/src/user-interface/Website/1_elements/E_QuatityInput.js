import React from "react";

const E_QuantityInput = () => {
  return (
    <div className="f-input">
      <div className="f-quantity">
        <a className="f-quantity__btn" href="javascript: void(0)">
          <svg viewBox="0 0 16 2">
            <path d="M0 0h16v2H0z" />
          </svg>
        </a>
        <input maxLength="2" />
        <a className="f-quantity__btn" href="javascript: void(0)">
          <svg viewBox="0 0 16 16">
            <path d="M0 7h16v2H0z" />
            <path d="M7 0h2v16H7z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default E_QuantityInput;
