/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_SupportContact = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let vars = {
      ...appState,
      currentPath: "/ui/support-contact",
      outputName: "SupportContact",
      headerName: "Support Contact",
      currentTheme: null,
      description:
        "The Support Contact section provides the contact information to customer service and technical issues.",
      htmlSaved: true,
      scripts: ["./supportContact.section.js"],
      specs: [
        ["Headline", ["Standard Text"]],
        ["Description", ["Standard Text"]],
        ["Contact", ["Standard Text, styling modified by accordion component"]],
        ["SVG", ["###"]],
      ],
    };
    setAppState(vars);
    setContentOptions({
      title1: {
        name: "title1",
        label: "Title 1",
        checkbox: null,
        field: "Live chat with Customer Service",
      },
      desc1: {
        name: "desc1",
        label: "Description 1",
        checkbox: null,
        field: "Monday-Friday 7 a.m. - 5 p.m PST",
      },
      button1: {
        name: "button1",
        label: "Button Text 1",
        checkbox: null,
        field: "Live Chat",
      },
      title2: {
        name: "title2",
        label: "Title 2",
        checkbox: null,
        field: "Email Customer Service",
      },
      desc2: {
        name: "desc2",
        label: "Description 2",
        checkbox: null,
        field: "Complete a short form",
      },
      button2: {
        name: "button2",
        label: "Button Text 2",
        checkbox: null,
        field: "Email",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "737", width: window.innerWidth - 24 });
  }, []);

  if (!contentOptions) return "...Loading Support Contact Section";
  return (
    <section className="s-supportContact">
      <div className="l-inner">
        <div className="l-grid l-grid--2col@md">
          <div className="c-supportContactCard c-accordion">
            <h3
              className="c-accordion__tab c-accordion__tab--active"
              id="accTab-uv93q8"
              style={{ minHeight: "128px" }}
            >
              <button aria-controls="accPanel-49ntkf" aria-expanded="true">
                Contact Customer Service
                <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden={true}>
                  <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                </svg>
                <p>
                  If you placed an order or need help making a purchase decision, contact our
                  friendly, knowledgeable customer service representatives.
                </p>
              </button>
            </h3>
            <div
              className="c-accordion__panel"
              id="accPanel-49ntkf"
              aria-labelledby="accTab-uv93q8"
            >
              <div className="c-accordion__panel__content c-supportContactCard__content">
                <div className="c-supportContactCard__content__item">
                  <svg
                    className="c-supportContactCard__content__item__icon"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#live-chat-white"
                    ></use>
                  </svg>
                  <div className="c-supportContactCard__content__item__info">
                    <h4 className="u-h5">{contentOptions.title1 && contentOptions.title1.field}</h4>
                    <p>{contentOptions.desc1 && contentOptions.desc1.field}</p>
                    <a className="e-btn" target="_self" title="Live Chat" href="#livechat">
                      <span>{contentOptions.button1 && contentOptions.button1.field}</span>
                    </a>
                  </div>
                </div>
                <div className="c-supportContactCard__content__item">
                  <svg
                    className="c-supportContactCard__content__item__icon"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#email_technical_support"
                    ></use>
                  </svg>
                  <div className="c-supportContactCard__content__item__info">
                    <h4 className="u-h5">Email Customer Service</h4>
                    <p>Complete a short form</p>
                    <a className="e-btn" target="_self" title="Email" href="#email">
                      <span>Email</span>
                    </a>
                  </div>
                </div>
                <div className="c-supportContactCard__content__item">
                  <svg
                    className="c-supportContactCard__content__item__icon"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#call_technical_support"
                    ></use>
                  </svg>
                  <div className="c-supportContactCard__content__item__info">
                    <h4 className="u-h5">Call Customer Service</h4>
                    <p>Monday-Friday 7 a.m. - 5 p.m. PST</p>
                    <p className="c-supportContactCard__content__item__info__number">
                      +1 (800) 435-0640
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-supportContactCard c-accordion">
            <h3
              className="c-accordion__tab c-accordion__tab--active"
              id="accTab-8latq2"
              style={{ minHeight: "128px" }}
            >
              <button aria-controls="accPanel-0adpva" aria-expanded="true">
                Contact Technical Support
                <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden={true}>
                  <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                </svg>
                <p>Questions about a Kingston product you already own? Ask a Kingston expert.</p>
              </button>
            </h3>
            <div
              className="c-accordion__panel"
              id="accPanel-0adpva"
              aria-labelledby="accTab-8latq2"
            >
              <div className="c-accordion__panel__content c-supportContactCard__content">
                <div className="c-supportContactCard__content__item">
                  <svg
                    className="c-supportContactCard__content__item__icon"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#live-chat-white"
                    ></use>
                  </svg>
                  <div className="c-supportContactCard__content__item__info">
                    <h4 className="u-h5">{contentOptions.title2 && contentOptions.title2.field}</h4>
                    <p>{contentOptions.desc2 && contentOptions.desc2.field}</p>
                    <a className="e-btn" target="_self" title="Live Chat" href="#livechat">
                      <span>{contentOptions.button2 && contentOptions.button2.field}</span>
                    </a>
                  </div>
                </div>
                <div className="c-supportContactCard__content__item">
                  <svg
                    className="c-supportContactCard__content__item__icon"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#email_technical_support"
                    ></use>
                  </svg>
                  <div className="c-supportContactCard__content__item__info">
                    <h4 className="u-h5">Email Technical Support</h4>
                    <p>Complete a short form</p>
                    <a className="e-btn" target="_self" title="Email" href="#email">
                      <span>Email</span>
                    </a>
                  </div>
                </div>
                <div className="c-supportContactCard__content__item">
                  <svg
                    className="c-supportContactCard__content__item__icon"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#call_technical_support"
                    ></use>
                  </svg>
                  <div className="c-supportContactCard__content__item__info">
                    <h4 className="u-h5">Call Technical Support</h4>
                    <p>Monday-Friday 7 a.m. - 5 p.m. PST</p>
                    <p className="c-supportContactCard__content__item__info__number">
                      +1 (800) 435-0640
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "support-contact",
  component: S_SupportContact,
  navtxt: "Support Contact",
  htmlName: "SupportContact",
};
