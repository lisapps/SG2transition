/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from "react";

const C_ProductSort = () => {
  const [gridOpen, setGridOpen] = useState(false);
  const [featOpen, setFeatOpen] = useState(false);

  const handleGridClick = () => {
    setGridOpen(!gridOpen);
  };

  const handleFeatClick = () => {
    setFeatOpen(!featOpen);
  };

  return (
    <>
      <div className="s-productGallery3__filterLayout__view__sort">
        <div
          className="c-filterCard__dropDown s-productGallery3__filterLayout__view__sort__display s-productGallery3__filterLayout__view__sort__filter u-hide"
          data-target="filterCard0"
          data-id="filterCard0"
        >
          <div className="s-productGallery3__filterLayout__view__sort__display">
            <div
              className={`c-dropDown c-dropDown--absolute ${gridOpen && " c-dropDown--active"}`}
              data-type="selection"
              id="dropDown0"
            >
              <div
                className="c-dropDown__toggler"
                aria-expanded={gridOpen ? "true" : "false"}
                aria-controls="dropDownPanel0"
              >
                <div className="c-dropDown__toggler__selection">
                  <span className="c-dropDown__toggler__selection__value u-txt-bold"></span>
                  <span className="c-dropDown__toggler__selection">
                    <span className="u-txt-bold c-dropDown__toggler__selection__single">
                      Filter
                    </span>
                    <span className="u-txt-bold c-dropDown__toggler__selection__plural">
                      Filters
                    </span>
                  </span>
                  Applied
                </div>
                <svg width="14" height="8" viewBox="0 0 14 8">
                  <path d="M13.02.02a.062.062 0 0 0-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 0 0-.09 0L.02.977a.062.062 0 0 0 0 .09l6.937 6.915a.066.066 0 0 0 .09 0l.962-.96 5.973-5.954a.065.065 0 0 0 0-.09L13.02.02z"></path>
                </svg>
              </div>
              <div className="c-dropDown__panel" id="dropDownPanel0">
                <button className="c-dropDown__panel__clearBtn">Clear All</button>
              </div>
            </div>
          </div>
        </div>
        <div className="s-productGallery3__filterLayout__view__sort__display s-productGallery3__filterLayout__view__sort__layout">
          <div
            className={`c-dropDown c-dropDown--absolute ${gridOpen && " c-dropDown--active"}`}
            data-type="selection"
            id="dropDown1"
            onClick={() => handleGridClick()}
            onKeyDown={() => handleGridClick()}
            role="button"
            tabIndex="-1"
          >
            <div
              className="c-dropDown__toggler"
              aria-expanded={gridOpen ? "true" : "false"}
              aria-controls="dropDownPanel1"
            >
              <div className="c-dropDown__toggler__selection">
                <span className="c-dropDown__toggler__selection">
                  Sort By{" "}
                  <span className="c-dropDown__toggler__selection__value u-txt-bold">Grid</span>
                </span>
              </div>
              <svg width="14" height="8" viewBox="0 0 14 8">
                <path d="M13.02.02a.062.062 0 0 0-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 0 0-.09 0L.02.977a.062.062 0 0 0 0 .09l6.937 6.915a.066.066 0 0 0 .09 0l.962-.96 5.973-5.954a.065.065 0 0 0 0-.09L13.02.02z"></path>
              </svg>
            </div>
            <div className="c-dropDown__panel" id="dropDownPanel1">
              <ul>
                <li
                  className={`c-dropDown__panel__item ${
                    gridOpen && "c-dropDown__panel__item--active"
                  }`}
                >
                  Grid
                </li>
                <li className="c-dropDown__panel__item">List</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="s-productGallery3__filterLayout__view__sort__display s-productGallery3__filterLayout__view__sort__options">
          <div
            className={`c-dropDown c-dropDown--absolute ${featOpen && "c-dropDown--active"}`}
            id="dropDown2"
          >
            <div
              className="c-dropDown__toggler"
              aria-expanded={featOpen ? "true" : "false"}
              aria-controls="dropDownPanel2"
              onClick={() => handleFeatClick()}
              onKeyDown={() => handleFeatClick()}
              role="button"
              tabIndex="-1"
            >
              <div className="c-dropDown__toggler__selection">
                <span className="c-dropDown__toggler__selection">
                  Sort By{" "}
                  <span className="c-dropDown__toggler__selection__value u-txt-bold">Featured</span>
                </span>
              </div>
              <svg width="14" height="8" viewBox="0 0 14 8">
                <path d="M13.02.02a.062.062 0 0 0-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 0 0-.09 0L.02.977a.062.062 0 0 0 0 .09l6.937 6.915a.066.066 0 0 0 .09 0l.962-.96 5.973-5.954a.065.065 0 0 0 0-.09L13.02.02z"></path>
              </svg>
            </div>
            <div className="c-dropDown__panel" id="dropDownPanel2">
              <ul>
                <li className="c-dropDown__panel__item">Oldest</li>
                <li className="c-dropDown__panel__item">Newest</li>
                <li className="c-dropDown__panel__item c-dropDown__panel__item--active">
                  Featured
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default C_ProductSort;
