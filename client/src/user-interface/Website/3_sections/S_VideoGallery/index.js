/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
import DropZone from "../../../Styleguide/0_hooks/dropzone";

const S_VideoGallery = () => {
  // add instance of appstate
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [phoneImage1, setPhoneImage1] = useState({ preview: "" });
  const [featureImage1, setFeatureImage1] = useState({ preview: "" });
  const [phoneImage2, setPhoneImage2] = useState({ preview: "" });
  const [featureImage2, setFeatureImage2] = useState({ preview: "" });
  const [phoneImage3, setPhoneImage3] = useState({ preview: "" });
  const [featureImage3, setFeatureImage3] = useState({ preview: "" });
  const [phoneImage4, setPhoneImage4] = useState({ preview: "" });
  const [featureImage4, setFeatureImage4] = useState({ preview: "" });
  const [phoneImage5, setPhoneImage5] = useState({ preview: "" });
  const [featureImage5, setFeatureImage5] = useState({ preview: "" });
  const [phoneImage6, setPhoneImage6] = useState({ preview: "" });
  const [featureImage6, setFeatureImage6] = useState({ preview: "" });

  useEffect(() => {
    let tVars = {
      ...appState,
      currentPath: "/ui/video-gallery",
      outputName: "VideoGallery",
      headerName: "Video Gallery",
      description:
        "The Video Gallery showcases a collection of video thumbnails with titles and descriptions that link to a full view video.",
      htmlSaved: true,
      currentTheme: "t-white",
      scripts: [],
      specs: [
        ["Link", ["A URL field to the video reference or modal"]],
        ["Image", ["Small: 215 x 120", "Medium: 330 × 185"]],
        [
          "Title",
          [
            "Basic text input for title copy for each card. Defaults to an <h5> and should text only, will take ~25 characters (spaces included) before wrapping.",
          ],
        ],
        [
          "Description",
          [
            "Basic text input for paragraph copy for each card. The description appears as a paragraph beneath the heading. No Character limit, will break into 4 lines at ~110 characters.",
          ],
        ],
      ],
    };
    setAppState(tVars);
    setContentOptions({
      vtitle1: {
        name: "title",
        label: "Title 1",
        checkbox: null,
        field: "Video Title",
      },
      vdesc1: {
        name: "desc",
        label: "Description 1",
        checkbox: null,
        field: "Brief Video Description Here...",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "511", width: window.innerWidth - 24 });
  }, []);

  //   Customize this loader text
  if (!contentOptions) return "...Loading Video Gallery Section";
  //  add current section classname plus theme
  return (
    <section className={`s-videoGallery ` + appState.currentTheme}>
      <div className="l-inner u-max+">
        <ul className="l-flexTiles" data-min-width="232" data-max-width="345" data-cuid="ft-ojnsfn">
          <li
            className="l-flexTiles__item"
            data-index="0"
            data-flex-tile="true"
            style={{ width: "290px" }}
          >
            <div className="c-videoCard">
              <div className="c-videoCard__img">
                <picture className="e-picture" id="js-picture">
                  <DropZone setImage={setPhoneImage1}>
                    {" "}
                    <source
                      srcSet={
                        phoneImage1.preview
                          ? phoneImage1.preview
                          : "https://styleguide.kingston.com/fpo/215/120/"
                      }
                      media="(max-width:32em)"
                    />
                  </DropZone>
                  <DropZone setImage={setFeatureImage1}>
                    <img
                      src={
                        featureImage1.preview
                          ? featureImage1.preview
                          : "https://styleguide.kingston.com/fpo/330/185/"
                      }
                      alt="Alternate Text"
                    />
                  </DropZone>
                </picture>

                <svg>
                  <use xlinkHref="../images/icons-map.svg#play"></use>
                </svg>
              </div>
              <div className="c-videoCard__details">
                <header>
                  <h5>{contentOptions.title1 && contentOptions.title1.field}</h5>
                </header>
                {contentOptions.desc1 && contentOptions.desc1.field}
              </div>
            </div>
          </li>
          <li
            className="l-flexTiles__item"
            data-index="1"
            data-flex-tile="true"
            style={{ width: "290px" }}
          >
            <div className="c-videoCard">
              <div className="c-videoCard__img">
                <picture className="e-picture" id="js-picture">
                  <DropZone setImage={setPhoneImage2}>
                    {" "}
                    <source
                      srcSet={
                        phoneImage2.preview
                          ? phoneImage2.preview
                          : "https://styleguide.kingston.com/fpo/215/120/"
                      }
                      media="(max-width:32em)"
                    />
                  </DropZone>
                  <DropZone setImage={setFeatureImage2}>
                    <img
                      src={
                        featureImage2.preview
                          ? featureImage2.preview
                          : "https://styleguide.kingston.com/fpo/330/185/"
                      }
                      alt="Alternate Text"
                    />
                  </DropZone>
                </picture>
                <svg>
                  <use xlinkHref="../images/icons-map.svg#play"></use>
                </svg>
              </div>
              <div className="c-videoCard__details">
                <header>
                  <h5>Video Title</h5>
                </header>
                Brief Video Description Here...
              </div>
            </div>
          </li>
          <li
            className="l-flexTiles__item"
            data-index="2"
            data-flex-tile="true"
            style={{ width: "290px" }}
          >
            <div className="c-videoCard">
              <div className="c-videoCard__img">
                <picture className="e-picture" id="js-picture">
                  <DropZone setImage={setPhoneImage3}>
                    {" "}
                    <source
                      srcSet={
                        phoneImage3.preview
                          ? phoneImage3.preview
                          : "https://styleguide.kingston.com/fpo/215/120/"
                      }
                      media="(max-width:32em)"
                    />
                  </DropZone>
                  <DropZone setImage={setFeatureImage3}>
                    <img
                      src={
                        featureImage3.preview
                          ? featureImage3.preview
                          : "https://styleguide.kingston.com/fpo/330/185/"
                      }
                      alt="Alternate Text"
                    />
                  </DropZone>
                </picture>
                <svg>
                  <use xlinkHref="../images/icons-map.svg#play"></use>
                </svg>
              </div>
              <div className="c-videoCard__details">
                <header>
                  <h5>Video Title</h5>
                </header>
                Brief Video Description Here...
              </div>
            </div>
          </li>
          <li
            className="l-flexTiles__item"
            data-index="3"
            data-flex-tile="true"
            style={{ width: "290px" }}
          >
            <div className="c-videoCard">
              <div className="c-videoCard__img">
                <picture className="e-picture" id="js-picture">
                  <DropZone setImage={setPhoneImage4}>
                    {" "}
                    <source
                      srcSet={
                        phoneImage4.preview
                          ? phoneImage4.preview
                          : "https://styleguide.kingston.com/fpo/215/120/"
                      }
                      media="(max-width:32em)"
                    />
                  </DropZone>
                  <DropZone setImage={setFeatureImage4}>
                    <img
                      src={
                        featureImage4.preview
                          ? featureImage4.preview
                          : "https://styleguide.kingston.com/fpo/330/185/"
                      }
                      alt="Alternate Text"
                    />
                  </DropZone>
                </picture>
                <svg>
                  <use xlinkHref="../images/icons-map.svg#play"></use>
                </svg>
              </div>
              <div className="c-videoCard__details">
                <header>
                  <h5>Video Title</h5>
                </header>
                Brief Video Description Here...
              </div>
            </div>
          </li>
          <li
            className="l-flexTiles__item"
            data-index="4"
            data-flex-tile="true"
            style={{ width: "290px" }}
          >
            <div className="c-videoCard">
              <div className="c-videoCard__img">
                <picture className="e-picture" id="js-picture">
                  <DropZone setImage={setPhoneImage5}>
                    {" "}
                    <source
                      srcSet={
                        phoneImage5.preview
                          ? phoneImage5.preview
                          : "https://styleguide.kingston.com/fpo/215/120/"
                      }
                      media="(max-width:32em)"
                    />
                  </DropZone>
                  <DropZone setImage={setFeatureImage5}>
                    <img
                      src={
                        featureImage5.preview
                          ? featureImage5.preview
                          : "https://styleguide.kingston.com/fpo/330/185/"
                      }
                      alt="Alternate Text"
                    />
                  </DropZone>
                </picture>
                <svg>
                  <use xlinkHref="../images/icons-map.svg#play"></use>
                </svg>
              </div>
              <div className="c-videoCard__details">
                <header>
                  <h5>Video Title</h5>
                </header>
                Brief Video Description Here...
              </div>
            </div>
          </li>
          <li
            className="l-flexTiles__item"
            data-index="5"
            data-flex-tile="true"
            style={{ width: "290px" }}
          >
            <div className="c-videoCard">
              <div className="c-videoCard__img">
                <picture className="e-picture" id="js-picture">
                  <DropZone setImage={setPhoneImage6}>
                    {" "}
                    <source
                      srcSet={
                        phoneImage6.preview
                          ? phoneImage6.preview
                          : "https://styleguide.kingston.com/fpo/215/120/"
                      }
                      media="(max-width:32em)"
                    />
                  </DropZone>
                  <DropZone setImage={setFeatureImage6}>
                    <img
                      src={
                        featureImage6.preview
                          ? featureImage6.preview
                          : "https://styleguide.kingston.com/fpo/330/185/"
                      }
                      alt="Alternate Text"
                    />
                  </DropZone>
                </picture>
                <svg>
                  <use xlinkHref="../images/icons-map.svg#play"></use>
                </svg>
              </div>
              <div className="c-videoCard__details">
                <header>
                  <h5>Video Title</h5>
                </header>
                Brief Video Description Here...
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. Don't add until after html is saved.
export default {
  path: "video-gallery",
  component: S_VideoGallery,
  navtxt: "Video Gallery",
  htmlName: "VideoGallery",
};
