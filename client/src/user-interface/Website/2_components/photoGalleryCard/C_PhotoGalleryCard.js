/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from "react";
import DropZone from "../../../Styleguide/0_hooks/dropzone";

const C_PhotoGalleryCard = ({ title, smallImg, lgImg, imgNum, altText, description, classes }) => {
  const [featureImage, setFeatureImage] = useState({ preview: "" });

  let pTitle = title ? title : "Photo Title";
  let pSmallImg = smallImg ? smallImg : "https://styleguide.kingston.com/fpo/512/351/";
  let pLgImg = lgImg ? lgImg : "https://styleguide.kingston.com/fpo/1200/1200/";
  let pImgNum = imgNum ? imgNum : "0";
  let pAltText = altText ? altText : "Alternate Text";
  let pDescription = description ? description : "Photo Description";
  let pClasses = classes ? classes : "";

  return (
    <DropZone setImage={setFeatureImage}>
      <div
        className={`c-photoGalleryCard ` + pClasses}
        data-modalphoto="/fpo/1200/1200/"
        data-modal="newModal0"
        data-num={pImgNum}
        data-sid="slick-1"
        tabIndex="0"
      >
        <picture className={`c-photoGalleryCard__photo e-picture`} id="js-picture">
          <source srcSet={pSmallImg} media="(max-width:32em)" />
          <img src={featureImage.preview ? featureImage.preview : pLgImg} alt={pAltText} />
        </picture>

        <p className="c-photoGalleryCard__title">{pTitle}</p>

        <p className="c-photoGalleryCard__description">{pDescription}</p>
      </div>
    </DropZone>
  );
};

export default C_PhotoGalleryCard;
