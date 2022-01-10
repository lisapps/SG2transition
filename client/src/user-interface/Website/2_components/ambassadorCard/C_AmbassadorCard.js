import React, { useState } from "react";

const C_AmbassadorCard = ({ url, title, smallImg, lgImg, altText, name, classes }) => {
  let aUrl = url ? url : "#ambassadorTitle";
  let aTitle = title ? title : "Ambassador Title";
  let aSmallImg = smallImg ? smallImg : "https://styleguide.kingston.com/fpo/600/410";
  let aLgImg = lgImg ? lgImg : "https://styleguide.kingston.com/fpo/600/600";
  let aAltText = altText ? altText : "Alternate Text";
  let aName = name ? name : "Ambassador Name";
  let aClasses = classes ? classes : "";

  const [featureImage, setFeatureImage] = useState({ preview: "" });

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFeatureImage({ preview: URL.createObjectURL(file) });
    }
  };

  return (
    // <DropZone setImage={setFeatureImage}>
    <div
      className={`c-ambassadorCard ` + aClasses}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
    >
      <a href={aUrl} title={aTitle}>
        <picture className="e-picture" id="js-picture">
          <source
            srcSet={featureImage.preview ? featureImage.preview : aSmallImg}
            media="(max-width: 37.5em)j"
          />
          <img src={featureImage.preview ? featureImage.preview : aLgImg} alt={aAltText} />
        </picture>
        <div className={`c-ambassadorCard__name u-txt-center`}>
          <h4>{aName}</h4>
        </div>
      </a>
    </div>
    // </DropZone>
  );
};

export default C_AmbassadorCard;
