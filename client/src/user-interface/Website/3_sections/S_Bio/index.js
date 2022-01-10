/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import DropZone from "../../../Styleguide/0_hooks/dropzone";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Bio = () => {
  // add instance of appstate
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [featureImage, setFeatureImage] = useState({ preview: "" });
  const [iconImage, setIconImage] = useState({ preview: "" });

  useEffect(() => {
    let bioVars = {
      ...appState,
      currentPath: "/ui/bio",
      outputName: "Bio",
      headerName: "Bio",
      description: "The Bio Section.....",
      htmlSaved: true,
      currentTheme: "t-white",
      scripts: [],
      specs: [
        ["Bio Image", ["Width: 455px, Height: 284px"]],
        ["Profile Icon", ["Width: 72px, Height: 72px"]],
        ["Details", ["String Text"]],
        ["SVG", ["Social Media logos at a 1:1 ratio."]],
      ],
    };
    setAppState(bioVars);
    setContentOptions({
      Heading: { label: "Heading Text", checkbox: null, field: "Heading Text" },
      IconText: {
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        checkbox: null,
        field: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      DetailTitle1: { label: "Detail Title 1", checkbox: null, field: "Detail Title 1" },
      Detail1Text: { label: "Detail 1 Text", checkbox: null, field: "Detail 1 Text" },
      DetailTitle2: { label: "Detail Title 2", checkbox: null, field: "Detail Title 2" },
      Detail2Text: { label: "Detail 2 Text", checkbox: null, field: "Detail 2 Text" },
    });
    setDimensions({ ...dimensions, viewHeight: "580" });
  }, []);
  //   Customize this loader text
  if (!contentOptions) return "...Loading Bio Section";
  return (
    //  add current section classname plus theme
    <section className={"s-bio " + appState.currentTheme}>
      <div className="l-inner">
        <div className="c-bioCard c-bioCard--left">
          <DropZone setImage={setFeatureImage}>
            <img
              src={
                featureImage.preview
                  ? featureImage.preview
                  : "https://styleguide.kingston.com/fpo/455/285"
              }
              alt="Alternate Text"
              data-dragdrop="true"
              className=""
            />
          </DropZone>
          <table className="c-bioCard__table">
            <tbody>
              <tr>
                <th scope="col">
                  {contentOptions.DetailTitle1 && contentOptions.DetailTitle1.field}
                </th>
                <td>{contentOptions.Detail1Text && contentOptions.Detail1Text.field}</td>
              </tr>
              <tr>
                <th scope="col">
                  {contentOptions.DetailTitle2 && contentOptions.DetailTitle2.field}
                </th>
                <td>{contentOptions.Detail2Text && contentOptions.Detail2Text.field}</td>
              </tr>
            </tbody>
          </table>
          <div className="c-bioCard__social">
            <ul>
              <li>
                <a
                  href="Youtube Link"
                  target="_blank"
                  aria-label="Youtube Handle's Youtube"
                  style={{ backgroundColor: "#E22D27" }}
                  //   style="background-color:#E22D27;"
                >
                  <svg width="24" height="17" viewBox="0 0 24 17" className="">
                    <path d="M3 16.66a79.44 79.44 0 0 0 9 .34 79.42 79.42 0 0 0 9-.34 3.05 3.05 0 0 0 2.59-2.4c.346-1.9.483-3.83.41-5.76a26.52 26.52 0 0 0-.41-5.76A3.05 3.05 0 0 0 21 .34 79.45 79.45 0 0 0 12 0a79.47 79.47 0 0 0-9 .34 3 3 0 0 0-2.58 2.4A26.52 26.52 0 0 0 0 8.5a26.48 26.48 0 0 0 .42 5.77A3 3 0 0 0 3 16.66zM8.9 4.22l7.63 4-7.63 4v-8z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="Facebook Link"
                  target="_blank"
                  aria-label="Facebook Handle's Facebook"
                  style={{ backgroundColor: "#3D5A98" }}
                  //   style="background-color:#3D5A98;"
                >
                  <svg width="21" height="21" viewBox="0 0 21 21" className="">
                    <path d="M0 3.5v14A3.51 3.51 0 0 0 3.5 21h14a3.51 3.51 0 0 0 3.5-3.5v-14A3.51 3.51 0 0 0 17.5 0h-14A3.51 3.51 0 0 0 0 3.5zm8.6 4h1.9v-2c0-2.65 1.14-4.23 4.26-4.23h3.59v3.29h-2.93c-.87 0-1 .45-1 1.3v1.63h3.94l-.52 3h-3.4v9.19H10.5V10.5H8.6v-3z">
                      {" "}
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="Twitter Link"
                  target="_blank"
                  aria-label="Twitter Handle's Twitter"
                  //   style={{"background-color:#1DA1F2;"}}
                  style={{ backgroundColor: "#1DA1F2" }}
                >
                  <svg width="22" height="18" viewBox="0 0 22 18" className="">
                    <path d="M19.76 5.07v-.59A9.2 9.2 0 0 0 22 2.13a9 9 0 0 1-2.59.72 4.56 4.56 0 0 0 2-2.51 9 9 0 0 1-2.87 1.1 4.51 4.51 0 0 0-7.69 4.11A12.79 12.79 0 0 1 1.53.83a4.57 4.57 0 0 0 1.4 6.07 4.47 4.47 0 0 1-2-.57v.06a4.54 4.54 0 0 0 3.57 4.45 4.51 4.51 0 0 1-2.03.08 4.52 4.52 0 0 0 4.22 3.16A9 9 0 0 1 1.08 16 9 9 0 0 1 0 16a12.71 12.71 0 0 0 6.92 2A12.8 12.8 0 0 0 19.76 5.07z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="Instagram Link"
                  target="_blank"
                  aria-label="Instagram Handle's Instagram"
                  //   style="background-color:#353535;"
                  style={{ backgroundColor: "#353535" }}
                >
                  <svg width="21" height="21" viewBox="0 0 21 21" className="">
                    <path d="M.55 17.22a5.1 5.1 0 0 0 1.2 1.84 5.11 5.11 0 0 0 1.84 1.2 7.62 7.62 0 0 0 2.53.48c1.11.05 1.46.06 4.29.06s3.18 0 4.29-.06a7.62 7.62 0 0 0 2.53-.48 5.31 5.31 0 0 0 3-3 7.65 7.65 0 0 0 .48-2.53c0-1 .06-1.4.06-3.62V9.73c0-2.22 0-2.61-.06-3.62a7.65 7.65 0 0 0-.48-2.53 5.1 5.1 0 0 0-1.2-1.84A5.11 5.11 0 0 0 17.22.55 7.65 7.65 0 0 0 14.7.06C13.7 0 13.3 0 11.19 0H9.62C7.51 0 7.11 0 6.11.06a7.65 7.65 0 0 0-2.52.49 5.11 5.11 0 0 0-1.84 1.2 5.1 5.1 0 0 0-1.2 1.84 7.65 7.65 0 0 0-.49 2.53C0 7.22 0 7.58 0 10.4c0 2.82 0 3.18.06 4.29a7.64 7.64 0 0 0 .49 2.53zm1.39-11a5.75 5.75 0 0 1 .36-1.93 3.23 3.23 0 0 1 .78-1.2 3.23 3.23 0 0 1 1.2-.78 5.76 5.76 0 0 1 1.92-.37c1.1-.05 1.43-.06 4.2-.06 2.77 0 3.11 0 4.2.06a5.76 5.76 0 0 1 1.93.36 3.23 3.23 0 0 1 1.2.78c.346.337.613.747.78 1.2.23.618.352 1.27.36 1.93.05 1.1.06 1.43.06 4.2 0 2.77 0 3.11-.06 4.2a5.74 5.74 0 0 1-.36 1.93 3.44 3.44 0 0 1-2 2 5.76 5.76 0 0 1-1.93.36c-1.1.05-1.43.06-4.2.06-2.77 0-3.11 0-4.2-.06a5.76 5.76 0 0 1-1.93-.36 3.44 3.44 0 0 1-2-2 5.74 5.74 0 0 1-.36-1.93c-.05-1.1-.06-1.43-.06-4.2 0-2.77.06-3.11.11-4.21v.02z"></path>
                    <path d="M16 10.31a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0zm-9.07 0a3.57 3.57 0 1 1 7.14 0 3.57 3.57 0 0 1-7.14 0z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="Twitch Link"
                  target="_blank"
                  aria-label="Twitch Handle's Twitch"
                  //   style="background-color:#6441A4;"
                  style={{ backgroundColor: "#6441A4" }}
                >
                  <svg width="20" height="21" viewBox="0 0 20 21" className="">
                    <path d="M19.85.26V0H1.44a.23.23 0 0 0-.27.2C.81 1.32.43 2.43.07 3.55a1.3 1.3 0 0 0-.07.4v14.14h5v2.46h2.92a.44.44 0 0 0 .27-.14c.72-.71 1.43-1.42 2.14-2.15a.62.62 0 0 1 .5-.2H14a.5.5 0 0 0 .4-.17l5.27-5.3a.51.51 0 0 0 .17-.4c.007-3.967.01-7.943.01-11.93zM17.88 12L15 14.84a.52.52 0 0 1-.33.14h-4.53a.45.45 0 0 0-.36.15l-2.2 2.21-.14.14V15H3.08V1.85H18v9.8a.46.46 0 0 1-.12.35z"></path>
                    <path d="M7.97 6.57h1.96v6.01H7.97zM12.97 6.57h1.96v6.01h-1.96z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="PlayStation Link"
                  target="_blank"
                  aria-label="PlayStation Handle's PlayStation"
                >
                  <svg width="19" height="25" viewBox="0 0 25 25" className="">
                    <path d="M24.3 16.9c-.5.6-1.6 1-1.6 1L14.1 21v-2.3l6.4-2.3c.8-.3.9-.6.3-.9-.6-.3-1.6-.1-2.4.1l-4.3 1.5v-2.4l.3-.1s1.3-.4 3-.6 3.9 0 5.5.6c1.7.8 1.9 1.7 1.4 2.3zM14.8 13V7.2c0-.8-.1-1.4-.8-1.5-.5-.1-.8.3-.8 1v14.8l-4-1.3V2.7c1.6.4 4.1 1 5.5 1.5 3.4 1.1 4.5 2.6 4.5 5.9.1 2.9-1.9 4.1-4.4 2.9zM2.1 18.5C.2 18-.2 16.9.7 16.1c.8-.6 2.1-1 2.1-1l5.6-2v2.3l-4.1 1.5c-.8.3-.9.6-.3.9s1.6.1 2.4-.1l2-.8v2c-.1 0-.3 0-.4.1-1.8.3-3.9.2-5.9-.5zM23.8 20.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm-1.6 0c0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7s-.7.3-.7.7zm.5.4h-.2V20h.3c.2 0 .2 0 .3.1 0 0 .1.1.1.2s-.1.2-.2.2c.1 0 .1.1.2.2 0 .1 0 .2.1.2h-.2s0-.1-.1-.2c0-.1-.1-.1-.2-.1h-.1v.3zm0-.5c.2 0 .3 0 .3-.1s-.1-.1-.2-.1h-.1v.2z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h4>{contentOptions.Heading && contentOptions.Heading.field}</h4>
        <DropZone setImage={setIconImage}>
          <img
            className="s-bio__icon"
            src={
              iconImage.preview ? iconImage.preview : "https://styleguide.kingston.com/fpo/100/100"
            }
            alt="Alternate Text"
          />
        </DropZone>
        <p>{contentOptions.IconText && contentOptions.IconText.field}</p>
      </div>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. Don't add until after html is saved.
export default {
  path: "bio",
  component: S_Bio,
  navtxt: "Bio",
  htmlName: "Bio",
  icon: "bio",
};
