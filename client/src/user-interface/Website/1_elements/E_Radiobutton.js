import React from "react";

const E_RadioButton = ({ title, name, id, required, checked, label }) => {
  let rTitle = title ? title : false;
  let rName = name ? name : "radioName";
  let rLabel = label ? label : "Radio Label";
  let rId = id ? id : "radioID";
  let rChecked = checked ? checked : false;
  let rRequired = required ? true : false;

  return (
    <div className="f-input">
      {rTitle && <p>{rTitle}</p>}
      <div className="f-input__radio">
        <input
          type="radio"
          name={rName}
          id={rId}
          required={rRequired}
          checked={rChecked}
        ></input>
        <label htmlFor={rId}>{rLabel}</label>
      </div>
    </div>
  );
};

export default E_RadioButton;
