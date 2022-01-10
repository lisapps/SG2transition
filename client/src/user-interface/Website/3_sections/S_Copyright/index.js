import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Copyright = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let copyVars = {
      ...appState,
      currentPath: "/ui/copyright",
      outputName: "Copyright",
      headerName: "Copyright Section",
      description: "The Copyright section.",
      currentTheme: "t-stone",
      htmlSaved: true,
      scripts: [],
      specs: [],
    };
    setAppState(copyVars);
    setContentOptions({
      Copy: {
        label: "Copy Text",
        checkbox: null,
        field:
          "©2019 Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley, CA 92708 USA. All rights reserved. All trademarks and registered trademarks are the property of their respective owners.",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "75" });
  }, []);

  if (!contentOptions || Object.keys(contentOptions).length < 1) return "...Loading Copyright";
  return (
    <section className={`s-copyright  ` + appState.currentTheme}>
      <div className="l-inner u-max+">
        <div className="l-row">
          <div className="l-row__col l-1/1 l-3/4@lg">
            <div className="s-copyright__text">
              <p className="u-m0">{contentOptions.Copy && contentOptions.Copy.field}</p>
            </div>
          </div>
          <div className="l-row__col l-1/1 l-1/4@lg">
            <ul className="u-list-unstyled u-list-horizontal u-m0 s-copyright__social">
              <li>
                <a href="#anchorLink" title="Facebook Page for Brand" aria-label="Facebook">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#logo-facebook_grey"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#anchorLink" title="Twitter for brand" aria-label="Twitter">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#logo-twitter_grey"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#anchorLink" title="LinkedIn Page for Brand" aria-label="LinkedIn">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#linkedin"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#anchorLink" title="YouTube Channel for brand" aria-label="Youtube">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#logo-youtube_grey"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#anchorLink" title="Instagram for brand" aria-label="Instagram">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#logo-instagram_grey"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. It's used by IframeWrapper to load the html version of the section. It can't be gotten from the state if the react version is never loaded.
export default {
  path: "copyright",
  component: S_Copyright,
  navtxt: "Copyright",
  htmlName: "Copyright",
};
