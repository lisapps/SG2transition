import React, { useEffect, useState } from "react";

// props are props.formType, panelCopy, partners, props.buyFrom
const C_ProductCardForm = (props) => {
  const [formState, setFormState] = useState(null);
  const [quantity, setQuantity] = useState(1);

  let formType = props.formType ? props.formType : null;
  let copy = props.panelCopy ? props.panelCopy : null;
  let partners = props.partners ? props.partners : null;

  useEffect(() => {
    setFormState({
      form: formType,
      copy: copy,
      partners: partners,
    });
  }, [props]);

  const inputHandler = (e, operator) => {
    //if this were an active form something would happen here.
    e.preventDefault();
    operator === "add"
      ? setQuantity(quantity + 1)
      : quantity > 0
      ? setQuantity(quantity - 1)
      : setQuantity(0);
  };

  if (formState === null) return "...loading";
  return (
    <div className="c-productCard4__buyOptions" aria-hidden="true">
      <div className="c-productCard4__buyOptions__panel">
        <div className="c-productCard4__buyOptions__content">
          {formState.form && formState.form !== null && formState.form == "quantitypartners" ? (
            <>
              {copy && <span className="c-productCard4__buyOptions__content__copy">{copy}</span>}
              <form className="c-productCard4__buyOptions__content__qtyCTA">
                <label className="f-quantity__label" htmlFor="quant1">
                  Quantity
                </label>
                <div className="f-quantity js-quantity" id="jsQuantity0">
                  <div className="f-quantity__counter">
                    <button
                      className={`f-quantity__counter__btn js-quantity__btn ${
                        quantity === 0 ? ` f-quantity__counter__btn--disable` : ""
                      }`}
                      aria-label="Decrease Quantity"
                      tabIndex="-1"
                      onClick={(e) => inputHandler(e, "subtract")}
                    >
                      <span className="f-quantity__counter__btn__inner" tabIndex="-1">
                        <svg viewBox="0 0 16 2">
                          <title>Minus Icon</title>
                          <path d="M0 0h16v2H0z"></path>
                        </svg>
                      </span>
                    </button>
                    <input
                      className="f-quantity__counter__input"
                      type="text"
                      maxLength="2"
                      // defaultValue={quantity}
                      value={quantity}
                      id="quant1"
                      name="fQuantity0"
                      //this onchange handler does nothing but prevents warnings in console
                      onChange={() => null}
                    />
                    <button
                      className="f-quantity__counter__btn js-quantity__btn"
                      aria-label="Increase Quantity"
                      data-add="true"
                      onClick={(e) => inputHandler(e, "add")}
                    >
                      <span className="f-quantity__counter__btn__inner" tabIndex="-1">
                        <svg viewBox="0 0 16 16">
                          <title>Plus Icon</title>
                          <path d="M0 7h16v2H0z"></path>
                          <path d="M7 0h2v16H7z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <button className="e-btn" title="Button Title">
                  <svg>
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/images/icons-map.svg#btn-cart"
                    ></use>
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </form>
              <h5 className="u-txt-center">Or Buy From</h5>
              <div className="c-productCard4__buyOptions__content__partnersCTA">
                <div className="c-productCard4__buyOptions__content__partnersCTA__partners">
                  {formState.partners.map((partner, index) => (
                    <a
                      href={partner.link}
                      aria-label={partner.name}
                      title={partner.name}
                      key={index}
                    >
                      <img src={partner.logo} alt={partner.name} />
                    </a>
                  ))}
                </div>
              </div>
            </>
          ) : formState.form && formState.form !== null && formState.form == "partners" ? (
            <div className="c-productCard4__buyOptions__content__partnersCTA">
              <h5 className="u-txt-center">Buy From</h5>
              <div className="c-productCard4__buyOptions__content__partnersCTA__partners">
                {formState.partners.map((partner, index) => (
                  <a href={partner.link} aria-label={partner.name} title={partner.name} key={index}>
                    <img src={partner.logo} alt={partner.name} />
                  </a>
                ))}
              </div>
            </div>
          ) : formState.form && formState.form !== null && formState.form == "quantity" ? (
            <form className="c-productCard4__buyOptions__content__qtyCTA">
              <label className="f-quantity__label" htmlFor="quant1">
                Quantity
              </label>
              <div className="f-quantity js-quantity" id="jsQuantity0">
                <div className="f-quantity__counter">
                  <button
                    className={`f-quantity__counter__btn js-quantity__btn ${
                      quantity === 0 ? ` f-quantity__counter__btn--disable` : ""
                    }`}
                    aria-label="Decrease Quantity"
                    tabIndex="-1"
                    onClick={(e) => inputHandler(e, "subtract")}
                  >
                    <span className="f-quantity__counter__btn__inner" tabIndex="-1">
                      <svg viewBox="0 0 16 2">
                        <title>Minus Icon</title>
                        <path d="M0 0h16v2H0z"></path>
                      </svg>
                    </span>
                  </button>
                  <input
                    className="f-quantity__counter__input"
                    type="text"
                    maxLength="2"
                    // defaultValue={quantity}
                    value={quantity}
                    id="quant1"
                    name="fQuantity0"
                    //this onchange handler does nothing but prevents warnings in console
                    onChange={() => null}
                  />
                  <button
                    className="f-quantity__counter__btn js-quantity__btn"
                    aria-label="Increase Quantity"
                    data-add="true"
                    onClick={(e) => inputHandler(e, "add")}
                  >
                    <span className="f-quantity__counter__btn__inner" tabIndex="-1">
                      <svg viewBox="0 0 16 16">
                        <title>Plus Icon</title>
                        <path d="M0 7h16v2H0z"></path>
                        <path d="M7 0h2v16H7z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <button className="e-btn" title="Button Title">
                <svg>
                  <use
                    xlink="http://www.w3.org/1999/xlink"
                    xlinkHref="/images/icons-map.svg#btn-cart"
                  ></use>
                </svg>
                <span>Add to Cart</span>
              </button>
            </form>
          ) : formState.form && formState.form !== null && formState.form == "where" ? (
            <div className="c-productCard4__buyOptions__content__whereToBuy">
              <a className="e-btn e-btn--alt2" target="_self" title="Button Title" href="#link">
                <svg>
                  <use
                    xlink="http://www.w3.org/1999/xlink"
                    xlinkHref="../images/icons-map.svg#aae"
                  ></use>
                </svg>
                <span>Ask an Expert</span>
              </a>
              <a className="e-btn" target="_self" title="Button Title" href="#link">
                <svg>
                  <use
                    xlink="http://www.w3.org/1999/xlink"
                    xlinkHref="/images/icons-map.svg#location"
                  ></use>
                </svg>
                <span>Where to Buy</span>
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default C_ProductCardForm;
