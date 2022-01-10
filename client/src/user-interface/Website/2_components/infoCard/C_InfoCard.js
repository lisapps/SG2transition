import React, { useState, useContext } from "react";
import ToastContext from "../../../../ToastContext";

const C_InfoCard = ({ link, title, image, copy, cta }) => {
  let iLink = link ? link : "#blogLink";
  let iTitle = title
    ? title
    : "Blog Article Title Blog Article Title Blog Article Title Blog Article Title Blog Article Title";
  let iImage = image ? image : "https://styleguide.kingston.com/fpo/355/150/";
  let iCopy = copy ? copy : "Info Card Copy.";
  let iCTA = cta ? cta : "Learn More";

  // Can't use dropzone bc it adds a container div that breaks the gridflex styles
  const [featureImage, setFeatureImage] = useState({ preview: "" });
  const { setToastOptions } = useContext(ToastContext);

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
      setToastOptions({ text: "Image added." });
    }
  };

  return (
    <div className="c-infoCard">
      <div className="c-infoCard__img">
        <img
          src={featureImage.preview ? featureImage.preview : iImage}
          alt="Info Card"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
        />
      </div>
      <h5 className="c-infoCard__title">{iTitle}</h5>
      <p className="c-infoCard__copy">{iCopy}</p>
      <div className="c-infoCard__cta">
        <a className="e-btn" href={iLink}>
          {iCTA}
        </a>
      </div>
    </div>
  );
};

export default C_InfoCard;
