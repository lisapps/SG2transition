/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Dropzone from "../../../Styleguide/0_hooks/dropzone";
import C_ProductCardForm from "../productCardForm/C_ProductCardForm";

//props list:
//name, classes, id, url, title, kit, imgsSrc,description,partNumber,img,tag,selections,details,cta,liteCopy,linkCopy,nonDRAM,downloads,type,btns, replaced, buyBtn,currentPrice,originalPrice,extraCopy,ctaCopy,panelCopy,form,partners, activeCard, setActiveCard

// props with multiple entries should be sent as arrays of objects

const C_ProductCard4 = ({ buyClick, setActiveCard, ...props }) => {
  const [featureImage, setFeatureImage] = useState({ preview: "" });
  const [buyPanelState, setBuyPanelState] = useState(false);
  const [currSelection, setCurrSelection] = useState("size16");
  const [isActiveCard, setIsActiveCard] = useState(false);

  let pName = props.pname ? props.pname : "Product Name";
  let pClasses = props.pclasses ? props.pclasses : "";
  let pId = props.id ? props.id : null;
  let pUrl = props.url ? props.url : "#productCardLink";
  let pTitle = props.title ? props.title : "Product Card Title";
  let pKit = props.kit ? props.kit : null;
  let pSrc = props.imgSrc ? props.imgSrc : "http://via.placeholder.com/200x52";
  let pDescription = props.description ? props.description : ["Short Description"];
  let pPartNumber = props.partNumber ? props.partNumber : null;
  let pTag = props.tag ? props.tag : null;
  let pSelections = props.selections ? props.selections : null;
  let pDetails1 = props.details1 ? props.details1 : null;
  let pDetails2 = props.details2 ? props.details2 : null;
  let pDetails = props.details ? props.details : null;
  let pLiteCopy = props.liteCopy ? props.liteCopy : "";
  let pLinkCopy = props.linkCopy ? props.linkCopy : "";
  let pNonDRAM = props.nonDRAM ? props.nonDRAM : false;
  let pDownloads = props.downloads ? props.downloads : null;
  let pType = props.type ? props.type : null;
  let pBtns = props.btns ? props.btns : null;
  let pBuy = props.buyBtn ? props.buyBtn : false;
  let pCurrentPrice = props.currentPrice ? props.currentPrice : null;
  let pOriginalPrice = props.originalPrice ? props.originalPrice : null;
  let pReplaced = props.replaced ? props.replaced : null;
  let pExtraCopy = props.extraCopy ? props.extraCopy : null;
  let pCtaCopy = props.ctaCopy ? props.ctaCopy : null;
  let pPanelCopy = props.panelCopy ? props.panelCopy : null;
  let pFormType = props.form ? props.form : null;
  let pPartners = props.partners ? props.partners : null;
  let pActiveCard = props.activeCard ? props.activeCard : null;

  function handleBuyBtn() {
    if (buyPanelState) {
      setBuyPanelState(false);
      setIsActiveCard(false);
      setActiveCard(null);
      buyClick(false);
    } else {
      setBuyPanelState(true);
      setIsActiveCard(true);
      setActiveCard(pName);
      buyClick(true);
    }
  }

  function handleSelections(e) {
    setCurrSelection(e.target.name);
  }

  useEffect(() => {
    setFeatureImage({ preview: pSrc });
  }, []);

  useEffect(() => {
    if (pName === pActiveCard) {
      setIsActiveCard(true);
      setBuyPanelState(true);
    } else {
      setIsActiveCard(false);
      setBuyPanelState(false);
    }
    pActiveCard ? () => buyClick(true) : () => buyClick(false);
  }, [props.activeCard]);

  return (
    <li className="s-productGallery3__grid__cell" selected={isActiveCard}>
      <div
        className={`c-productCard4` + pClasses + (buyPanelState ? " c-productCard4--active" : "")}
        id={pId ? pId : ""}
      >
        {pKit && (
          <div className="e-tag c-productCard4__kit">
            <span className="c-productCard4__kit__lg"> {`Kit of ${pKit}`}</span>
            <span className="c-productCard4__kit__sm">{`x ${pKit}`}</span>
          </div>
        )}
        <div className="c-productCard4__header">
          <a
            className="c-productCard4__header__link"
            title={pTitle}
            aria-label={pTitle}
            role="region"
          >
            <span className="c-productCard4__header__link__name">{pName}</span>
            {pTag && <span className="e-tag">{pTag}</span>}
          </a>
        </div>
        {pPartNumber && (
          <span className="c-productCard4__partNumber">
            Part Number:
            <span className="c-productCard4__partNumber">{` ${pPartNumber}`}</span>{" "}
          </span>
        )}
        <a className="c-productCard4__image" href={pUrl} title={pTitle} aria-label="aria">
          <Dropzone setImage={setFeatureImage}>
            <img src={featureImage.preview} alt={pName} />
          </Dropzone>
          {!pNonDRAM ||
            (!pType == "tab" && (
              <canvas
                className="c-productCard4__image__canvas"
                height="auto"
                style={{ width: "auto" }}
              ></canvas>
            ))}
        </a>

        <div className="c-productCard4__details">
          <div className="c-productCard4__details__content">
            {pSelections && (
              <div className="c-productCard4__details__content__selections">
                <div
                  className={`f-input c-productCard4__details__content__selections__type`}
                  role="radiogroup"
                  aria-label="Selections"
                >
                  {pSelections.map((selection, index) => (
                    <div className="f-input__radio" key={index}>
                      <input
                        type="radio"
                        className="radio-button"
                        id={`selection` + index}
                        name={selection.name ? selection.name : ""}
                        disabled={selection.disabled ? selection.disabled : false}
                        checked={currSelection == selection.name ? true : false}
                        onChange={(e) => handleSelections(e)}
                      ></input>
                      <label htmlFor={`selection` + index}>{selection.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="c-productCard4__details__content__longDesc">
              {pType === "product" ? (
                <ul>
                  {pDetails && pDetails.map((detail, index) => <li key={index}>{detail}</li>)}
                </ul>
              ) : pType === "productparagraph" ? (
                <p>{pDetails}</p>
              ) : (
                <ul>
                  <li>{pDetails1}</li>
                  <li>{pDetails2}</li>
                  {pPartNumber && (
                    <li className="c-productCard4__details__content__longDesc__partNumber">
                      {`Part Number: ` + pPartNumber}
                    </li>
                  )}
                </ul>
              )}

              {pLiteCopy && <p>{pLiteCopy}</p>}
              {pLinkCopy && (
                <p>
                  Back to
                  <a href="/us/apparel"> GG Collection</a>
                </p>
              )}
            </div>
            {pNonDRAM && (
              <button className="c-productCard4__details__content__btn" aria-expanded="false">
                <span className="c-productCard4__details__content__btn__showMore">
                  {" "}
                  SHOW MORE +
                </span>
                <span className="c-productCard4__details__content__btn__showLess">SHOW LESS -</span>
              </button>
            )}
          </div>
          {pDescription && <p className="c-productCard4__details__shortDesc">{pDescription}</p>}
          {pDownloads && (
            <ul className="c-productCard4__details__downloads u-list-unstyled u-list-commas">
              {pDownloads.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    title={item.title}
                    aria-label="aria"
                    download=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {pType == "product" || pType == "productparagraph" ? (
          <>
            {pBtns ? (
              <div className="c-productCard4__footer">
                {/* {pBtns.map((button, index) => (
                  <span key={index}>{button}</span>
                ))} */}
                {pBtns.alt && (
                  <button className="e-btn e-btn--alt2" title="Button Title">
                    <span>{pBtns.alt}</span>
                  </button>
                )}
                {pBtns.main && (
                  <button className="e-btn" title="Button Title">
                    <span>{pBtns.main}</span>
                  </button>
                )}
              </div>
            ) : (
              ""
            )}
            <a className="c-productCard4__arrow" href={pUrl} title={pTitle} aria-label="aria">
              <svg width="14" height="8" viewBox="0 0 14 8">
                <path d="M13.02.02a.062.062 0 0 0-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 0 0-.09 0L.02.977a.062.062 0 0 0 0 .09l6.937 6.915a.066.066 0 0 0 .09 0l.962-.96 5.973-5.954a.065.065 0 0 0 0-.09L13.02.02z"></path>
              </svg>
            </a>
          </>
        ) : (
          <>
            <div className="c-productCard4__footer">
              {pCurrentPrice ? (
                pCurrentPrice === "blank" ? (
                  ""
                ) : (
                  <div className="c-productCard4__footer__price">
                    <span className="c-productCard4__footer__price__amount">{pCurrentPrice}</span>
                    {pOriginalPrice && (
                      <span className="u-txt-strike c-productCard4__footer__price__strike">
                        {pOriginalPrice}
                      </span>
                    )}
                  </div>
                )
              ) : pType == "tab" ? (
                pReplaced ? (
                  <span>
                    Replaced By <a href="#partlink">KTH-PL426/16G</a>
                  </span>
                ) : (
                  <span>Temporarily Out of Stock</span>
                )
              ) : (
                <p>Temporarily Out of Stock</p>
              )}
              {pReplaced && (
                <span>
                  Replaced By{" "}
                  <a href={pReplaced.url} title={pReplaced.name}>
                    {pReplaced.name}
                  </a>
                </span>
              )}
              {pExtraCopy ? <p>{pExtraCopy}</p> : pCtaCopy ? <span>{pCtaCopy}</span> : ""}
              {!pCtaCopy && pBuy && (
                <button
                  className="e-btn e-btn--alt2 c-productCard4__footer__buyBtn"
                  aria-expanded="false"
                  onClick={() => handleBuyBtn()}
                >
                  <span>Buy</span>
                  <svg viewBox="0 0 14 8">
                    <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                  </svg>
                </button>
              )}
            </div>
            {/* product form will be a type like "basic" or quantity */}
            {!pCtaCopy && pFormType && (
              <C_ProductCardForm
                formType={pFormType ? pFormType : null}
                panelCopy={pPanelCopy ? pPanelCopy : null}
                partners={pPartners ? pPartners : null}
              />
            )}
          </>
        )}
      </div>
    </li>
  );
};

export default C_ProductCard4;
