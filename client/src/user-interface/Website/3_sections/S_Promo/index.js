/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext, useState } from "react";
import DropZone from "../../../Styleguide/0_hooks/dropzone";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Promo = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const [phone, setPhone] = useState(null);
  const [tablet, setTablet] = useState(null);
  const [desktop, setDesktop] = useState(null);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let promoVars = {
      ...appState,
      currentPath: "/ui/promo",
      outputName: "Promo",
      headerName: "Promo Section",
      description: "The Promo section.",
      currentTheme: null,
      htmlSaved: true,
      scripts: [],
      specs: [
        ["Image", ["Small: 512 × 700", "Medium: 1024 × 450+", "Large: 2048 × 400+"]],
        ["Heading", ["Character Limit: 100"]],
        ["Paragraph", ["Character Limit: 250"]],
        ["Button", ["Primary button is always on. It's a solid color."]],
        [
          "Alternate Button",
          ["Alternate button is optional but frequently used. It's transparent in the Promo."],
        ],
      ],
    };
    setAppState(promoVars);
    setContentOptions({
      txtColor: { label: "White Text Mode", checkbox: false, field: null },
      alignment: {
        label: "Text Align",
        checkbox: null,
        field: ["Left", "Center", "Right"],
        selected: "Center",
      },
      wideCopy: { label: "Wide Copy Area", checkbox: false, field: null },
      heading: { label: "Headline", checkbox: null, field: "Article Heading" },
      paragraph: {
        label: "Description Paragraph",
        checkbox: true,
        field: "Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
      },
      btnText: { label: "Button Text", checkbox: true, field: "Button Text" },
      altBtnText: { label: "Alt Button", checkbox: false, field: "Button Text" },
    });
    setDimensions({ ...dimensions, viewHeight: "387", width: window.innerWidth - 24 });
  }, []);

  if (!contentOptions || Object.keys(contentOptions) < 1) return "...Loading Promo Section";
  return (
    <DropZone setPhone={setPhone} setTablet={setTablet} setDesktop={setDesktop} pictureTag={true}>
      <section
        className={`s-promo${
          contentOptions.txtColor && contentOptions.txtColor.checkbox ? " s-promo--dark" : ""
        }${contentOptions.wideCopy && contentOptions.wideCopy.checkbox ? " s-promo--copy50" : ""}${
          contentOptions.alignment && contentOptions.alignment.selected === "Left"
            ? " s-promo--txtLeft"
            : contentOptions.alignment && contentOptions.alignment.selected === "Right"
            ? " s-promo--txtRight"
            : ""
        }`}
      >
        <picture className="e-picture s-promo__image" id="js-picture">
          <source
            srcSet={
              phone && phone.phone ? phone.phone : "https://styleguide.kingston.com/fpo/512/700"
            }
            media="(max-width:32em)"
          />
          <source
            srcSet={
              tablet && tablet.tablet
                ? tablet.tablet
                : "https://styleguide.kingston.com/fpo/1024/450"
            }
            media="(max-width:64em)"
          />

          <img
            src={
              desktop && desktop.desktop
                ? desktop.desktop
                : "https://styleguide.kingston.com/fpo/2048/600"
            }
            alt="Alternate Text"
          />
        </picture>
        <div className="s-promo__content">
          <article>
            <h4>{contentOptions.heading && contentOptions.heading.field}</h4>
            {contentOptions.paragraph && contentOptions.paragraph.checkbox ? (
              <p>{contentOptions.paragraph && contentOptions.paragraph.field}</p>
            ) : (
              ""
            )}
            {contentOptions.altBtnText && contentOptions.altBtnText.checkbox ? (
              <a className="e-btn e-btn--alt2 u-mr1" target="_self" title="Button Title">
                <span>{contentOptions.altBtnText.field}</span>
              </a>
            ) : (
              ""
            )}
            {contentOptions.btnText && contentOptions.btnText.checkbox ? (
              <a className="e-btn" target="_self" title="Button Title">
                <span>{contentOptions.btnText && contentOptions.btnText.field}</span>
              </a>
            ) : (
              ""
            )}
          </article>
        </div>
      </section>
    </DropZone>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "promo",
  component: S_Promo,
  navtxt: "Promo Section",
  htmlName: "Promo",
};
