import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_ProductLite = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let plVars = {
      ...appState,
      currentPath: "/ui/product-lite",
      outputName: "ProductLite",
      headerName: "Product Lite Section",
      description: "The Product Lite section.",
      currentTheme: "t-stone",
      htmlSaved: true,
      scripts: [],
      specs: [
        ["Headline", ["Character Limit: none"]],
        ["Description", ["Character Limit: none"]],
        ["Content", ["HTML content"]],
      ],
    };
    setAppState(plVars);
    setContentOptions({
      text: {
        label: "Description",
        checkbox: null,
        field:
          "Kingston FURY™ Beast DDR5 memory brings the latest, cutting-edge technology for next-gen gaming platforms. Taking speed, capacity and reliability even further, DDR5 arrives with an arsenal of enhanced features, like on-die ECC (ODECC) for improved stability at extreme speeds, dual 32-bit subchannels for increased efficiency, and an on-module power management integrated circuit (PMIC) to provide juice where it’s needed most.",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "343" });
  }, []);

  if (!contentOptions || Object.keys(contentOptions).length < 1) return "...Loading Product Lite";
  return (
    //  <p className="u-m0">{contentOptions.text && contentOptions.text.field}</p>
    <section className={`s-productLite  ` + appState.currentTheme}>
      <div className="l-inner">
        <p className="s-productLite__intro">{contentOptions.text && contentOptions.text.field}</p>
        <ul className="u-m0 u-p0 u-list-unstyled s-productLite__features">
          <li>
            <div className="svg-bullet">
              <svg>
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="/images/icons-map.svg#bolt-duo"
                ></use>
              </svg>
            </div>
            <span>Feature text is here.</span>
          </li>
          <li>
            <div className="svg-bullet">
              <svg>
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="/images/icons-map.svg#iphone-ipad"
                ></use>
              </svg>
            </div>
            <span>Feature text is here.</span>
          </li>
          <li>
            <div className="svg-bullet">
              <svg>
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="/images/icons-map.svg#surround-sound"
                ></use>
              </svg>
            </div>
            <span>Feature text is here.</span>
          </li>
          <li>
            <div className="svg-bullet">
              <svg>
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="/images/icons-map.svg#extra-space"
                ></use>
              </svg>
            </div>
            <span>Feature text is here.</span>
          </li>
          <li>
            <div className="svg-bullet">
              <svg>
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="/images/icons-map.svg#backup-photos"
                ></use>
              </svg>
            </div>
            <span>Feature text is here.This is an example of the text wrapping.</span>
          </li>
          <li>
            <div className="svg-bullet">
              <svg>
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="/images/icons-map.svg#accessory"
                ></use>
              </svg>
            </div>
            <span>Feature text is here.This is an example of the text wrapping.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. It's used by IframeWrapper to load the html version of the section. It can't be gotten from the state if the react version is never loaded.
export default {
  path: "product-lite",
  component: S_ProductLite,
  navtxt: "Product Lite",
  htmlName: "ProductLite",
};
