/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Footer = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const [showForm, setShowForm] = useState(true);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    let footerVars = {
      ...appState,
      currentPath: "/ui/footer",
      outputName: "Footer",
      headerName: "Footer",
      description:
        "The Footer Section is a small area at the bottom of the page that provides access to important information and links.",
      htmlSaved: true,
      currentTheme: "t-white",
      scripts: ["../rexusManager.component.js", "../cuid.component.js", "../forms.component.js"],
      specs: [
        ["Header", ["This has different styling than the global tag. Wrapped in tags"]],
        [
          "Links",
          ["Standard text, will use the tag with inherit global styling. Wrapped within tags"],
        ],
      ],
    };
    setAppState(footerVars);
    setContentOptions({
      heading1: { label: "Heading 1", checkbox: true, field: "Heading 1" },
      link1: { label: "Link 1", checkbox: true, field: "Item Link 1" },
      link2: { label: "Link 2", checkbox: true, field: "Item Link 2" },
      link3: { label: "Link 3", checkbox: true, field: "Item Link 3" },
      link4: { label: "Link 4", checkbox: true, field: "Item Link 4" },
      link5: { label: "Link 5", checkbox: true, field: "Item Link 5" },
      link6: { label: "Link 6", checkbox: true, field: "Item Link 6" },
      heading2: { label: "Heading 2", checkbox: true, field: "Heading 2" },
      link7: { label: "Link 7", checkbox: true, field: "Item Link 7" },
      link8: { label: "Link 8", checkbox: true, field: "Item Link 8" },
      link9: { label: "Link 9", checkbox: true, field: "Item Link 9" },
      link10: { label: "Link 10", checkbox: true, field: "Item Link 10" },
      link11: { label: "Link 11", checkbox: true, field: "Item Link 11" },
      link12: { label: "Link 12", checkbox: true, field: "Item Link 12" },
      heading3: { label: "Heading 3", checkbox: true, field: "Heading 3" },
      link13: { label: "Link 13", checkbox: true, field: "Item Link 13" },
      link14: { label: "Link 14", checkbox: true, field: "Item Link 14" },
      link15: { label: "Link 15", checkbox: true, field: "Item Link 15" },
      link16: { label: "Link 16", checkbox: true, field: "Item Link 16" },
      link17: { label: "Link 17", checkbox: true, field: "Item Link 17" },
      link18: { label: "Link 18", checkbox: true, field: "Item Link 18" },
      heading4: { label: "Heading 4", checkbox: true, field: "Heading 4" },
      link19: { label: "Link 19", checkbox: true, field: "Item Link 19" },
      link20: { label: "Link 20", checkbox: true, field: "Item Link 20" },
      link21: { label: "Link 21", checkbox: true, field: "Item Link 21" },
      link22: { label: "Link 22", checkbox: true, field: "Item Link 22" },
      link23: { label: "Link 23", checkbox: true, field: "Item Link 23" },
      link24: { label: "Link 24", checkbox: true, field: "Item Link 24" },
      ctaText: {
        label: "CTA blurb",
        checkbox: true,
        field: "Get a sneak peek at our new products when you sign up to join the HyperX Family.",
      },
      ctaBtn: { label: "CTA btn Text", checkbox: true, field: "Sign Me Up" },
    });
    setDimensions({ ...dimensions, viewHeight: "510", hardcodeHeight: true });
  }, []);

  if (!contentOptions || Object.keys(contentOptions) < 1) return "...Loading FAQs";
  return (
    <>
      <section className={`s-footer ` + appState.currentTheme}>
        <div className="l-inner u-max+">
          <div className="l-row">
            <div className="l-row__col l-2/3@md l-4/5@lg">
              <div className="l-row s-footer__links s-footer__links--flow2@sm s-footer__links--flow3@md">
                <div className="l-row__col l-1/4@lg">
                  <div className="s-footer__links__section">
                    <span className="u-txt-uppercase u-h6">
                      <a href="#headingLink" title="Anchor Title">
                        {contentOptions.heading1 && contentOptions.heading1.field}
                      </a>
                    </span>
                    <ul className="u-list-unstyled u-m0 u-p0">
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link1 && contentOptions.link1.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link2 && contentOptions.link2.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link3 && contentOptions.link3.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link4 && contentOptions.link4.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link5 && contentOptions.link5.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link6 && contentOptions.link6.field}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="l-row__col l-1/4@lg">
                  <div className="s-footer__links__section">
                    <span className="u-txt-uppercase u-h6">
                      <a href="#headingLink" title="Anchor Title">
                        {contentOptions.heading2 && contentOptions.heading2.field}
                      </a>
                    </span>
                    <ul className="u-list-unstyled u-m0 u-p0">
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link7 && contentOptions.link7.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link8 && contentOptions.link8.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link9 && contentOptions.link9.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link10 && contentOptions.link10.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link11 && contentOptions.link11.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link12 && contentOptions.link12.field}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="l-row__col l-1/4@lg">
                  <div className="s-footer__links__section">
                    <span className="u-txt-uppercase u-h6">
                      <a href="#headingLink" title="Anchor Title">
                        {contentOptions.heading3 && contentOptions.heading3.field}
                      </a>
                    </span>
                    <ul className="u-list-unstyled u-m0 u-p0">
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link13 && contentOptions.link13.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link14 && contentOptions.link14.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link15 && contentOptions.link15.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link16 && contentOptions.link16.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link17 && contentOptions.link17.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link18 && contentOptions.link18.field}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="l-row__col l-1/4@lg">
                  <div className="s-footer__links__section">
                    <span className="u-txt-uppercase u-h6">
                      <a href="#headingLink" title="Anchor Title">
                        {contentOptions.heading4 && contentOptions.heading4.field}
                      </a>
                    </span>
                    <ul className="u-list-unstyled u-m0 u-p0">
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link19 && contentOptions.link19.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link20 && contentOptions.link20.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link21 && contentOptions.link21.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link22 && contentOptions.link22.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link23 && contentOptions.link23.field}
                        </a>
                      </li>
                      <li>
                        <a href="#itemLink" title="Anchor Title">
                          {contentOptions.link24 && contentOptions.link24.field}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-row__col l-1/3@md l-1/5@lg">
              <div className="s-footer__email">
                <p className="u-h6">{contentOptions.ctaText && contentOptions.ctaText.field}</p>
                <button
                  className="e-btn"
                  title="Button Title"
                  data-popup="emailPopUp"
                  onClick={() => setShowForm(!showForm)}
                >
                  <span>{contentOptions.ctaBtn && contentOptions.ctaBtn.field}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showForm ? (
        <div
          className="c-dialog u-autoMargin c-dialog--form c-dialog--popup c-dialog--active"
          tabIndex="0"
          id="emailPopUp"
          aria-labelledby="dialogHeader0"
        >
          <header className="c-dialog__header" role="heading" id="dialogHeader0">
            <button
              className="c-dialog__header__close"
              aria-label="close"
              data-close="true"
              data-popup="emailPopUp"
              onClick={() => setShowForm(!showForm)}
            >
              <svg viewBox="0 0 14 14">
                <path d="M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z"></path>
                <path d="M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z"></path>
              </svg>
            </button>
            <p>Keep in touch! Sign up to our emails for Kingston news and more.</p>
          </header>
          <div className="c-dialog__content t-grungeGrey">
            <p>
              Please sign me up for emails from
              <a
                href="#"
                className="c-tooltip c-tooltip--top"
                data-toolid="kingston"
                role="tooltip"
                aria-describedby="kingston"
              >
                Kingston
              </a>
              about its products, services and news.
            </p>
            <div className="c-tooltip__message" id="kingston">
              <p>The tooltip&apos;s message will appear above the SPAN or ANCHOR tag.</p>
            </div>
            <div className="c-dialog__content__radio">
              <div className="f-input">
                <div className="f-input__checkbox">
                  <input type="checkbox" name="checkboxName" id="checkboxName0" value="Personal" />
                  <label htmlFor="checkboxName0" aria-checked="false" tabIndex="0">
                    Personal
                  </label>
                </div>
                <div className="f-input__checkbox">
                  <input type="checkbox" name="checkboxName" id="checkboxName1" value="Gaming" />
                  <label htmlFor="checkboxName1" aria-checked="false" tabIndex="0">
                    Gaming
                  </label>
                </div>
                <div className="f-input__checkbox">
                  <input
                    type="checkbox"
                    name="checkboxName"
                    id="checkboxName2"
                    value="Commercial"
                  />
                  <label htmlFor="checkboxName2" aria-checked="false" tabIndex="0">
                    Commercial
                  </label>
                </div>
              </div>
            </div>
            <form id="js-collapseExample">
              <div className="f-input">
                <div className="f-input__string">
                  <input type="text" name="inputName" id="inputName" />
                  <label htmlFor="inputName">Email Address</label>
                </div>
              </div>
              <button
                className="e-btn"
                title="Button Title"
                id="submitBtnId"
                data-collapse="js-collapseExample"
              >
                <span>Sign Up Now</span>
              </button>
            </form>
            <p id="demoMsg" style={{ display: "none", opacity: "0", transition: "opacity .5s" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="reCAPTCHA">
              This site is protected by reCAPTCHA and the
              <a href="#" className="u-txt-bold">
                Google Privacy Policy
              </a>
              and
              <a href="#" className="u-txt-bold">
                Terms of Service
              </a>
              apply.
            </p>
            <p>
              We’ll handle your information in line with our
              <a href="#">privacy policy</a>. To ‘unsubscribe’ click the link at the bottom of our
              emails.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "footer",
  component: S_Footer,
  navtxt: "Footer",
  htmlName: "Footer",
  icon: "footer",
};
