import React from "react";

const E_Tag = ({ link, text, classes }) => {
  let myLink = link ? link : "#buttonLink";
  let myText = text ? text : "Button Text";
  let myClasses = classes ? classes : "";

  return (
    <a className={`e-tag` + myClasses} href={myLink} aria-label="aria text">
      {myText}
    </a>
  );
};

export default E_Tag;
