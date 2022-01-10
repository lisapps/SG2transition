import React from "react";

const E_TextInput = ({
  title,
  name,
  id,
  required,
  value,
  label,
  placeholder,
}) => {
  let tName = name ? name : false;
  let tTitle = title ? title : false;
  let tId = id ? id : false;
  let tValue = value ? value : false;
  let tRequired = required ? true : false;
  let tLabel = label ? label : "Textarea Label";
  let tPlaceholder = placeholder ? placeholder : "Placeholder text";

  return (
    <div className="f-input">
      {tTitle && <p>{tTitle}</p>}
      <div className="f-input__string">
        <input
          type="text"
          title={tTitle}
          name={tName}
          id={tId}
          required={tRequired}
          value={tValue}
          placeholder={tPlaceholder}
        />
        <label htmlFor={tId}>{tLabel}</label>
      </div>
    </div>
  );
};

export default E_TextInput;
