import React from "react";

const C_CallToAction = ({ label, actions }) => {
  let cLabel = label ? label : "Buy From";
  let cActions = actions ? actions : [];

  return (
    <>
      <div className="tab">
        <span>{cLabel}</span>
      </div>
      <div className="tab-content">
        {cActions.map((action) => (
          <a href={action.link} title={action.title} key={action.title}>
            <img src={action.image} alt={action.title} />
          </a>
        ))}
      </div>
    </>
  );
};

export default C_CallToAction;
