import React, { useState } from "react";
import DropZone from "../../../Styleguide/0_hooks/dropzone";

const C_BannerCard = ({ link, title, altText, copy }) => {
  const [featureImage, setFeatureImage] = useState({ preview: "" });

  let bLink = link ? link : "#bannerLink";
  let bTitle = title ? title : "Banner Title";
  let bImg = "https://styleguide.kingston.com/fpo/510/200";
  let bAltText = altText ? altText : "Alternate Text";
  let bCopy = copy ? copy : "Banner Copy";

  return (
    <DropZone setImage={setFeatureImage}>
      <div className={`c-bannerCard`}>
        <a className="c-bannerCard__img" href={bLink} title={bTitle}>
          <img
            src={featureImage.preview ? featureImage.preview : bImg}
            alt={bAltText}
            data-dropdown="true"
          />
        </a>
        <div className="c-bannerCard__details">
          <h3>{bTitle}</h3>
          {bCopy}
        </div>
      </div>
    </DropZone>
  );
};

export default C_BannerCard;
