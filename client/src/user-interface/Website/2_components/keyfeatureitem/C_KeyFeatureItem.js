import React from "react";

const C_KeyFeatureItem = ({ title, svg, copy }) => {
  let kfTitle = title ? title : "Feature Heading";
  let kfSVG = svg ? svg : "../images/icons-map.svg#iphone-ipad";
  let kfCopy = copy
    ? copy
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <li className="c-features__item">
      <h4>
        <svg>
          <use xmlns="http://www.w3.org/1999/xlink" xlinkHref={kfSVG}></use>
        </svg>
        <span>{kfTitle}</span>
      </h4>
      <p>{kfCopy}</p>
    </li>
  );
};

export default C_KeyFeatureItem;
