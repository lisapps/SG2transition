import React from "react";

const E_Checkbox = ({ title, name, id, required, checked, label }) => {
  let cTitle = title ? title : false;
  let cName = name ? name : "checkboxName";
  let cLabel = label ? label : "Checkbox Label";
  let cId = id ? id : "checkboxID";
  let cChecked = checked ? checked : false;
  let cRequired = required ? true : false;

  return (
    <div className="f-input">
      {cTitle && <p>{cTitle}</p>}
      <div className="f-input__checkbox">
        <input
          type="checkbox"
          name={cName}
          id={cId}
          required={cRequired}
          checked={cChecked}
        ></input>
        <label htmlFor={cId}>{cLabel}</label>
      </div>
    </div>
  );
};

export default E_Checkbox;
