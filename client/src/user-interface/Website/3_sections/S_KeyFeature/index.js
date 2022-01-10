/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from "react";
import DropZone from "../../../Styleguide/0_hooks/dropzone";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_keyFeature = () => {
  // These are all states that are needed for sections with picture tags.
  const [phone, setPhone] = useState(null);
  const [tablet, setTablet] = useState(null);
  const [desktop, setDesktop] = useState(null);
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    // viewHeight is used to autoadjust the height in DimensionsContext
    // viewWidth is set and changed outside the web components, but preserved by DimensionsContext
    // outputName is used by IframeWrapper to preload html if it's done.
    // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
    // Specs are what's loaded in the specs tab
    // contentOptions are the fields that are editable in that tab
    let keyVars = {
      ...appState,
      currentPath: "/ui/key-feature",
      outputName: "KeyFeature",
      headerName: "Key Feature",
      currentTheme: null,
      description:
        "The Key Features Section displays information about a specific feature along with a grand featured image backdrop.",
      htmlSaved: true,
      scripts: [],
      specs: [
        ["Image", ["Small: 512 × 752", "Medium: 1024 × 512", "Large: 2048 × 610"]],
        ["Heading", ["Character Limit: ##"]],
        ["Paragraph", ["Character Limit: ##"]],
        ["Button", ["Character Limit: ##"]],
      ],
    };
    setAppState(keyVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown. CurrentLang can be left off.
    setContentOptions({
      alignment: {
        label: "Text Align",
        checkbox: null,
        field: [
          "Top Left",
          "Top Center",
          "Top Right",
          "Middle Left",
          "Middle Right",
          "Bottom Left",
          "Bottom Center",
          "Bottom Right",
        ],
        selected: "Top Left",
      },
      txtColor: { label: "White Text Mode", checkbox: false, field: null },
      heading: {
        label: "Heading",
        checkbox: null,
        field: { English: "Key Feature", Spanish: "Función Clave", Chinese: "关键特点" },
      },
      desc: {
        label: "Description",
        checkbox: true,
        field: {
          English: "Here is some text that's a feature description.",
          Spanish: "Aquí hay un texto que es una descripción de la función.",
          Chinese: "这里有一些文字是特征描述。",
        },
      },
      altBtn: {
        label: "Second Button",
        checkbox: false,
        field: { English: "Button Text", Spanish: "Botón de texto", Chinese: "按钮文字" },
      },
      btn: {
        label: "Primary Button",
        checkbox: true,
        field: { English: "Button Text", Spanish: "Botón de texto", Chinese: "按钮文字" },
      },
      currentLang: "English",
    });
    setDimensions({ ...dimensions, viewHeight: "610", width: window.innerWidth - 24 });
  }, []);
  //   Customize this loader text
  if (!contentOptions) return "...Loading Key Feature";
  return (
    <DropZone setPhone={setPhone} setTablet={setTablet} setDesktop={setDesktop} pictureTag={true}>
      <section
        className={`s-keyFeature ${
          contentOptions.txtColor && contentOptions.txtColor.checkbox
            ? "s-keyFeature--txtWhite"
            : ""
        }${
          contentOptions.alignment && contentOptions.alignment.selected == "Top Center"
            ? " s-keyFeature--posTC"
            : ""
        }${
          contentOptions.alignment && contentOptions.alignment.selected == "Top Right"
            ? " s-keyFeature--posTR"
            : ""
        }${
          contentOptions.alignment && contentOptions.alignment.selected == "Middle Left"
            ? " s-keyFeature--posML"
            : ""
        }${
          contentOptions.alignment && contentOptions.alignment.selected == "Middle Right"
            ? " s-keyFeature--posMR"
            : ""
        }${
          contentOptions.alignment && contentOptions.alignment.selected == "Bottom Left"
            ? " s-keyFeature--posBL"
            : ""
        }${
          contentOptions.alignment && contentOptions.alignment.selected == "Bottom Center"
            ? " s-keyFeature--posBC"
            : ""
        }${
          contentOptions.alignment && contentOptions.alignment.selected == "Bottom Right"
            ? " s-keyFeature--posBR"
            : ""
        }`}
      >
        <picture className={`e-picture s-keyFeature__image`} id="js-picture">
          <source
            srcSet={
              phone && phone.phone ? phone.phone : "https://styleguide.kingston.com/fpo/512/750"
            }
            media="(max-width:32em)"
          />
          <source
            srcSet={
              tablet && tablet.tablet
                ? tablet.tablet
                : "https://styleguide.kingston.com/fpo/1024/512"
            }
            media="(max-width:64em)"
          />

          <img
            src={
              desktop && desktop.desktop
                ? desktop.desktop
                : "https://styleguide.kingston.com/fpo/2048/610"
            }
            alt="Alternate Text"
          />
        </picture>
        <div className="l-inner u-p0">
          <div className={`s-keyFeature__content u-p`}>
            <article>
              <h4>
                {contentOptions.heading && contentOptions.heading.field[contentOptions.currentLang]}
              </h4>
              <p>{contentOptions.desc && contentOptions.desc.field[contentOptions.currentLang]}</p>
              {contentOptions.altBtn && contentOptions.altBtn.checkbox ? (
                <a
                  className="e-btn e-btn--alt2 u-mr1"
                  target="_self"
                  title="Button Title"
                  href="#button"
                >
                  <span>
                    {contentOptions.altBtn &&
                      contentOptions.altBtn.field[contentOptions.currentLang]}
                  </span>
                </a>
              ) : (
                ""
              )}
              {contentOptions.btn && contentOptions.btn.checkbox ? (
                <a target="_self" title="Button Title" href="#button" className={`e-btn`}>
                  {/* <svg>
                  <use
                    xmlns="http://www.w3.org/1999/xlink"
                    xlink="./public/images/icons-map.svg#play"
                  ></use>
                </svg> */}
                  <span>
                    {contentOptions.btn && contentOptions.btn.field[contentOptions.currentLang]}
                  </span>
                </a>
              ) : (
                ""
              )}
            </article>
          </div>
        </div>
      </section>
    </DropZone>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. ex: htmlName: "KeyFeature",
export default {
  path: "key-feature",
  component: S_keyFeature,
  navtxt: "Key Feature",
  htmlName: "KeyFeature",
  icon: "key-features",
};
