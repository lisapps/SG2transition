import React, { useState, useEffect } from "react";

const E_ContentBtn = ({ btnData, click, currentContent }) => {
  const [active, setActive] = useState(false);

  function checkActive() {
    btnData.active != currentContent ? setActive(false) : setActive(true);
  }
  function handleClick() {
    click(btnData);
    checkActive();
  }

  useEffect(() => {
    // btnName.path != currentContent ? setActive(false) : setActive(true);
    checkActive();
  }, [currentContent]);

  return (
    // Classname needs to match atomic type. This case 'e-' rather than 's-'
    <li
      aria-hidden="true"
      className={`s-contentNav__list__item ${active ? "-active" : ""}`}
      onClick={() => handleClick()}
    >
      {btnData.name}
    </li>
  );
};

export default E_ContentBtn;
