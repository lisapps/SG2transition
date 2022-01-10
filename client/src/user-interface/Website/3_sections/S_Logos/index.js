/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
import DropZone from "../../../Styleguide/0_hooks/dropzone";
// import useFlexTiles from "../../../Styleguide/0_hooks/useFlexTiles";
// import useSectionScript from "../../../Styleguide/0_hooks/useSectionScript";

const S_Logos = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  const [featureImage, setFeatureImage] = useState({ preview: "" });

  // useFlexTiles();

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    // viewHeight is used to autoadjust the height in DimensionsContext
    // viewWidth is set and changed outside the web components, but preserved by DimensionsContext
    // outputName is used by IframeWrapper to preload html if it's done.
    // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
    // Specs are what's loaded in the specs tab
    // contentOptions are the fields that are editable in that tab
    // If section should be full width, that's handled in setDimensions below.
    let logoVars = {
      ...appState,
      currentPath: "/ui/logos",
      currentTheme: "t-white",
      outputName: "Logos",
      headerName: "Logos",
      description: "The Logos Section displays logos from teams or companies in a grid layout.",
      htmlSaved: true,
      scripts: ["../rexusManager.component.js", "../cuid.component.js", "../flexTiles.layout.js"],
      specs: [
        ["Link", ["Hyperlink wrapping image"]],
        ["Image", ["120 × 120"]],
      ],
    };
    setAppState(logoVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown.
    setContentOptions(null);
    setDimensions({ ...dimensions, viewHeight: "181", width: window.innerWidth - 24 });
  }, []);

  if (!appState) return "...Loading Logos";
  return (
    <section className={`s-logos ` + appState.currentTheme}>
      <div className="l-inner u-max+">
        <ul className="l-flexTiles" data-min-width="100" data-max-width="150">
          <li className="l-flexTiles__item" data-index="0" data-flex-tile="true">
            <a href="#anchorLink" title="Anchor Title" className="">
              <DropZone setImage={setFeatureImage}>
                <img
                  src={featureImage.preview ? featureImage.preview : "../images/117x117.svg"}
                  alt="#Logolink"
                />
              </DropZone>
            </a>
          </li>
          <li className="l-flexTiles__item" data-index="0" data-flex-tile="true">
            <a href="#anchorLink" title="Anchor Title" className="">
              <DropZone setImage={setFeatureImage}>
                <img
                  src={featureImage.preview ? featureImage.preview : "../images/117x117.svg"}
                  alt="#Logolink"
                />
              </DropZone>
            </a>
          </li>
          <li className="l-flexTiles__item" data-index="0" data-flex-tile="true">
            <a href="#anchorLink" title="Anchor Title" className="">
              <DropZone setImage={setFeatureImage}>
                <img
                  src={featureImage.preview ? featureImage.preview : "../images/117x117.svg"}
                  alt="#Logolink"
                />
              </DropZone>
            </a>
          </li>
          <li className="l-flexTiles__item" data-index="0" data-flex-tile="true">
            <a href="#anchorLink" title="Anchor Title" className="">
              <DropZone setImage={setFeatureImage}>
                <img
                  src={featureImage.preview ? featureImage.preview : "../images/117x117.svg"}
                  alt="#Logolink"
                />
              </DropZone>
            </a>
          </li>
          <li className="l-flexTiles__item" data-index="0" data-flex-tile="true">
            <a href="#anchorLink" title="Anchor Title" className="">
              <DropZone setImage={setFeatureImage}>
                <img
                  src={featureImage.preview ? featureImage.preview : "../images/117x117.svg"}
                  alt="#Logolink"
                />
              </DropZone>
            </a>
          </li>
          <li className="l-flexTiles__item" data-index="0" data-flex-tile="true">
            <a href="#anchorLink" title="Anchor Title" className="">
              <DropZone setImage={setFeatureImage}>
                <img
                  src={featureImage.preview ? featureImage.preview : "../images/117x117.svg"}
                  alt="#Logolink"
                />
              </DropZone>
            </a>
          </li>
          <li className="l-flexTiles__item" data-index="0" data-flex-tile="true">
            <a href="#anchorLink" title="Anchor Title" className="">
              <DropZone setImage={setFeatureImage}>
                <img
                  src={featureImage.preview ? featureImage.preview : "../images/117x117.svg"}
                  alt="#Logolink"
                />
              </DropZone>
            </a>
          </li>
          <li className="l-flexTiles__item" data-index="0" data-flex-tile="true">
            <a href="#anchorLink" title="Anchor Title" className="">
              <DropZone setImage={setFeatureImage}>
                <img
                  src={featureImage.preview ? featureImage.preview : "../images/117x117.svg"}
                  alt="#Logolink"
                />
              </DropZone>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
export default {
  path: "logos",
  component: S_Logos,
  navtxt: "Logos",
  htmlName: "Logos",
  icon: "",
};
