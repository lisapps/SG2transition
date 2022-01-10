import React, { useState } from "react";
import DropZone from "../../../Styleguide/0_hooks/dropzone";

const C_ReviewCard = ({ copy, url, linkText, src, classes }) => {
  const [featureImage, setFeatureImage] = useState({ preview: "" });

  let cCopy = copy
    ? copy
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";
  let curl = url ? url : null;
  let clinkText = linkText ? linkText : null;
  let csrc = src ? src : null;
  let cClasses = classes ? classes : "";

  return (
    <DropZone setImage={setFeatureImage}>
      <div className={`c-reviewCard ` + cClasses}>
        <p>{cCopy}</p>

        {src && <img src={featureImage.preview ? featureImage.preview : csrc} alt="Review Logo" />}

        {curl && (
          <a href={curl} target="_self">
            {clinkText}
          </a>
        )}
      </div>
    </DropZone>
  );
};

export default C_ReviewCard;
