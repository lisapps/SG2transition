/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_SocialLinks = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    // viewHeight is used to autoadjust the height in DimensionsContext
    // viewWidth is set and changed outside the web components, but preserved by DimensionsContext
    // outputName is used by IframeWrapper to preload html if it's done.
    // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
    // Specs are what's loaded in the specs tab
    // contentOptions are the fields that are editable in that tab
    let lVars = {
      ...appState,
      currentPath: "/ui/social-links",
      currentTheme: "t-white",
      outputName: "SocialLinks",
      headerName: "Social Links",
      description:
        "The Social Links displays social media icons with links to their respective social media pages.",
      htmlSaved: true,
      scripts: [],
      specs: [
        ["Anchor", ["A valid URL to the corresponding social media page."]],
        ["SVG", ["Social Media logos at a 1:1 ratio."]],
      ],
    };
    setAppState(lVars);

    setDimensions({ ...dimensions, viewHeight: "148", width: window.innerWidth - 24 });
  }, []);

  if (!AppContext) return "...Loading Social Links";
  return (
    <section className={"s-social " + appState.currentTheme}>
      <div className="l-inner">
        <ul className="u-list-unstyled u-list-horizontal s-social__links">
          <li>
            <a
              href="#anchorLink"
              title="Anchor Title"
              aria-label="Youtube"
              style={{ backgroundColor: "#E22D27" }}
            >
              <svg viewBox="0 0 100 100">
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="../images/icons-map.svg#logo-youtube_grey"
                ></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#anchorLink"
              title="Anchor Title"
              aria-label="Facebook"
              style={{ backgroundColor: "#3D5A98" }}
            >
              <svg viewBox="0 0 100 100">
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="../images/icons-map.svg#logo-facebook_grey"
                ></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#anchorLink"
              title="Anchor Title"
              aria-label="Twitter"
              style={{ backgroundColor: "#1DA1F2" }}
            >
              <svg viewBox="0 0 100 100">
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="../images/icons-map.svg#logo-twitter_grey"
                ></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#anchorLink"
              title="Anchor Title"
              aria-label="Instagram"
              style={{ backgroundColor: "#353535" }}
            >
              <svg viewBox="0 0 100 100">
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="../images/icons-map.svg#logo-instagram_grey"
                ></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#anchorLink"
              title="Anchor Title"
              aria-label="Twitch"
              style={{ backgroundColor: "#6441A4" }}
            >
              <svg viewBox="0 0 100 100">
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="../images/icons-map.svg#logo-twitch_grey"
                ></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. ex: htmlName: "KeyFeature",
export default {
  path: "social-links",
  component: S_SocialLinks,
  navtxt: "Social Links",
  htmlName: "SocialLinks",
  icon: "",
};
