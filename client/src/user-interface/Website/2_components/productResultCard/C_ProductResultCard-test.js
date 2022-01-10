/* eslint-disable jsx-a11y/anchor-has-content */
// import React, { useState, useContext } from "react";
import React from "react";
// import ToastContext from "../../../../ToastContext";

const C_ProductResultCard = ({
  num,
  kit,
  name,
  url,
  partNumber,
  short,
  long,
  download,
  dram,
  //   dImg,
  //   img,
}) => {
  let pIndex = num ? num : "0";
  let pKit = kit ? kit : [];
  let pName = name ? name : "DDR4 3200MHz Non-ECC Unbuffered SODIMM";
  let pUrl = url ? url : "#productResultLink";
  //   let pDramImg = img
  //     ? img
  //     : "https://media.kingston.com/kingston/product/DDR4_Non-ECC_Unbuffered_SODIMM_4GB_1-tn.png";
  //   let pImg = dImg
  //     ? dImg
  //     : "https://media.kingston.com/kingston/product/ktc-product-ssd-sedc450r-1-tn.png";
  let pShortDesc = short ? short : "";
  let pLongDesc = long ? long : null;
  let pPartNumber = partNumber ? partNumber : "(KTH-PL426/16G)";
  let pDownload = download
    ? download
    : [
        { link: "http://www.africau.edu/images/default/sample.pdf", text: "Spec Sheet PDF" },
        { link: "http://www.africau.edu/images/default/sample.pdf", text: "PCN" },
      ];
  let pDram = dram ? dram : false;

  //   const [featureImage, setFeatureImage] = useState({ preview: "" });
  //   const { setToastOptions } = useContext(ToastContext);

  //   const dragOver = (e) => {
  //     e.preventDefault();
  //   };

  //   const dragEnter = (e) => {
  //     e.preventDefault();
  //   };

  //   const dragLeave = (e) => {
  //     e.preventDefault();
  //   };
  //   const fileDrop = (e) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     const file = e.dataTransfer.files[0];
  //     if (file) {
  //       setFeatureImage({ preview: URL.createObjectURL(file) });
  //       setToastOptions({ text: "Image added." });
  //     }
  //   };

  return (
    <li data-index={pIndex} data-id="pg-i3u5qe">
      <div
        className={`c-compactProductCard ${pDram ? "c-compactProductCard--dram" : ""}`}
        id="compactProductCard-0"
      >
        {pKit.length > 0 ? (
          <div className="e-tag c-compactProductCard__kit">
            <span className="c-compactProductCard__kit__lg"> {pKit[0]}</span>
            <span className="c-compactProductCard__kit__sm">{pKit[1]}</span>
          </div>
        ) : (
          ""
        )}
        <a className="c-compactProductCard__link" href={pUrl} title="Product Card Title"></a>
        <div className="c-compactProductCard__header">
          <span className="c-compactProductCard__header__name">
            {pName}
            <span className="c-compactProductCard__header__name__partNumber">{pPartNumber}</span>
          </span>
        </div>
        <div className="c-compactProductCard__image">
          <img
            src="https://media.kingston.com/kingston/product/DDR4_Non-ECC_Unbuffered_SODIMM_4GB_1-tn.png"
            alt="DDR4 3200MHz Non-ECC Unbuffered SODIMM"
          />
          <canvas
            id="cv-ye8idw"
            className="c-compactProductCard__image__canvas"
            width="53"
            height="96"
            style="width: auto;"
          ></canvas>
        </div>
        <div className="c-compactProductCard__details">
          <div className="c-compactProductCard__details__content">
            {pLongDesc ? (
              <div className="c-compactProductCard__details__content__longDesc">
                <ul className="u-list-commas">
                  {pLongDesc.line1 ? <li> {pLongDesc.line1}</li> : ""}
                  {pLongDesc.line2 ? <li> {pLongDesc.line2}</li> : ""}
                  {pLongDesc.line3 ? <li> {pLongDesc.line3}</li> : ""}
                  {pLongDesc.line4 ? <li> {pLongDesc.line4}</li> : ""}
                  {pLongDesc.part ? (
                    <li className="c-compactProductCard__details__content__longDesc__partNumber">
                      {" "}
                      {pLongDesc.part}
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          {pShortDesc ? (
            <p className="c-compactProductCard__details__shortDesc">{pShortDesc}</p>
          ) : (
            ""
          )}
          {pDownload ? (
            <ul className="c-compactProductCard__details__downloads u-list-unstyled u-list-commas">
              {pDownload.map((item, index) => (
                <li key={index}>
                  <a href={item.link} download="" target="_blank" rel="noreferrer">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
        <span className="c-compactProductCard__partNumber">Part Number: KTH-PL426/16G</span>
      </div>
    </li>
  );
};

export default C_ProductResultCard;
