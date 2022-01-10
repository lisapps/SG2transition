/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
import C_PhotoGalleryCard from "../../2_components/photoGalleryCard/C_PhotoGalleryCard";

const S_PhotoGallery = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  // These are all states that are needed for sections with picture tags.

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    // viewHeight is used to autoadjust the height in DimensionsContext
    // viewWidth is set and changed outside the web components, but preserved by DimensionsContext
    // outputName is used by IframeWrapper to preload html if it's done.
    // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
    // Specs are what's loaded in the specs tab
    // contentOptions are the fields that are editable in that tab
    // currentTheme null if there is no theme applicable
    let fbVars = {
      ...appState,
      currentPath: "/ui/photo-gallery",
      outputName: "PhotoGallery",
      headerName: "Photo Gallery",
      description:
        "The Photo Gallery Section. The description is shown in the modal slider. *In progress due to flex tile changes...",
      htmlSaved: true,
      currentTheme: null,
      scripts: [
        "../rexusManager.component.js",
        "../cuid.component.js",
        "../flexTiles.layout.js",
        "../modal.component.js",
        "./photoGallery.section.js",
      ],
      specs: [
        ["Title", ["Character Limit: None"]],
        ["Description", ["Character Limit: None"]],
        ["Image", ["Small: 312 × 312, Large: 512 × 321"]],
      ],
    };
    setAppState(fbVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown.
    setContentOptions({
      title1: {
        name: "title1",
        label: "Title 1",
        checkbox: null,
        field: "Photo Title",
      },
      description1: {
        name: "description1",
        label: "Description 1",
        checkbox: null,
        field: "Photo Description",
      },
      title2: {
        name: "title2",
        label: "Title 2",
        checkbox: null,
        field: "Photo Title",
      },
      description2: {
        name: "description2",
        label: "Description 2",
        checkbox: null,
        field: "Photo Description",
      },
      title3: {
        name: "title3",
        label: "Title 3",
        checkbox: null,
        field: "Photo Title",
      },
      description3: {
        name: "description3",
        label: "Description 3",
        checkbox: null,
        field: "Photo Description",
      },
      title4: {
        name: "title4",
        label: "Title 4",
        checkbox: null,
        field: "Photo Title",
      },
      description4: {
        name: "description4",
        label: "Description 4",
        checkbox: null,
        field: "Photo Description",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "512" });
  }, []);

  if (!contentOptions) return "...Loading Photo Gallery";
  return (
    <section className={`s-photoGallery ` + appState.currentTheme} id="photoGallery0">
      <ul
        className="l-flexTiles s-photoGallery__cards"
        data-min-width="232"
        data-max-width="345"
        data-cuid="ft-rli8sk"
      >
        <li
          className="l-flexTiles__item"
          data-index="0"
          data-flex-tile="true"
          // style={{ width: "25%" }}
        >
          <C_PhotoGalleryCard
            imgNum="0"
            title={contentOptions.title1 && contentOptions.title1.field}
            description={contentOptions.description1 && contentOptions.description1.field}
          />
        </li>
        <li
          className="l-flexTiles__item"
          data-index="0"
          data-flex-tile="true"
          // style={{ width: "25%" }}
        >
          <C_PhotoGalleryCard
            imgNum="1"
            title={contentOptions.title2 && contentOptions.title2.field}
            description={contentOptions.description2 && contentOptions.description2.field}
          />
        </li>
        <li
          className="l-flexTiles__item"
          data-index="0"
          data-flex-tile="true"
          // style={{ width: "25%" }}
        >
          <C_PhotoGalleryCard
            imgNum="2"
            title={contentOptions.title3 && contentOptions.title3.field}
            description={contentOptions.description3 && contentOptions.description3.field}
          />
        </li>
        <li
          className="l-flexTiles__item"
          data-index="0"
          data-flex-tile="true"
          // style={{ width: "25%" }}
        >
          <C_PhotoGalleryCard
            imgNum="3"
            title={contentOptions.title4 && contentOptions.title4.field}
            description={contentOptions.description4 && contentOptions.description4.field}
          />
        </li>
      </ul>
      <div className="s-photoGallery__controls">
        <button className="s-photoGallery__controls__left">
          <svg width="32" height="32" aria-hidden="true" viewBox="0 0 32 32">
            <path d="M1 0h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm8.35 16.34l8.49 8.48a.5.5 0 0 0 .71 0l2.12-2.12a.5.5 0 0 0 0-.7l-5.84-5.84a.26.26 0 0 1 0-.35L20.67 10a.5.5 0 0 0 0-.7l-2.12-2.15a.5.5 0 0 0-.71 0l-8.49 8.48a.51.51 0 0 0 0 .71z"></path>
          </svg>
        </button>
        <button className="s-photoGallery__controls__right">
          <svg width="32" height="32" aria-hidden="true" viewBox="0 0 32 32">
            <path d="M1 0h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm21.46 16.34a.5.5 0 0 0 0-.71L14 7.15a.48.48 0 0 0-.7 0l-2.15 2.12a.48.48 0 0 0 0 .7L17 15.81a.24.24 0 0 1 0 .35L11.15 22a.48.48 0 0 0 0 .7l2.12 2.12a.48.48 0 0 0 .7 0z"></path>
          </svg>
        </button>
      </div>
      <div
        id="newModal0"
        className="c-modal c-modal--darkmode"
        role="dialog"
        aria-modal="true"
        aria-hidden="false"
        data-deactivateclose="true"
      >
        <div className="c-modal__overlay"></div>
        <button className="c-modal__close" aria-label="close" data-close="true">
          <svg viewBox="0 0 14 14">
            <path d="M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z"></path>
            <path d="M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z"></path>
          </svg>
        </button>
        <div className="c-modal__content">
          <div
            className="s-photoGallery__slider u-list-unstyled slick-initialized slick-slider"
            role="region"
            aria-label="carousel"
            data-sid="slick-1"
          >
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: "1",
                  width: "11565px",
                  transform: "translate3d(-1285px, 0px, 0px)",
                }}
              >
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index="-1"
                  role="group"
                  aria-label="slide 4"
                  aria-hidden="true"
                  style={{ width: "1285px" }}
                >
                  <div
                    className="s-photoGallery__slider__imgWrap"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <img src="/fpo/1500/2400/" alt="Alternate Text" />
                  </div>
                </div>
                <div
                  className="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  role="group"
                  aria-label="slide 1"
                  style={{ width: "1285px" }}
                >
                  <div
                    className="s-photoGallery__slider__imgWrap"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <img src="/fpo/1200/1200/" alt="Alternate Text" />
                  </div>
                </div>
                <div
                  className="slick-slide"
                  data-slick-index="1"
                  role="group"
                  aria-label="slide 2"
                  aria-hidden="true"
                  style={{ width: "1285px" }}
                >
                  <div
                    className="s-photoGallery__slider__imgWrap"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <img src="/fpo/2400/1500/" alt="Alternate Text" />
                  </div>
                </div>
                <div
                  className="slick-slide"
                  data-slick-index="2"
                  role="group"
                  aria-label="slide 3"
                  aria-hidden="true"
                  style={{ width: "1285px" }}
                >
                  <div
                    className="s-photoGallery__slider__imgWrap"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <img src="/fpo/1000/1600/" alt="Alternate Text" />
                  </div>
                </div>
                <div
                  className="slick-slide"
                  data-slick-index="3"
                  role="group"
                  aria-label="slide 4"
                  aria-hidden="true"
                  style={{ width: "1285px" }}
                >
                  <div
                    className="s-photoGallery__slider__imgWrap"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <img src="/fpo/1500/2400/" alt="Alternate Text" />
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index="4"
                  role="group"
                  aria-label="slide 1"
                  aria-hidden="true"
                  style={{ width: "1285px" }}
                >
                  <div
                    className="s-photoGallery__slider__imgWrap"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <img src="/fpo/1200/1200/" alt="Alternate Text" />
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index="5"
                  role="group"
                  aria-label="slide 2"
                  aria-hidden="true"
                  style={{ width: "1285px" }}
                >
                  <div
                    className="s-photoGallery__slider__imgWrap"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <img src="/fpo/2400/1500/" alt="Alternate Text" />
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index="6"
                  role="group"
                  aria-label="slide 3"
                  aria-hidden="true"
                  style={{ width: "1285px" }}
                >
                  <div
                    className="s-photoGallery__slider__imgWrap"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <img src="/fpo/1000/1600/" alt="Alternate Text" />
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index="7"
                  role="group"
                  aria-label="slide 4"
                  aria-hidden="true"
                  style={{ width: "1285px" }}
                >
                  <div
                    className="s-photoGallery__slider__imgWrap"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <img src="/fpo/1500/2400/" alt="Alternate Text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="s-photoGallery__overlayControls">
            <button aria-label="Previous Slide" className="slick-arrow" style={{ display: "flex" }}>
              <svg viewBox="0 0 13.3 22.2">
                <path d="M11.2.3L.5 11l10.7 10.7 1.6-1.5L3.6 11l9.2-9.2z"></path>
              </svg>
            </button>
            <div className="s-photoGallery__overlayControls__content">
              <p className="s-photoGallery__overlayControls__content__captionTitle"></p>
              <p className="s-photoGallery__overlayControls__content__captionDescription"></p>
            </div>
            <button aria-label="Next Slide" className="slick-arrow" style={{ display: "flex" }}>
              <svg viewBox="0 0 13.3 22.2">
                <path d="M2.1 21.7L12.8 11 2.1.3.5 1.9l9.2 9.2-9.2 9.1z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
export default {
  path: "photo-gallery",
  component: S_PhotoGallery,
  navtxt: "Photo Gallery",
  htmlName: "PhotoGallery",
  icon: "",
};
