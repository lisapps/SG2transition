import React, { useContext, useEffect } from "react";

import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
// Dropzones are set in ambassador cards.

const S_AskAnExpert = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    let ambVars = {
      ...appState,
      currentPath: "/ui/ask-an-expert",
      outputName: "AskAnExpert",
      headerName: "Ask An Expert",
      description:
        "The Ask an Expert form is a lead generation type form used to gain potential clients and partners.",
      htmlSaved: false,
      scripts: [
        "../rexusManager.component.js",
        "../cuid.component.js",
        "../dropDown.component.js",
        "../formInput.component.js",
        "../tooltip.component.js",
      ],
      currentTheme: null,
      specs: null,
    };
    setAppState(ambVars);
    setContentOptions(null);
    setDimensions({ ...dimensions, viewHeight: "657", width: window.innerWidth - 24 });
  }, []);

  if (!appState) return "...Loading Ask an Expert";
  return (
    <section className="s-askAnExpert">
      <div className="l-inner">
        <form
          className="s-askAnExpert__form"
          data-steps="data-steps"
          data-final-step="thankYouForm"
        >
          <div className="s-askAnExpert__form__block" data-step="0">
            <ul className="s-askAnExpert__form__block__status u-list-unstyled u-p0 u-txt-bold">
              <li data-active="true">
                <button disabled="disabled">
                  <svg xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                    <path d="M16 14a5 5 0 015 5v2a1 1 0 01-2 0v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2a1 1 0 01-2 0v-2a5 5 0 015-5zM12 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"></path>
                  </svg>
                </button>
                Contact
              </li>
              <li></li>
              <li>
                <button disabled="disabled">
                  <svg xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                    <path
                      id="a"
                      d="M6.293 16.293A1 1 0 017 16h12a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v13.586l2.293-2.293zM7.414 18l-3.707 3.707C3.077 22.337 2 21.891 2 21V5a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H7.414z"
                      transform="matrix(-1 0 0 1 24 0)"
                    ></path>
                  </svg>
                </button>
                Message
              </li>
              <li></li>
              <li>
                <button disabled="true">
                  <svg xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                    <path d="M4 16.414V20h3.586l12-12L16 4.414l-12 12zM16.707 2.293l5 5a1 1 0 010 1.414l-13 13A1 1 0 018 22H3a1 1 0 01-1-1v-5a1 1 0 01.293-.707l13-13a1 1 0 011.414 0z"></path>
                  </svg>
                </button>
                Details
              </li>
            </ul>
            <div className="s-askAnExpert__form__block__heading">
              <h2>Let&apos;s start with your name and email</h2>
              <p>Please fill in the details below so we can get back to you about your needs.</p>
            </div>
            <div className="s-askAnExpert__form__block__inputs">
              <div className="f-input">
                <div className="f-input__string">
                  <input id="inputFirstName" type="text" name="inputFirstName" />
                  <label htmlFor="inputFirstName">First Name</label>
                </div>
              </div>
              <div className="f-input">
                <div className="f-input__string">
                  <input id="inputLastName" type="text" name="inputLastName" />
                  <label htmlFor="inputLastName">Last Name</label>
                </div>
              </div>
              <div className="f-input">
                <div className="f-input__string">
                  <input id="inputEmail" type="text" name="inputEmail" />
                  <label htmlFor="inputEmail">Email</label>
                </div>
              </div>
            </div>
            <div className="s-askAnExpert__form__block__cta">
              <button className="e-btn e-btn--+" data-action="next">
                Next
              </button>
            </div>
          </div>
          <div className="s-askAnExpert__form__block" data-step="1">
            <ul className="s-askAnExpert__form__block__status u-list-unstyled u-p0 u-txt-bold">
              <li>
                <button data-action="back">
                  <svg xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                    <path d="M16 14a5 5 0 015 5v2a1 1 0 01-2 0v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2a1 1 0 01-2 0v-2a5 5 0 015-5zM12 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"></path>
                  </svg>
                </button>
                Contact
              </li>
              <li></li>
              <li data-active="true">
                <button disabled="disabled">
                  <svg xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                    <path
                      id="a"
                      d="M6.293 16.293A1 1 0 017 16h12a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v13.586l2.293-2.293zM7.414 18l-3.707 3.707C3.077 22.337 2 21.891 2 21V5a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H7.414z"
                      transform="matrix(-1 0 0 1 24 0)"
                    ></path>
                  </svg>
                </button>
                Message
              </li>
              <li></li>
              <li>
                <button disabled="disabled">
                  <svg xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                    <path d="M4 16.414V20h3.586l12-12L16 4.414l-12 12zM16.707 2.293l5 5a1 1 0 010 1.414l-13 13A1 1 0 018 22H3a1 1 0 01-1-1v-5a1 1 0 01.293-.707l13-13a1 1 0 011.414 0z"></path>
                  </svg>
                </button>
                Details
              </li>
            </ul>
            <div className="s-askAnExpert__form__block__heading">
              <h2>What can Kingston help you with?</h2>
              <p>Fill out your question below and we will direct into the right expert!</p>
            </div>
            <div className="s-askAnExpert__form__block__inputs">
              <div className="f-input">
                <div className="f-input__string">
                  <input
                    id="inputInterest"
                    type="text"
                    name="inputInterest"
                    data-root="fi-aqenlh"
                  />
                  <label htmlFor="inputInterest">What is your interest?</label>
                </div>
              </div>
              <div className="f-input f-input--outlined">
                <div className="f-input__string">
                  <textarea id="textareaAsk" name="textareaAsk"></textarea>
                  <label htmlFor="textareaAsk">Ask Kingston anything...</label>
                </div>
              </div>
            </div>
            <div className="s-askAnExpert__form__block__cta">
              <button className="e-btn e-btn--alt2 e-btn--+" data-action="back">
                Back
              </button>
              <button className="e-btn e-btn--+" data-action="next">
                Next
              </button>
            </div>
          </div>
          <div className="s-askAnExpert__form__block" data-step="2" hidden="">
            <ul className="s-askAnExpert__form__block__status u-list-unstyled u-p0 u-txt-bold">
              <li>
                <button data-action="1">
                  <svg xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                    <path d="M16 14a5 5 0 015 5v2a1 1 0 01-2 0v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2a1 1 0 01-2 0v-2a5 5 0 015-5zM12 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"></path>
                  </svg>
                </button>
                Contact
              </li>
              <li></li>
              <li>
                <button data-action="back">
                  <svg xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                    <path
                      id="a"
                      d="M6.293 16.293A1 1 0 017 16h12a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v13.586l2.293-2.293zM7.414 18l-3.707 3.707C3.077 22.337 2 21.891 2 21V5a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H7.414z"
                      transform="matrix(-1 0 0 1 24 0)"
                    ></path>
                  </svg>
                </button>
                Message
              </li>
              <li></li>
              <li data-active="true">
                <button disabled="disabled">
                  <svg xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                    <path d="M4 16.414V20h3.586l12-12L16 4.414l-12 12zM16.707 2.293l5 5a1 1 0 010 1.414l-13 13A1 1 0 018 22H3a1 1 0 01-1-1v-5a1 1 0 01.293-.707l13-13a1 1 0 011.414 0z"></path>
                  </svg>
                </button>
                Details
              </li>
            </ul>
            <div className="s-askAnExpert__form__block__heading">
              <h2>You are almost done, nice!</h2>
              <p>Just a few more details to make sure we can get back to you.</p>
            </div>
            <div className="s-askAnExpert__form__block__inputs">
              <div className="l-row">
                <div className="l-row__col l-3/4 l-1/2@md">
                  <div className="f-input">
                    <div className="f-input__select">
                      <select id="selectRegion" name="selectRegion" style={{ display: "none" }}>
                        <option hidden="hidden"></option>
                        <option value="c1">Country 1</option>
                        <option value="c2">Country 2</option>
                        <option value="c3">Country 3</option>
                        <option value="c4">Country 4</option>
                        <option value="c5">Country 5</option>
                        <option value="c6">Country 6</option>
                        <option value="c7">Country 7</option>
                      </select>
                      <div className="c-dropDown">
                        <div className="c-dropDown__toggler">
                          <div className="f-input">
                            <div className="f-input__string">
                              <input type="text" />
                              <label htmlFor="tmp-zhn9ho">Country/Region</label>
                            </div>
                            <eicon className="f-input__icon">
                              <svg viewBox="0 0 14 8">
                                <path d="M13.02.02a.062.062 0 0 0-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 0 0-.09 0L.02.977a.062.062 0 0 0 0 .09l6.937 6.915a.066.066 0 0 0 .09 0l.962-.96 5.973-5.954a.065.065 0 0 0 0-.09L13.02.02z"></path>
                              </svg>
                            </eicon>
                          </div>
                        </div>
                        <div className="c-dropDown__panel">
                          <ul
                            className="c-dropDown__panel__items"
                            data-reference="selectRegion"
                            style={{ maxHeight: "7.5em" }}
                          >
                            <li data-index="1" data-input="tmp-zhn9ho">
                              Country 1
                            </li>
                            <li data-index="2" data-input="tmp-zhn9ho">
                              Country 2
                            </li>
                            <li data-index="3" data-input="tmp-zhn9ho">
                              Country 3
                            </li>
                            <li data-index="4" data-input="tmp-zhn9ho">
                              Country 4
                            </li>
                            <li data-index="5" data-input="tmp-zhn9ho">
                              Country 5
                            </li>
                            <li data-index="6" data-input="tmp-zhn9ho">
                              Country 6
                            </li>
                            <li data-index="7" data-input="tmp-zhn9ho">
                              Country 7
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="f-input">
                <div className="f-input__string">
                  <input id="inputCompany" type="text" name="inputCompany" />
                  <label htmlFor="inputCompany">Company</label>
                </div>
              </div>
              <div className="f-input">
                <div className="f-input__string">
                  <input id="inputPhone" type="text" name="inputPhone" />
                  <label htmlFor="inputPhone">Phone</label>
                </div>
              </div>
              <div
                className="f-input"
                data-id="fi-1wb0jp"
                style={{ flexWrap: "wrap", borderStyle: "none" }}
              >
                <div className="f-input__checkbox">
                  <input type="checkbox" name="policyCheck" id="policyCheck" />
                  <label htmlFor="policyCheck" aria-checked="false">
                    I have read and understood the <a href="#js">Privacy Policy</a>.
                  </label>
                </div>
              </div>
            </div>
            <div className="s-askAnExpert__form__block__cta">
              <button className="e-btn e-btn--alt2 e-btn--+" data-action="back">
                Back
              </button>
              <button className="e-btn e-btn--+" type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
        <form className="s-askAnExpert__form" id="thankYouForm" data-confirmation="true" hidden="">
          <div className="s-askAnExpert__form__block">
            <ul className="s-askAnExpert__form__block__status u-list-unstyled u-p0 u-txt-bold">
              <li>
                <button disabled="disabled">
                  <svg xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                    <path d="M4.707 12.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l11-11a1 1 0 10-1.414-1.414L9 16.586l-4.293-4.293z"></path>
                  </svg>
                </button>
              </li>
            </ul>
            <div className="s-askAnExpert__form__block__heading u-txt-center">
              <h2>Thank You!</h2>
              <p>Your submission has been completed.</p>
            </div>
            <hr />
            <div className="s-askAnExpert__form__block__heading">
              <h2>Keep in touch! Sign up to our emails for Kingston news and more.</h2>
              <p>
                Please sign me up for emails from Kingston about its products, services and news.
              </p>
            </div>
            <div className="s-askAnExpert__form__block__inputs s-askAnExpert__form__block__signup">
              <div className="f-input" style={{ flexWrap: "wrap", borderStyle: "none" }}>
                <div className="f-input__checkbox">
                  <input type="checkbox" name="emailPersonal" id="checkbox1" value="Checkbox1" />
                  <label htmlFor="checkbox1" aria-checked="false">
                    Personal
                  </label>
                </div>
              </div>
              <div className="f-input" style={{ flexWrap: "wrap", borderStyle: "none" }}>
                <div className="f-input__checkbox">
                  <input type="checkbox" name="emailGaming" id="checkbox2" value="Checkbox1" />
                  <label htmlFor="checkbox2" aria-checked="false">
                    Gaming
                  </label>
                </div>
              </div>
              <div className="f-input" style={{ flexWrap: "wrap", borderStyle: "none" }}>
                <div className="f-input__checkbox">
                  <input type="checkbox" name="emailCommercial" id="checkbox3" value="Checkbox1" />
                  <label htmlFor="checkbox3" aria-checked="false">
                    Commercial
                  </label>
                </div>
              </div>
            </div>
            <div className="s-askAnExpert__form__block__cta">
              <button className="e-btn e-btn--+" type="submit">
                Sign Up Now
              </button>
            </div>
          </div>
        </form>
        <p className="s-askAnExpert__legal u-txt-center u-txt-sm">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service
          apply.
          <br />
          We’ll handle your information in line with our privacy policy. To ‘unsubscribe’ click the
          link at the bottom of our emails.
        </p>
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "ask-an-expert",
  component: S_AskAnExpert,
  navtxt: "Ask An Expert",
  htmlName: "AskAnExpert",
};
