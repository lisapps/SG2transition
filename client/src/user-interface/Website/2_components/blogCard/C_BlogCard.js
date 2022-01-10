import React, { useState, useContext } from "react";
import ToastContext from "../../../../ToastContext";

const C_BlogCard = ({ link, tags, title, image, altText, copy, classes, targetWindow }) => {
  let bLink = link ? link : "#blogLink";
  let bTargetWindow = targetWindow ? targetWindow : "_self";
  let bTags = tags
    ? tags
    : [
        { url: "#", tag: "Tag Text Here" },
        { url: "#", tag: "Tag Text Here" },
        { url: "#", tag: "Longer Tag Text Here" },
        { url: "#", tag: "Tag Text Here" },
        { url: "#", tag: "Tag Text Here" },
        { url: "#", tag: "Tag Text Here" },
        { url: "#", tag: "Tag Text Here" },
      ];
  let bTitle = title
    ? title
    : "Blog Article Title Blog Article Title Blog Article Title Blog Article Title Blog Article Title";
  let bImage = image ? image : "https://styleguide.kingston.com/fpo/720/405/";
  let bAltText = altText ? altText : "Alternate Text";
  let bClasses = classes ? classes : "";
  let bCopy = copy
    ? copy
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
    <li>
      <div className={`c-blogCard ` + bClasses}>
        <a className="c-blogCard__img" href={bLink} target={bTargetWindow} title={bTitle}>
          <img
            src={featureImage.preview ? featureImage.preview : bImage}
            alt={bAltText}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
          />
        </a>
        <div className="c-blogCard__container">
          <ul className="c-blogCard__tags" aria-label="Blog Tags">
            {bTags.map((tag, index) => (
              <li className="c-blogCard__tags__item" key={index}>
                <a className="u-txt-uppercase" href={tag.url}>
                  {tag.tag}
                </a>
              </li>
            ))}
          </ul>
          <h5 className="c-blogCard__heading">
            <a href={bLink} target={bTargetWindow}>
              {bTitle}
            </a>
          </h5>
          <p className="c-blogCard__copy">{bCopy}</p>
        </div>
      </div>
    </li>
  );
};

export default C_BlogCard;
