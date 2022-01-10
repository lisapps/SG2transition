import React, { useState } from "react";
import DropZone from "../../../Styleguide/0_hooks/dropzone";

const C_RelatedProductCard = ({ name, url, title, src, description, classes }) => {
  const [featureImage, setFeatureImage] = useState({ preview: "" });

  let rName = name ? name : "Product Name";
  let rUrl = url ? url : "#productCardLink";
  let rTitle = title ? title : "Product Card Title";
  let rSrc = src ? src : "http://via.placeholder.com/200x52";
  let rDescription = description ? description : "Short Description";
  let rClasses = classes ? classes : "";

  return (
    <DropZone setImage={setFeatureImage}>
      <div className={`c-relatedProductCard ` + rClasses}>
        {/* <a className="c-relatedProductCard__link" href={rUrl} title={rTitle} aria-label={rTitle}></a> */}
        <div className="c-relatedProductCard__header">
          <h6 className="c-relatedProductCard__header__name">{rName}</h6>
        </div>

        <div className="c-relatedProductCard__image">
          <img src={featureImage.preview ? featureImage.preview : rSrc} alt={rName} />
        </div>

        <div className={`c-relatedProductCard__details c-lineClamp`}>
          <p className={`c-relatedProductCard__details__shortDesc c-lineClamp__text`}>
            {rDescription}
          </p>
        </div>
      </div>
    </DropZone>
  );
};

export default C_RelatedProductCard;
