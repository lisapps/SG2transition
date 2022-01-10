/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext, useState } from "react";
import DropZone from "../../../Styleguide/0_hooks/dropzone";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Product = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [featureImage1, setFeatureImage1] = useState({ preview: "" });
  const [featureImage2, setFeatureImage2] = useState({ preview: "" });
  const [featureImage3, setFeatureImage3] = useState({ preview: "" });
  const [featureImage4, setFeatureImage4] = useState({ preview: "" });

  useEffect(() => {
    setAppState({
      ...appState,
      currentPath: "/ui/product",
      outputName: "Product",
      headerName: "Product",
      description: "The full Product Section.",
      htmlSaved: true,
      currentTheme: "t-stone",
      scripts: ["../rexusManager.component.js", "product.section.js"],
      specs: [
        ["Description", ["Character Limit: ##"]],
        ["Features", ["Character Limit: ##"]],
        ["Image", ["416×416"]],
      ],
    });
    setContentOptions({
      name: { label: "Product Name", checkbox: null, field: "Kingston FURY Beast DDR5 Memory" },
      button: { label: "CTA", checkbox: null, field: "Buy Now" },
      description: {
        label: "Product Desc",
        checkbox: null,
        field:
          "Kingston FURY™ Beast DDR5 memory brings the latest, cutting-edge technology for next-gen gaming platforms. Taking speed, capacity and reliability even further, DDR5 arrives with an arsenal of enhanced features, like on-die ECC (ODECC) for improved stability at extreme speeds, dual 32-bit subchannels for increased efficiency, and an on-module power management integrated circuit (PMIC) to provide juice where it’s needed most. Superior speed advancements with double the banks from 16 to 32 and double the burst length from 8 to 16, take DDR5 memory, your gaming experience and your overall system applications to the next-level of performance. Whether you’re pushing the limits in your gaming with the most extreme settings, live streaming at 4K+ or pushing large animation and 3D Rendering, Kingston FURY Beast DDR5 memory is the level up needed, while seamlessly bridging style and unleashing performance. Additionally, it utilizes Intel® XMP 3.0, a new overclock spec that includes two customizable profiles for speeds and timings.",
      },
      feature1: { label: "Feature 1", checkbox: null, field: "Feature Text is here." },
      feature2: { label: "Feature 2", checkbox: null, field: "Feature Text is here." },
      feature3: { label: "Feature 3", checkbox: null, field: "Feature Text is here." },
      feature4: { label: "Feature 4", checkbox: null, field: "Feature Text is here." },
      feature5: {
        label: "Feature 5",
        checkbox: null,
        field: "Feature Text. This is an example of the text wrapping.",
      },
      feature6: {
        label: "Feature 6",
        checkbox: null,
        field: "Feature Text. This is an example of the text wrapping.",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "777", width: window.innerWidth - 24 });
  }, []);

  if (!contentOptions || Object.keys(contentOptions) < 1) return "...Loading Product Section";
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <section className={`s-product ${appState.currentTheme}`}>
      <div className="l-inner">
        <p className="intro">{contentOptions.description && contentOptions.description.field}</p>
        <hr />
        <div className="features">
          <div
            className="slider-wrapper"
            data-video="http://creative.us.kingston.corp/_hx/Resources/Section_Templates/images/fpo/section-ecommerce/alpha-rotate.mp4"
          >
            <video
              src="http://creative.us.kingston.corp/_hx/Resources/Section_Templates/images/fpo/section-ecommerce/alpha-rotate.mp4"
              muted="1"
              autoPlay="1"
              playsInline="1"
            ></video>
            <div
              className="feature-image-slides"
              data-lineart="../images/line_art/hx-features-headset-cloud-la.svg"
            >
              <div className="item">
                <DropZone setImage={setFeatureImage1}>
                  <img
                    data-title="Mav Special Edition"
                    alt="swatch"
                    data-color="../images/fpo/section-products/mav-swatch.png"
                    src={
                      featureImage1.preview
                        ? featureImage1.preview
                        : "https://styleguide.kingston.com/fpo/416/416"
                    }
                  />
                </DropZone>
              </div>
              <div className="item">
                <DropZone setImage={setFeatureImage2}>
                  <img
                    data-title="Black"
                    data-color="#000"
                    src={
                      featureImage2.preview
                        ? featureImage2.preview
                        : "https://styleguide.kingston.com/fpo/416/416"
                    }
                  />
                </DropZone>
              </div>
              <div className="item">
                <DropZone setImage={setFeatureImage3}>
                  <img
                    data-title="Red"
                    data-color="#c00"
                    src={
                      featureImage3.preview
                        ? featureImage3.preview
                        : "https://styleguide.kingston.com/fpo/416/416"
                    }
                  />
                </DropZone>
              </div>
              <div className="item">
                <DropZone setImage={setFeatureImage4}>
                  <img
                    data-title="White"
                    data-color="#ffffff"
                    src={
                      featureImage4.preview
                        ? featureImage4.preview
                        : "https://styleguide.kingston.com/fpo/416/416"
                    }
                  />
                </DropZone>
              </div>
            </div>
            <h5 className="feature-image-title">
              {contentOptions.name && contentOptions.name.field}
            </h5>
            <span className="replay">
              <svg>
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="../images/icons-map.svg#repeat"
                ></use>
              </svg>
            </span>
          </div>
          <div className="features-list-wrapper">
            <h2>Features</h2>
            <ul className="features-list u-list-unstyled">
              <li>
                <div className="svg-bullet">
                  <svg>
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#bolt-duo"
                    ></use>
                  </svg>
                </div>
                <span>{contentOptions.feature1 && contentOptions.feature1.field}</span>
              </li>
              <li>
                <div className="svg-bullet">
                  <svg>
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#iphone-ipad"
                    ></use>
                  </svg>
                </div>
                <span>{contentOptions.feature2 && contentOptions.feature2.field}</span>
              </li>
              <li>
                <div className="svg-bullet">
                  <svg>
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#surround-sound"
                    ></use>
                  </svg>
                </div>
                <span>{contentOptions.feature3 && contentOptions.feature3.field}</span>
              </li>
              <li>
                <div className="svg-bullet">
                  <svg>
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#extra-space"
                    ></use>
                  </svg>
                </div>
                <span>{contentOptions.feature4 && contentOptions.feature4.field}</span>
              </li>
              <li>
                <div className="svg-bullet">
                  <svg>
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#backup-photos"
                    ></use>
                  </svg>
                </div>
                <span>{contentOptions.feature5 && contentOptions.feature5.field}</span>
              </li>
              <li>
                <div className="svg-bullet">
                  <svg>
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#accessory"
                    ></use>
                  </svg>
                </div>
                <span>{contentOptions.feature6 && contentOptions.feature6.field}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="u-txt-center">
          <a className="e-btn" href="#buyLink" target="_self" title="Button Title">
            <span>{contentOptions.button && contentOptions.button.field}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "product",
  component: S_Product,
  navtxt: "Product",
  htmlName: "Product",
};
