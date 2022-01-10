/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
import DropZone from "../../../Styleguide/0_hooks/dropzone";

const S_StepsGallery = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [featureImage1, setFeatureImage1] = useState({ preview: "" });
  const [featureImage2, setFeatureImage2] = useState({ preview: "" });
  const [featureImage3, setFeatureImage3] = useState({ preview: "" });
  const [featureImage4, setFeatureImage4] = useState({ preview: "" });

  useEffect(() => {
    let vars = {
      ...appState,
      currentPath: "/ui/steps-gallery",
      outputName: "StepsGallery",
      headerName: "Steps Gallery",
      currentTheme: "t-white",
      description:
        "Steps Gallery displays information formatted into cards and organized in enumerated steps, with a call to action on the final step.",
      htmlSaved: true,
      scripts: [
        "../rexusManager.component.js",
        "../flexTiles.layout.js",
        "./stepCard.component.js",
      ],
      specs: [
        ["Steps Image", ["335 × 150"]],
        ["Description", ["Char Limit: 200"]],
        ["Button", ["Char Limit: 20"]],
      ],
    };
    setAppState(vars);
    setContentOptions({
      copy1: {
        name: "copy1",
        label: "Copy 1",
        checkbox: null,
        field: "1) Step Card Copy",
      },
      copy2: {
        name: "copy2",
        label: "Copy 2",
        checkbox: null,
        field: "2) Step Card Copy",
      },
      copy3: {
        name: "copy3",
        label: "Copy 3",
        checkbox: null,
        field: "3) Step Card Copy",
      },
      copy4: {
        name: "copy4",
        label: "Copy 4",
        checkbox: null,
        field: "4) Step Card Copy",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "309", width: window.innerWidth - 24 });
  }, []);

  if (!contentOptions) return "...Loading Steps Gallery Section";
  return (
    <section className={"s-stepsGallery " + appState.currentTheme}>
      <ul className="l-flexTiles" data-min-width="150" data-max-width="350" data-cuid="ft-wfuudo">
        <li
          className="l-flexTiles__item"
          data-index="0"
          data-flex-tile="true"
          style={{ width: "337px" }}
        >
          <div className="c-stepCard">
            <div className="c-stepCard__img">
              <DropZone setImage={setFeatureImage1}>
                <img
                  src={
                    featureImage1.preview
                      ? featureImage1.preview
                      : "https://styleguide.kingston.com/fpo/335/150"
                  }
                  alt="Step Card Illustration"
                />
              </DropZone>
            </div>
            <p className="c-stepCard__copy">1) Step Card Copy</p>
            <div className="c-stepCard__cta">
              <a className="e-btn" href="#StepLinnk">
                Learn More
              </a>
            </div>
          </div>
        </li>
        <li
          className="l-flexTiles__item"
          data-index="1"
          data-flex-tile="true"
          style={{ width: "337px" }}
        >
          <div className="c-stepCard">
            <div className="c-stepCard__img">
              <DropZone setImage={setFeatureImage2}>
                <img
                  src={
                    featureImage2.preview
                      ? featureImage2.preview
                      : "https://styleguide.kingston.com/fpo/335/150"
                  }
                  alt="Step Card Illustration"
                />
              </DropZone>
            </div>
            <p className="c-stepCard__copy">2) Step Card Copy</p>
            <div className="c-stepCard__cta">
              <a className="e-btn" href="#StepLinnk">
                Learn More
              </a>
            </div>
          </div>
        </li>
        <li
          className="l-flexTiles__item"
          data-index="2"
          data-flex-tile="true"
          style={{ width: "337px" }}
        >
          <div className="c-stepCard">
            <div className="c-stepCard__img">
              <DropZone setImage={setFeatureImage3}>
                <img
                  src={
                    featureImage3.preview
                      ? featureImage3.preview
                      : "https://styleguide.kingston.com/fpo/335/150"
                  }
                  alt="Step Card Illustration"
                />
              </DropZone>
            </div>
            <p className="c-stepCard__copy">3) Step Card Copy</p>
            <div className="c-stepCard__cta">
              <a className="e-btn" href="#StepLinnk">
                Learn More
              </a>
            </div>
          </div>
        </li>
        <li
          className="l-flexTiles__item"
          data-index="3"
          data-flex-tile="true"
          style={{ width: "337px" }}
        >
          <div className="c-stepCard">
            <div className="c-stepCard__img">
              <DropZone setImage={setFeatureImage4}>
                <img
                  src={
                    featureImage4.preview
                      ? featureImage4.preview
                      : "https://styleguide.kingston.com/fpo/335/150"
                  }
                  alt="Step Card Illustration"
                />
              </DropZone>
            </div>
            <p className="c-stepCard__copy">4) Step Card Copy</p>
            <div className="c-stepCard__cta">
              <a className="e-btn" href="#StepLinnk">
                Learn More
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "steps-gallery",
  component: S_StepsGallery,
  navtxt: "Steps Gallery",
  htmlName: "StepsGallery",
};
