import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import DropZone from "../../../Styleguide/0_hooks/dropzone";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Hero = () => {
  const { appState, setAppState } = useContext(AppContext);
  const [phone, setPhone] = useState(null);
  const [tablet, setTablet] = useState(null);
  const [desktop, setDesktop] = useState(null);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  // currentPath helps with browser navigation, and highlights the item in nav menu.
  // viewHeight is used to autoadjust the height
  // viewWidth is set and changed outside the web components, but preserved by ...Dimensions context
  // outputName is used by IframeWrapper preload html.
  // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
  useEffect(() => {
    let heroVars = {
      ...appState,
      currentPath: "/ui/hero",
      outputName: "Hero",
      headerName: "Hero Section",
      description:
        "The Hero section serves as the grand showcase of a product with a large image or video in the background.",
      htmlSaved: false,
      currentTheme: null,
      scripts: [],
      specs: [
        [
          "Background Image or Video",
          ["Small: 512 x 512", "Medium: 1024 x 475+", "Large: 2048 x 768"],
        ],
        ["Background Video", ["Small: 512 x 512", "Large: 1280 x 720"]],
        ["Headline", ["Character Limit: ~35"]],
        ["Link", ["Character Limit: 85"]],
        ["Description", ["Paragraph with character Limit: ~100"]],
      ],
    };
    setAppState(heroVars);
    setContentOptions({
      Headline: { label: "Headline", checkbox: null, field: "Heading Text" },
      HeadlineMode: {
        label: "Headline Mode",
        checkbox: null,
        field: ["DIV", "H1"],
        selected: "DIV",
      },
      CTA: { label: "CTA", checkbox: true, field: "Hero Link" },
      SVG: { label: "CTA Icon SVG", checkbox: true, field: null },
      Aligned: {
        label: "Clip Alignment",
        checkbox: null,
        field: ["Left (default)", "Lower Left", "Right", "Lower Right"],
        selected: "Left (default)",
      },

      DarkLight: { label: "Dark/Light-Mode", checkbox: false, field: null },
    });
    setDimensions({ ...dimensions, viewHeight: "", width: window.innerWidth - 24 });
  }, []);

  //this context data must be loaded else errors are thrown, so show loading text
  if (!contentOptions) return "...Loading Hero";
  return (
    <DropZone setPhone={setPhone} setTablet={setTablet} setDesktop={setDesktop} pictureTag={true}>
      <section
        className={`s-hero${
          contentOptions.Aligned && contentOptions.Aligned.selected === "Right"
            ? " s-hero--clipRight"
            : contentOptions.Aligned && contentOptions.Aligned.selected === "Lower Left"
            ? " s-hero--clipLowerLeft"
            : contentOptions.Aligned && contentOptions.Aligned.selected === "Lower Right"
            ? " s-hero--clipLowerRight"
            : ""
        }${contentOptions.DarkLight && contentOptions.DarkLight.checkbox ? " s-hero--light" : ""}`}
      >
        <div className="s-hero__background">
          <picture className="e-picture" id="js-picture">
            <source
              srcSet={
                phone && phone.phone ? phone.phone : "https://styleguide.kingston.com/fpo/512/512"
              }
              media="(max-width:32em)"
            />
            <source
              srcSet={
                tablet && tablet.tablet
                  ? tablet.tablet
                  : "https://styleguide.kingston.com/fpo/1024/512"
              }
              media="(max-width:64em)"
            />
            <img
              src={
                desktop && desktop.desktop
                  ? desktop.desktop
                  : "https://styleguide.kingston.com/fpo/2048/768"
              }
              alt="Alternate Text"
            />
          </picture>
        </div>

        <div className="s-hero__content">
          <div className="c-headerClip">
            {contentOptions.HeadlineMode && contentOptions.HeadlineMode.selected === "DIV" ? (
              <div className="u-h1 c-headerClip__title">
                {(contentOptions.Headline && contentOptions.Headline.field) || `Heading Text`}
              </div>
            ) : (
              <h1 className="c-headerClip__title">
                {(contentOptions.Headline && contentOptions.Headline.field) || `Heading Text`}
              </h1>
            )}
            <div className="c-headerClip__cta">
              {contentOptions.CTA && contentOptions.CTA.checkbox && (
                <a className="c-headerClip__cta__link" href="#heroLink">
                  {contentOptions.SVG.checkbox && (
                    <svg>
                      <path d="M0 .15v13.42a.15.15 0 0 0 .23.13L9.83 7a.15.15 0 0 0 0-.24L.23 0A.15.15 0 0 0 0 .15z"></path>
                    </svg>
                  )}
                  {contentOptions.CTA.field || `Hero Link`}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </DropZone>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. It's used by IframeWrapper to load the html version of the section. It can't be gotten from the state if the react version is never loaded.
export default {
  path: "hero",
  component: S_Hero,
  navtxt: "Hero",
  htmlName: "Hero",
};
