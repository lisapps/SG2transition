import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Homepage_Hero = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
  // viewHeight is used to autoadjust the height in DimensionsContext
  // viewWidth is set and changed outside the web components, but preserved by DimensionsContext
  // outputName is used by IframeWrapper to preload html if it's done.
  // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
  // Specs are what's loaded in the specs tab
  // contentOptions are the fields that are editable in that tab
  // If section should be full width, that's handled in setDimensions below.
  useEffect(() => {
    let heroVars = {
      ...appState,
      currentPath: "/ui/homepage-hero",
      outputName: "Homepage_Hero",
      headerName: "Homepage Hero Section",
      description:
        "The Homepage Hero section serves as the grand showcase of a product with a large image or video in the background. It can have a larger height than the normal Hero.",
      htmlSaved: false,
      currentTheme: null,
      scripts: [],
      specs: [
        [
          "Background Image or Video",
          ["Small: 512 x 512", "Medium: 1024 x 512", "Large: 2048 x 768"],
        ],
        ["Headline", ["Character Limit: 85"]],
        ["Link", ["Character Limit: 85"]],
        ["Description", ["Paragraph with character Limit: 175"]],
      ],
    };
    setAppState(heroVars);
    setContentOptions({
      Headline: { label: "Headline", checkbox: null, field: "Kingston is with You" },
      CTA: { label: "CTA", checkbox: true, field: "Hero Link" },
      Paragraph: {
        label: "Paragraph",
        checkbox: true,
        field:
          "Kingston® memory and storage products are relied on worldwide by corporations, data centers and technology enthusiasts.",
      },
      SVG: { label: "CTA Icon SVG", checkbox: true, field: null },
      RightAligned: { label: "Right Aligned", checkbox: false, field: null },
      DarkLight: { label: "Dark/Light-Mode", checkbox: false, field: null },
      VideoL: {
        label: "Video Large",
        checkbox: null,
        field:
          "https://player.vimeo.com/video/451666754?muted=1&autoplay=1&autopause=0&controls=0&loop=1&background=1&app_id=122963",
      },
      VideoS: {
        label: "Video Small",
        checkbox: null,
        field: "https://vimeo.com/335022330",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "", width: window.innerWidth - 24 });
  }, []);

  //this context data must be loaded else errors are thrown, so show loading text
  if (!contentOptions || Object.keys(contentOptions).length < 8) return "...Loading Hero";
  return (
    <section
      className={`s-hero s-hero--landing${
        contentOptions.RightAligned && contentOptions.RightAligned.checkbox ? " s-hero--right" : ""
      }${contentOptions.DarkLight && contentOptions.DarkLight.checkbox ? " s-hero--light" : ""}`}
    >
      <div
        className="s-hero__background"
        style={{
          backgroundImage: `url("https://media.kingston.com/kingston/hero/ktc-hero-homepage-china-lg.jpg")`,
        }}
      >
        <div
          className="e-vimeoPlayer"
          data-vimeo-small="https://vimeo.com/335022330"
          data-vimeo-large="https://player.vimeo.com/video/451666754?muted=1&autoplay=1&autopause=0&controls=0&loop=1&background=1&app_id=122963"
        ></div>
        <div id="vimeo0" className="e-vimeoPlayer__player" data-vimeo-initialized="true">
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src={
                contentOptions.VideoL && contentOptions.VideoL.field
                  ? contentOptions.VideoL.field
                  : `https://player.vimeo.com/video/451666754?muted=1&autoplay=1&autopause=0&controls=0&loop=1&background=1&app_id=122963`
              }
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="KIWY 10-sec video for KTC homepage"
              data-ready="true"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="s-hero__inner">
        <div className="s-hero__inner__content">
          <div className="c-headerClip">
            <h2 className="c-headerClip__title">
              {(contentOptions.Headline && contentOptions.Headline.field) || `Heading Text`}
            </h2>
            {contentOptions.Paragraph && contentOptions.Paragraph.checkbox === true ? (
              <p className="c-headerClip__desc">{contentOptions.Paragraph.field}</p>
            ) : (
              ""
            )}
            <div className="c-headerClip__cta">
              {contentOptions.CTA && contentOptions.CTA.checkbox && (
                <>
                  {contentOptions.SVG && contentOptions.SVG.checkbox && (
                    <svg>
                      <path d="M0 .15v13.42a.15.15 0 0 0 .23.13L9.83 7a.15.15 0 0 0 0-.24L.23 0A.15.15 0 0 0 0 .15z" />
                    </svg>
                  )}
                  <span>
                    <a href="#heroLink">
                      {(contentOptions.CTA && contentOptions.CTA.field) || `Hero Link`}
                    </a>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. It's used by IframeWrapper to load the html version of the section. It can't be gotten from the state if the react version is never loaded.
export default {
  path: "homepage-hero",
  component: S_Homepage_Hero,
  navtxt: "Homepage Hero",
  htmlName: "Homepage_Hero",
};
