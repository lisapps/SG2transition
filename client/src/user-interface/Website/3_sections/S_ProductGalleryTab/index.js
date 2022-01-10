/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { DimensionsContext } from "../../../../DimensionsContext";
import C_ProductFilter from "../../2_components/productFilter/C_ProductFilter";
import PGTab1 from "./PGTab1";
import PGTab2 from "./PGTab2";
import PGTab3 from "./PGTab3";
import PGTab4 from "./PGTab4";

const S_ProductGalleryTab = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [activeTab, setActiveTab] = useState("0");

  useEffect(() => {
    setAppState({
      ...appState,
      currentPath: "/ui/product-gallery-tab",
      outputName: "ProductGalleryTab",
      headerName: "Product Gallery : Tab",
      description: "The Product Gallery displays product level cards with Tab View.",
      htmlSaved: true,
      currentTheme: null,
      scripts: [
        "../rexusManager.component.js",
        "../cuid.component.js",
        "../productGallery3.section.js",
        "../gridFlex.layout.js",
      ],
      specs: [
        ["Title", ["Character Limit: none"]],
        ["Tag", ["String Text"]],
        ["Image", ["No defined image size: depends on product"]],
        ["Selections", ["Radio Buttons Text"]],
        ["Long Description", ["List Element containing lines of string text. No limit"]],
        ["Product: CTA Buttons", ["Varies in Type: CTA String Text and Button"]],
        ["Price", ["String Text"]],
        ["Buy Options", ["Button Text"]],
      ],
    });
    setDimensions({ ...dimensions, viewHeight: "", width: window.innerWidth - 24 });
  }, []);

  // if (!contentOptions || Object.keys(contentOptions) < 1)
  if (!appState) return "...Loading Product Gallery - Non-DRAM Product Section";
  return (
    <section className={`s-productGallery3`} id="productGallery30">
      <div className="l-tabView">
        <div className="u-invisible s-productGallery3__tabLeft"></div>
        <ul className="l-tabView__tabs" role="tablist">
          <li
            className={`l-tabView__tabs__tab ${
              activeTab === "0" ? "l-tabView__tabs__tab--active" : ""
            }`}
            role="tab"
            data-parent="0"
            id="tab0_0"
            data-tab="tabContent0_0"
            aria-controls="tabContent0_0"
            aria-selected="true"
            tabIndex="0"
            data-id="productGallery30"
            onClick={() => setActiveTab("0")}
            onKeyDown={() => setActiveTab("0")}
          >
            <span>All Products</span>
          </li>
          <li
            className={`l-tabView__tabs__tab ${
              activeTab === "1" ? "l-tabView__tabs__tab--active" : ""
            }`}
            role="tab"
            data-parent="0"
            id="tab0_1"
            data-tab="tabContent0_1"
            aria-controls="tabContent0_1"
            aria-selected="false"
            tabIndex="-1"
            data-id="productGallery30"
            onClick={() => setActiveTab("1")}
            onKeyDown={() => setActiveTab("1")}
          >
            <span>Headsets</span>
          </li>
          <li
            className={`l-tabView__tabs__tab ${
              activeTab === "2" ? "l-tabView__tabs__tab--active" : ""
            }`}
            role="tab"
            data-parent="0"
            id="tab0_2"
            data-tab="tabContent0_2"
            aria-controls="tabContent0_2"
            aria-selected="false"
            tabIndex="-1"
            data-id="productGallery30"
            onClick={() => setActiveTab("2")}
            onKeyDown={() => setActiveTab("2")}
          >
            <span>Keyboards</span>
          </li>
          <li
            className={`l-tabView__tabs__tab ${
              activeTab === "3" ? "l-tabView__tabs__tab--active" : ""
            }`}
            role="tab"
            data-parent="0"
            id="tab0_3"
            data-tab="tabContent0_3"
            aria-controls="tabContent0_3"
            aria-selected="false"
            tabIndex="-1"
            data-id="productGallery30"
            onClick={() => setActiveTab("3")}
            onKeyDown={() => setActiveTab("3")}
          >
            <span>Storage</span>
          </li>
        </ul>
        <div className="u-invisible s-productGallery3__tabRight"></div>
        <div className="l-tabView__panels">
          <div
            className={`l-tabView__panels__panel ${
              activeTab === "0" ? "l-tabView__panels__panel--active" : ""
            }`}
            role="tabpanel"
            aria-labelledby="tab0_0"
            id="tabContent0_0"
          >
            <div className="s-productGallery3__filterLayout">
              <C_ProductFilter
                fType="menus"
                fOptions={{ Lightning: "2", Wired: "3", Platform: "2" }}
              />
              <PGTab1 />
            </div>
          </div>
          <div
            className={`l-tabView__panels__panel ${
              activeTab === "1" ? "l-tabView__panels__panel--active" : ""
            }`}
            role="tabpanel"
            aria-labelledby="tab0_1"
            id="tabContent0_1"
          >
            <div className="s-productGallery3__filterLayout">
              <C_ProductFilter
                fType="menus"
                fOptions={{ Lightning: "2", Wired: "3", Platform: "2" }}
              />
              <PGTab2 />
            </div>
          </div>
          <div
            className={`l-tabView__panels__panel ${
              activeTab === "2" ? "l-tabView__panels__panel--active" : ""
            }`}
            role="tabpanel"
            aria-labelledby="tab0_2"
            id="tabContent0_2"
          >
            <div className="s-productGallery3__filterLayout">
              <C_ProductFilter
                fType="menus"
                fOptions={{ Lightning: "2", Wired: "3", Platform: "2" }}
              />
              <PGTab3 />
            </div>
          </div>
          <div
            className={`l-tabView__panels__panel ${
              activeTab === "3" ? "l-tabView__panels__panel--active" : ""
            }`}
            role="tabpanel"
            aria-labelledby="tab0_3"
            id="tabContent0_3"
          >
            <div className="s-productGallery3__filterLayout">
              <C_ProductFilter fType="checkboxes" fOptions="4" />
              <PGTab4 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "product-gallery-tab",
  component: S_ProductGalleryTab,
  navtxt: "Product Gallery : Tab",
  htmlName: "ProductGalleryTab",
};
