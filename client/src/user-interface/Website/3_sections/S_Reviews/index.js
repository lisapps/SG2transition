/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import C_ReviewCard from "../../2_components/reviewCard/C_ReviewCard";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Reviews = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let revVars = {
      ...appState,
      currentPath: "/ui/reviews",
      outputName: "Reviews",
      headerName: "Reviews",
      currentTheme: "t-white",
      description:
        "The reviews section allows us to share a quote from a review and link the users to the full review page if necessary. Responsive Format: 4 reviews in desktop, 3 reviews in tablet, 1 for mobile",
      htmlSaved: true,
      scripts: ["../rexusManager.component.js", "../cuid.component.js", "./reviews.section.js"],
      specs: [
        [
          "Text",
          [
            "Standard Text<br /><small>*For reference, 100 characters will break into 4 lines</small>",
          ],
        ],
        ["Link", ["Standard Text"]],
        [
          "Logo",
          [
            "Optimal: 120 x 50<br /><small>*Image should be no larger than 215px wide, height is flexible but will push all content down</small>",
          ],
        ],
      ],
    };
    setAppState(revVars);
    setContentOptions({
      text1: {
        name: "text1",
        label: "Text 1",
        checkbox: null,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      text2: {
        name: "text2",
        label: "Text 2",
        checkbox: null,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      text3: {
        name: "text3",
        label: "Text 3",
        checkbox: null,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      link: {
        name: "link",
        label: "Link",
        checkbox: null,
        field: "Review Link",
      },
      text4: {
        name: "text4",
        label: "Text 4",
        checkbox: null,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "280" });
  }, []);

  if (!contentOptions) return "...Loading Reviews Section";
  return (
    <section className={"s-Reviews " + appState.currentTheme}>
      <div className="l-inner">
        <div
          className="c-slider c-slider--slick slick-initialized slick-slider"
          role="region"
          aria-label="carousel"
        >
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{ opacity: "1", width: "1200px", transform: "translate3d(0px, 0px, 0px)" }}
            >
              <div
                className="slick-slide slick-current slick-active"
                data-slick-index="0"
                role="group"
                aria-label="slide 1"
                style={{ width: "240px" }}
              >
                <div>
                  <div
                    className="c-slider__card"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <C_ReviewCard copy={contentOptions.text1 && contentOptions.text1.field} />
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-active"
                data-slick-index="1"
                role="group"
                aria-label="slide 2"
                style={{ width: "240px" }}
              >
                <div>
                  <div
                    className="c-slider__card"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <C_ReviewCard
                      copy={contentOptions.text2 && contentOptions.text2.field}
                      src="https://styleguide.kingston.com/fpo/120/50"
                    />
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-active"
                data-slick-index="2"
                role="group"
                aria-label="slide 3"
                style={{ width: "240px" }}
              >
                <div>
                  <div
                    className="c-slider__card"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <C_ReviewCard
                      copy={contentOptions.text3 && contentOptions.text2.field}
                      curl="#"
                      linkText={contentOptions.link && contentOptions.link.field}
                    />
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-active"
                data-slick-index="3"
                role="group"
                aria-label="slide 4"
                style={{ width: "240px" }}
              >
                <div>
                  <div
                    className="c-slider__card"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <C_ReviewCard />
                  </div>
                </div>
              </div>
              <div
                className="slick-slide"
                data-slick-index="4"
                role="group"
                aria-label="slide 5"
                style={{ width: "240px" }}
                aria-hidden="true"
              >
                <div>
                  <div
                    className="c-slider__card"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <C_ReviewCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-slider__controls">
          <button
            className="c-slider__controls__left e-btn slick-arrow slick-disabled"
            aria-label="Previous"
            style={{ display: "flex" }}
          >
            <svg width="14" height="23" viewBox="0 0 14 23">
              <path d="M11.2.3L.5 11l10.7 10.7 1.6-1.5L3.6 11l9.2-9.2z"></path>
            </svg>
          </button>
          <button
            className="c-slider__controls__right e-btn slick-arrow"
            aria-label="Next"
            style={{ display: "flex" }}
          >
            <svg width="14" height="23" viewBox="0 0 14 23">
              <path d="M2.1 21.7L12.8 11 2.1.3.5 1.9l9.2 9.2-9.2 9.1z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "reviews",
  component: S_Reviews,
  navtxt: "Reviews",
  htmlName: "Reviews",
};
