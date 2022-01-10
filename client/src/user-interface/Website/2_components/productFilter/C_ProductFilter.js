/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState, useContext, useEffect } from "react";
import { DimensionsContext } from "../../../../DimensionsContext";

//fType should be either "menus" or "checkboxes"
//fOptions should either be ie {"Lightning": 2, "Wired": "3", "Platform": "2"} for menus, or ie a string "6" for checkboxes.
const C_ProductFilter = ({ fType, fOptions }) => {
  let initialFilterState = {
    Filter1: {
      open: false,
      checkboxes: { 0: false, 1: false },
    },
    Filter2: {
      open: false,
      checkboxes: { 0: false, 1: false },
    },
    Filter3: {
      open: false,
      checkboxes: { 0: false, 1: false, 2: false },
    },
  };
  const { dimensions } = useContext(DimensionsContext);
  const [systemOpen, setSystemOpen] = useState(false);
  const [memPartOpen, setMemPartOpen] = useState(false);

  const [filterState, setFilterState] = useState(initialFilterState);
  const [filterSlideOpen, setFilterSlideOpen] = useState(false);
  const [slideSortOpen, setSlideSortOpen] = useState(false);

  const handleSlideFilterClick = () => {
    setFilterSlideOpen(!filterSlideOpen);
    slideSortOpen && setSlideSortOpen(false);
  };

  const handleSlideSortClick = () => {
    setSlideSortOpen(!slideSortOpen);
    filterSlideOpen && setFilterSlideOpen(false);
  };

  const handleFilterReset = () => {
    let stateCopy = filterState;
    for (var i = 0; i < Object.keys(filterState).length; i++) {
      //find all the checkboxes in the state
      let cbObj = stateCopy[Object.keys(stateCopy)[i]].checkboxes;
      //set them all to false
      Object.keys(cbObj).forEach((n) => (cbObj[n] = false));
    }
    setFilterState({ ...stateCopy });
  };

  useEffect(() => {
    // create and set the filter states initial state and checkboxes to false
    let stateObj = {};

    if (fType === "checkboxes") {
      let num = parseInt(fOptions);
      for (let i = 0; i < num; i++) {
        stateObj[i] = false;
      }
      setFilterState(stateObj);
    } else if (fType === "menus") {
      Object.keys(fOptions).forEach((k) => {
        let chBxNum = fOptions[k];
        let obj = { open: false, checkboxes: {} };
        for (let i = 0; i < chBxNum; i++) {
          obj.checkboxes[i] = false;
        }
        stateObj[k] = obj;
      });
      setFilterState(stateObj);
    }
  }, []);

  return (
    <>
      <div className="s-productGallery3__filterLayout__controls">
        <div className="s-productGallery3__filterLayout__controls__section">
          <h5 className="u-txt-uppercase">Search</h5>
          <div className="c-accordion c-accordion--noOutline">
            <span className={`c-accordion__tab ${systemOpen && "c-accordion__tab--active"}`}>
              <button aria-expanded={systemOpen} onClick={() => setSystemOpen(!systemOpen)}>
                System/Device
                <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                  <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                </svg>
              </button>
            </span>
            <div className="c-accordion__panel">
              <div className="c-accordion__panel__content">
                <div className="c-searchCard">
                  <div className="c-searchCard__body">
                    <p>
                      Simply enter the make and model number or system part number of the computer
                      system or digital device to find the memory you need.
                    </p>
                    <form className="c-searchCard__body__cta">
                      <div className="f-input f-input--outlined">
                        <div className="f-input__string">
                          <input
                            type="text"
                            name="makeModel"
                            id="makeModel"
                            required="required"
                            pattern="[a-zA-Z0-9]+"
                          />
                          <label htmlFor="makeModel">Make/Model</label>
                        </div>
                      </div>
                      <a className="e-btn" href="#link" aria-label="Search">
                        <svg viewBox="0 0 17.2 16.7">
                          <path d="M9.8 0C5.7 0 2.4 3.3 2.4 7.4s3.3 7.4 7.4 7.4 7.4-3.3 7.4-7.4S13.9 0 9.8 0zm0 12.8c-3 0-5.3-2.4-5.3-5.3 0-3 2.4-5.3 5.3-5.3s5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z"></path>
                          <path d="M4.5 10.5L.4 14.6c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l4.1-4.1"></path>
                        </svg>
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <span className={`c-accordion__tab ${memPartOpen && "c-accordion__tab--active"}`}>
              <button
                aria-controls="accPanel-m2vhwm"
                aria-expanded={memPartOpen}
                onClick={() => setMemPartOpen(!memPartOpen)}
              >
                Memory Part Number
                <svg
                  className="c-accordion__tab__icon"
                  viewBox="0 0 14 8"
                  aria-hidden={!memPartOpen}
                >
                  <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                </svg>
              </button>
            </span>
            <div className="c-accordion__panel">
              <div className="c-accordion__panel__content">
                <div className="c-searchCard">
                  <div className="c-searchCard__body">
                    <p>
                      Search by either the Kingston part number, distributor part number or
                      manufacturer equivalent part number.
                    </p>
                    <form className="c-searchCard__body__cta">
                      <div className="f-input f-input--outlined">
                        <div className="f-input__string">
                          <input
                            type="text"
                            name="partNumber"
                            id="partNumber"
                            required="required"
                            pattern="[a-zA-Z0-9]+"
                          />
                          <label htmlFor="partNumber">Part Number</label>
                        </div>
                      </div>
                      <a className="e-btn" href="#link" aria-label="Search">
                        <svg viewBox="0 0 17.2 16.7">
                          <path d="M9.8 0C5.7 0 2.4 3.3 2.4 7.4s3.3 7.4 7.4 7.4 7.4-3.3 7.4-7.4S13.9 0 9.8 0zm0 12.8c-3 0-5.3-2.4-5.3-5.3 0-3 2.4-5.3 5.3-5.3s5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z"></path>
                          <path d="M4.5 10.5L.4 14.6c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l4.1-4.1"></path>
                        </svg>
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s-productGallery3__filterLayout__controls__section">
          <h5 className="u-txt-uppercase">Browse</h5>
          <ul>
            <li>
              <a href="#serverLink" title="Anchor Title">
                Server Memory
              </a>
            </li>
            <li>
              <a href="#desktopLink" title="Anchor Title">
                Desktop/Laptop Memory
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="c-slideMenu s-productGallery3__filterLayout__slides"
        id="slideMenu0"
        style={{ zIndex: "10" }}
      >
        {fType && fType === "checkboxes" ? (
          <div
            className="c-slideMenu__slider c-filterCard s-productGallery3__filterLayout__slides__filter"
            data-filterid="filterCard3"
            data-dropdown="true"
            id="sldr-i7aaln"
          >
            <button
              className="c-slideMenu__slider__toggle"
              id="sldrTgle-rzr3qi"
              aria-controls="sldrPnl-c3nzmz"
              aria-expanded="false"
            >
              <svg aria-hidden="true">
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="/images/icons-map.svg#filter"
                ></use>
              </svg>
              <span className="u-h5 u-txt-uppercase c-filterCard__title">Filter</span>
            </button>
            <div className="c-filterCard__results">
              <span data-results="0">Results</span>
            </div>
            <form className="c-slideMenu__slider__panel c-filterCard__details">
              <div className="c-slideMenu__slider__panel__content c-filterCard__details__content">
                <ul className="u-list-unstyled">
                  {fOptions &&
                    [...Array(parseInt(fOptions))].map((value, index) => (
                      <li tabIndex="0" key={`fb${index + 1}`}>
                        <div className="f-input">
                          <div className="f-input__checkbox">
                            <input
                              type="checkbox"
                              name={`fb${index}`}
                              id={`fb${index}0`}
                              value={index ? `val${index}` : ""}
                              onChange={() =>
                                setFilterState((prevState) => ({
                                  ...prevState,
                                  [index]: !filterState[index],
                                }))
                              }
                            />
                            <label
                              htmlFor={`fb${index}0`}
                              aria-checked={filterState && filterState[index]}
                              tabIndex="0"
                            >
                              Checkbox Label
                            </label>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
                <ul className="c-filterCard__details__content__info u-list-unstyled">
                  <li>HTS: 8523.51.0000</li>
                  <li>ECCN: EAR99</li>
                </ul>
              </div>
              <div className="c-slideMenu__slider__panel__cta c-filterCard__details__cta">
                <button className="e-btn e-btn--alt2 c-filterCard__details__cta__reset">
                  Reset
                </button>
                <button className="e-btn c-slideMenu__slider__panel__cta__closeBtn c-filterCard__details__cta__close">
                  Close
                </button>
                <button className="e-btn c-filterCard__details__cta__apply">Apply</button>
              </div>
            </form>
          </div>
        ) : (
          <div
            className={`c-slideMenu__slider c-filterCard s-productGallery3__filterLayout__slides__filter ${
              filterSlideOpen ? " c-slideMenu__slider--active" : ""
            }`}
            data-filterid="filterCard0"
            data-dropdown="true"
          >
            <button
              className="c-slideMenu__slider__toggle"
              aria-expanded={filterSlideOpen}
              onClick={() => handleSlideFilterClick()}
            >
              <svg
                aria-hidden={!filterSlideOpen}
                style={dimensions.width < 800 ? { opacity: "1" } : { opacity: "0" }}
              >
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="../images/icons-map.svg#filter"
                ></use>
              </svg>
              <span
                className="u-h5 u-txt-uppercase c-filterCard__title"
                style={
                  dimensions.width < 800
                    ? { transform: "translate(32px)" }
                    : { transform: "translate(0px)" }
                }
              >
                Filter
              </span>
            </button>
            <div className="c-filterCard__results">
              <span data-results="0">Results</span>
            </div>
            <form className="c-slideMenu__slider__panel c-filterCard__details">
              <div className="c-slideMenu__slider__panel__content c-filterCard__details__content">
                {filterState &&
                  Object.keys(filterState).map((name, index) => (
                    <div className="c-accordion c-accordion--noOutline" key={name + index}>
                      <span
                        className={`c-accordion__tab ${
                          filterState[name].open && "c-accordion__tab--active"
                        }`}
                      >
                        <button
                          aria-expanded={filterState[name].open}
                          type="button"
                          onClick={() =>
                            setFilterState((prevState) => {
                              prevState[name].open = !prevState[name].open;
                              return { ...prevState };
                            })
                          }
                        >
                          {name}
                          <svg
                            className="c-accordion__tab__icon"
                            viewBox="0 0 14 8"
                            aria-hidden={!filterState[name].open}
                          >
                            <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                          </svg>
                        </button>
                      </span>
                      <div className="c-accordion__panel">
                        <div className="c-accordion__panel__content">
                          <ul className="u-list-unstyled">
                            {filterState &&
                              filterState[name].checkboxes &&
                              Object.keys(filterState[name].checkboxes).map((cbkey, index) => (
                                <li tabIndex="0" key={name + cbkey}>
                                  <div
                                    className="f-input"
                                    style={{ flexWrap: "wrap", borderStyle: "none" }}
                                  >
                                    <div className="f-input__checkbox">
                                      <input
                                        type="checkbox"
                                        name={`${name}filterBtnsID${index}`}
                                        id={`filterBtnsID${name + index}`}
                                        value={`val${name + index}`}
                                        checked={filterState[name].checkboxes[cbkey]}
                                        onChange={() =>
                                          setFilterState((prevState) => {
                                            prevState[name].checkboxes[cbkey] = !prevState[name]
                                              .checkboxes[cbkey];
                                            return { ...prevState };
                                          })
                                        }
                                      />
                                      <label
                                        htmlFor={`filterBtnsID${name + index}`}
                                        aria-checked={filterState[name].checkboxes[cbkey]}
                                        tabIndex="0"
                                      >
                                        Checkbox Label {`${filterState[name].checkboxes[cbkey]}`}
                                      </label>
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                <ul className="c-filterCard__details__content__info u-list-unstyled">
                  <li>HTS: 8523.51.0000</li>
                  <li>ECCN: EAR99</li>
                </ul>
              </div>
              <div className="c-slideMenu__slider__panel__cta c-filterCard__details__cta">
                <button
                  className="e-btn e-btn--alt2 c-filterCard__details__cta__reset"
                  type="button"
                  onClick={() => handleFilterReset()}
                >
                  Reset
                </button>
                <button
                  className="e-btn c-slideMenu__slider__panel__cta__closeBtn c-filterCard__details__cta__close"
                  type="button"
                  onClick={() => setFilterSlideOpen(false)}
                >
                  Close
                </button>
                <button className="e-btn c-filterCard__details__cta__apply">Apply</button>
              </div>
            </form>
          </div>
        )}
        <div
          className={`c-slideMenu__slider c-slideMenu__slider--right s-productGallery3__filterLayout__slides__sort ${
            slideSortOpen && " c-slideMenu__slider--active"
          }`}
        >
          <button
            className="c-slideMenu__slider__toggle"
            aria-expanded={slideSortOpen}
            onClick={() => handleSlideSortClick()}
          >
            <svg
              aria-hidden={!slideSortOpen}
              style={dimensions.width < 800 ? { opacity: "1" } : { opacity: "0" }}
              // style={{opacity: "1"}}
            >
              <use
                xlink="http://www.w3.org/1999/xlink"
                xlinkHref="../images/icons-map.svg#sort"
              ></use>
            </svg>
            <span
              className="u-h5 u-txt-uppercase"
              style={
                dimensions.width < 800
                  ? { transform: "translate(-32px)" }
                  : { transform: "translate(0px)" }
              }
            >
              Sort
            </span>
          </button>
          <form className="c-slideMenu__slider__panel s-productGallery3__filterLayout__slides__sort__details">
            <div className="c-slideMenu__slider__panel__content s-productGallery3__filterLayout__slides__sort__details__content">
              <ul className="u-list-unstyled">
                <li tabIndex="0">
                  <div className="f-input" style={{ flexWrap: "wrap", borderStyle: "none" }}>
                    <div className="f-input__radio">
                      <input type="radio" name="radioName" id="radioName0" value="Featured" />
                      <label htmlFor="radioName0" aria-checked="false">
                        Featured
                      </label>
                    </div>
                    <div className="f-input__radio">
                      <input type="radio" name="radioName" id="radioName1" value="Newest" />
                      <label htmlFor="radioName1" aria-checked="false">
                        Newest
                      </label>
                    </div>
                    <div className="f-input__radio">
                      <input type="radio" name="radioName" id="radioName2" value="Oldest" />
                      <label htmlFor="radioName2" aria-checked="false">
                        Oldest
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="c-slideMenu__slider__panel__cta">
              <button
                className="e-btn c-slideMenu__slider__panel__cta__closeBtn"
                type="button"
                onClick={() => handleSlideSortClick(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default C_ProductFilter;
