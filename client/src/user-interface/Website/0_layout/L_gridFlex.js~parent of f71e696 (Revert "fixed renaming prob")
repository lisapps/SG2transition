import React from "react";

const L_GridFlex = ({ props, children }) => {
  return (
    <ul
      className={`l-gridFlex` + props.sectionClass}
      data-min={props.minWidth}
      data-max={props.maxWidth}
    >
      {children.map((child, index) => (
        <li className={props.itemClass} key={index}>
          {child}
        </li>
      ))}
    </ul>
  );
};

export default L_GridFlex;
