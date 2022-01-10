import React from "react";

const E_button = ({ action, title, link, target, text, iconID, classes }) => {
  let bAction = action ? action : false;
  let bTitle = title ? title : "Button Title";
  let bLink = link ? link : "#buttonLink";
  let bTarget = target ? target : "_self";
  let bText = text ? text : "Button Text";
  let biconID = iconID ? iconID : false;
  let bClasses = classes ? classes : "";

  return (
    <>
      {bAction ? (
        <button className={`e-btn ` + bClasses}>
          {biconID ? (
            <svg>
              <use
                xlinkHref={"../../../../public/images/icons-map.svg#" + biconID}
              />
            </svg>
          ) : null}
          <span>{bText}</span>
        </button>
      ) : (
        <a
          className={`e-btn` + bClasses}
          href={bLink}
          target={bTarget}
          title={bTitle}
        >
          {biconID ? (
            <svg>
              <use
                xlinkHref={"../../../../public/images/icons-map.svg#" + biconID}
              />
            </svg>
          ) : null}
          <span>{bText}</span>
        </a>
      )}
    </>
  );
};

export default E_button;
