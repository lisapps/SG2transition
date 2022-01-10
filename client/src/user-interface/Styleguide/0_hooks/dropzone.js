import React, { useContext } from "react";
import ToastContext from "../../../ToastContext";

const H_dropZone = ({ setPhone, setTablet, setDesktop, setImage, children, pictureTag }) => {
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

  const validateFile = (file) => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/x-icon"];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  const fileDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log("inside file drop");
    if (pictureTag) {
      const files = e.target.files || e.dataTransfer.files;
      // console.log("inside has pic tag");
      for (let key in files) {
        let file = files[key];

        if (validateFile(file)) {
          let img = new Image();
          img.src = URL.createObjectURL(file);

          img.onload = () => {
            if (img.width <= 512) {
              setPhone({ phone: img.src });
              setToastOptions({ text: "Image added. Resize to the mobile view." });
            }
            if (img.width <= 1024 && img.width > 512) {
              setTablet({ tablet: img.src });
              setToastOptions({ text: "Image added. Resize to the tablet view." });
            }
            if (img.width > 1024) {
              setDesktop({ desktop: img.src });
              setToastOptions({ text: "Image added. Resize to the desktop view." });
            }
          };
        }
      }
    } else {
      const file = e.dataTransfer.files[0];
      // console.log("single file");
      if (validateFile(file)) {
        console.log("passed single validate file");
        setToastOptions({ text: "Image added." });
        setImage({ preview: URL.createObjectURL(file) });
      }
    }
  };

  return (
    <div className="container">
      <div
        className="drop-container"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        {children}
      </div>
    </div>
  );
};

export default H_dropZone;
