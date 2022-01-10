/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from "react";
import DropZone from "../../../Styleguide/0_hooks/dropzone";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Content = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  const [featureImage, setFeatureImage] = useState({ preview: "" });

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    // viewHeight is used to autoadjust the height in DimensionsContext
    // viewWidth is set and changed outside the web components, but preserved by DimensionsContext
    // outputName is used by IframeWrapper to preload html if it's done.
    // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
    // Specs are what's loaded in the specs tab
    // contentOptions are the fields that are editable in that tab
    let Vars = {
      ...appState,
      currentPath: "/ui/content",
      outputName: "Content",
      headerName: "Content",
      description:
        "The Content Section serves to layout any combination of content such as headings, paragraphs, images, lists, quotes, videos, etc. *Modals in progress...",
      htmlSaved: true,
      currentTheme: "t-stone",
      scripts: [],
      specs: [["Content", ["HTML content can be inserted here."]]],
    };
    setAppState(Vars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown. CurrentLang can be left off.
    setContentOptions({
      p1: {
        label: "Paragraph 1",
        checkbox: true,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est. Delectus repellat, quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut, totam corrupti debitis.",
      },
      p2: {
        label: "Paragraph 2",
        checkbox: true,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est.",
      },
      p3: {
        label: "Paragraph 3",
        checkbox: true,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est. Delectus repellat, quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut, totam corrupti debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est. Delectus repellat, quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut, totam corrupti debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est. Delectus repellat, quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut, totam corrupti debitis.",
      },
      p4: {
        label: "Paragraph 4",
        checkbox: true,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est. Delectus repellat, quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut, totam corrupti debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est. Delectus repellat, quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut, totam corrupti debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est. Delectus repellat, quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut, totam corrupti debitis.",
      },
      p5: {
        label: "Paragraph 5",
        checkbox: true,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est. Delectus repellat, quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut, totam corrupti debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est. Delectus repellat, quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut, totam corrupti debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est. Delectus repellat, quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut, totam corrupti debitis.",
      },
      p6: {
        label: "Paragraph 6",
        checkbox: true,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est. Delectus repellat, quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut, totam corrupti debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est.",
      },
      BQ1: {
        label: "Blockquote 1",
        checkbox: true,
        field:
          "His words of wisdom fall on deaf ears but some how this team wins! His words of wisdom fall on deaf ears but some how this team wins!",
      },
      BQ2: {
        label: "Blockquote 2",
        checkbox: true,
        field:
          "His words of wisdom fall on deaf ears but some how this team wins! His words of wisdom fall on deaf ears but some how this team wins!",
      },
      link1: {
        label: "Link Text",
        checkbox: true,
        field: "Link Text",
      },
      p7: {
        label: "Paragraph 7",
        checkbox: true,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est. Delectus repellat, quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut, totam corrupti debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam, necessitatibus, est.",
      },
      m1: {
        label: "Modal 1 Text",
        checkbox: true,
        field: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      ddm1: {
        label: "Modal Default Dialog",
        checkbox: true,
        field: "This is a default dialog inside a modal",
      },
      m2: {
        label: "Modal Dialog Text",
        checkbox: true,
        field:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem fugit id repellat atque porro architecto rem eius illo. Modi id exercitationem nostrum nobis ad esse dicta perspiciatis. Quae sequi cum porro unde dolor est beatae reiciendis facere!",
      },
      ctalink1: {
        label: "CTA Link in Modal Dialog",
        checkbox: true,
        field: "CTA Link",
      },
      btn1: {
        label: "Modal Dialog Btn 1",
        checkbox: true,
        field: "CTA Button 1",
      },
      btn2: {
        label: "Modal Dialog Btn 1",
        checkbox: true,
        field: "CTA Button 1",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "4052", width: window.innerWidth - 24 });
  }, []);
  //   Customize this loader text
  if (!contentOptions) return "...Loading Content";
  return (
    <section className={`s-content l-1/1 ` + appState.currentTheme}>
      <div className="l-inner">
        <div className="l-row">
          <div className="l-row__col l-1/1 u-mb">
            <p>
              {contentOptions.p1 && contentOptions.p1.field}
              <span
                className="c-tooltip"
                data-toolid="labore"
                role="tooltip"
                aria-describedby="labore"
                tabIndex="0"
              >
                labore
              </span>
              Enim maxime veritatis ea quia eos quam et sunt amet voluptatem aperiam,
              necessitatibus, est. Delectus repellat, quibusdam quidem, pariatur veritatis
              aspernatur nobis sed a minus autem ut, totam corrupti debitis. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Deserunt sed, ea consequuntur. Laudantium sint
              <a
                className="c-tooltip c-tooltip--top"
                data-toolid="arcu"
                role="tooltip"
                aria-describedby="arcu"
                tabIndex="0"
              >
                Arcu
              </a>
              veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia eos
              quam et sunt amet voluptatem aperiam, necessitatibus, est. Delectus repellat,
              quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut, totam
              corrupti debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              sed, ea consequuntur. Laudantium
              <a
                className="c-tooltip c-tooltip--right"
                data-toolid="tellus"
                role="tooltip"
                aria-describedby="tellus"
                tabIndex="0"
              >
                tellus
              </a>
              sint veritatis soluta consectetur fugit saepe numquam. Enim maxime veritatis ea quia
              eos quam et sunt amet voluptatem aperiam, necessitatibus, est.
              <a
                className="c-tooltip c-tooltip--left"
                data-toolid="massus"
                role="tooltip"
                aria-describedby="massus"
                tabIndex="0"
              >
                massus
              </a>
              repellat, quibusdam quidem, pariatur veritatis aspernatur nobis sed a minus autem ut,
              totam corrupti debitis.
            </p>
            <div className="c-tooltip__message" id="labore">
              <h4>Labore</h4>
              <p>
                rci porta non pulvinar neque laoreet. Orci ac auctor augue mauris augue neq Commodo
                sed egestas egestas fringilla phasellu faucibus scelerisque eleifend. Eget est lorem
                ipsum dolor sitllentesque massa. Nunc non blandit massa enim nec dui nunc. Ante
                metus dictum at tempor commodo ullamcorper a. Tellus molestie nunc non blandit massa
                enim nec. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque
                eleifend. Eget est lorem ipsum dolor sitllentesque massa. Nunc non blandit massa
                enim nec dui nunc. Ante metus dictum at tempor commodo ullamcorper a. Tellus
                molestie nunc non blandit massa enim nec.
              </p>
            </div>
            <div className="c-tooltip__message" id="arcu">
              <h4>Arcu</h4>
              <p>Orci porta non pulvinar neque laoreet. Orci ac auctor augue mauris augue neq</p>
            </div>
            <div className="c-tooltip__message" id="tellus">
              <h4>Tellus</h4>
              <p>
                Orci porta non pulvinar neque laoreet. Orci ac auctor augue mauris augue neq Commodo
                sed egestas egestas fringilla phasellu faucibus scelerisque eleifend. Eget est lorem
                ipsum dolor sitllentesque massa. Nunc non blandit massa enim nec dui nunc. Ante
                metus dictum at tempor commodo ullamcorper a. Tellus molestie nunc non blandit massa
                enim nec. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque
                eleifend.
              </p>
            </div>
            <div className="c-tooltip__message" id="massus">
              <h4>Massus</h4>
              <p>
                Orci porta non pulvinar neque laoreet. Orci ac auctor augue mauris augue neq Commodo
                sed egestas egestas fringilla phasellu faucibus scelerisque eleifend. Eget est lorem
                ipsum dolor sitllentesque massa. Nunc non blandit massa enim nec dui nunc. Ante
                metus dictum at tempor commodo ullamcorper a
              </p>
            </div>
            <figure className="c-figure">
              <div className="c-figure__gfx">
                <DropZone setImage={setFeatureImage}>
                  <img
                    className="c-figure__gfx"
                    src={
                      featureImage.preview
                        ? featureImage.preview
                        : "https://styleguide.kingston.com/fpo/1200/600/"
                    }
                  />
                </DropZone>
                <div className="c-figure__gfx__overlay">
                  <a className="c-figure__gfx__overlay__svg">
                    <svg>
                      <use xlinkHref="../images/icons-map.svg#zoom-in"></use>
                    </svg>
                  </a>
                </div>
              </div>
              <figcaption className="c-figure__caption">Figure Component</figcaption>
            </figure>
            <p>{contentOptions.p2 && contentOptions.p2.field}</p>
            <h3>Key Features</h3>
            <ul>
              <li>List Item 1</li>
              <li>List Item 2</li>
              <li>List Item 3</li>
              <li>List Item 4</li>
            </ul>
            <figure className="c-figure">
              <div className="c-figure__gfx">
                <DropZone setImage={setFeatureImage}>
                  <img
                    className="c-figure__gfx"
                    src={
                      featureImage.preview
                        ? featureImage.preview
                        : "https://styleguide.kingston.com/fpo/1200/600/"
                    }
                  />
                </DropZone>
              </div>
              <figcaption className="c-figure__caption">Figure Component</figcaption>
            </figure>
            <p>{contentOptions.p3 && contentOptions.p3.field}</p>
            <DropZone setImage={setFeatureImage}>
              <img
                src={
                  featureImage.preview
                    ? featureImage.preview
                    : "https://styleguide.kingston.com/fpo/1200/600/"
                }
                alt="Alternate Text"
              />
            </DropZone>
            <p>{contentOptions.p4 && contentOptions.p4.field}</p>
            <figure className="c-figure c-figure--right">
              <div className="c-figure__gfx">
                <DropZone setImage={setFeatureImage}>
                  <img
                    className="c-figure__gfx"
                    src={
                      featureImage.preview
                        ? featureImage.preview
                        : "https://styleguide.kingston.com/fpo/1200/600/"
                    }
                  />
                </DropZone>
                <div className="c-figure__gfx__overlay">
                  <a className="c-figure__gfx__overlay__svg">
                    <svg>
                      <use xlinkHref="../images/icons-map.svg#zoom-in"></use>
                    </svg>
                  </a>
                </div>
              </div>
              <figcaption className="c-figure__caption">Figure Component</figcaption>
            </figure>
            <p>{contentOptions.p5 && contentOptions.p5.field}</p>
            <blockquote className="e-blockquote">
              <div className="e-blockquote__copy">
                <svg width="32" height="21" viewBox="0 0 31.63 21.09">
                  <path d="M13.18 21.09V7.91H5.93L10.54 0H4.61L0 7.91v13.18zM31.63 7.91h-7.25L29 0h-5.94l-4.61 7.91v13.18h13.18z"></path>
                </svg>
                {contentOptions.BQ1 && contentOptions.BQ1.field}
                <svg width="20" height="13" viewBox="0 0 20.28 13.52">
                  <path d="M11.83 0v8.45h4.65l-3 5.07h3.8l3-5.07V0zM0 8.45h4.65l-3 5.07h3.8l3-5.07V0H0z"></path>
                </svg>
              </div>
              <div className="e-blockquote__title"></div>
            </blockquote>
            <p>{contentOptions.p6 && contentOptions.p6.field}</p>
            <blockquote className="e-blockquote e-blockquote--center">
              <div className="e-blockquote__copy">
                <svg width="32" height="21" viewBox="0 0 31.63 21.09">
                  <path d="M13.18 21.09V7.91H5.93L10.54 0H4.61L0 7.91v13.18zM31.63 7.91h-7.25L29 0h-5.94l-4.61 7.91v13.18h13.18z"></path>
                </svg>
                {contentOptions.BQ2 && contentOptions.BQ2.field}
                <svg width="20" height="13" viewBox="0 0 20.28 13.52">
                  <path d="M11.83 0v8.45h4.65l-3 5.07h3.8l3-5.07V0zM0 8.45h4.65l-3 5.07h3.8l3-5.07V0H0z"></path>
                </svg>
              </div>
              <div className="e-blockquote__title">
                Diablo Parasecoli
                <span>&nbsp;-&nbsp;Manager of the Technical Operations Division</span>
              </div>
            </blockquote>
            <p>{contentOptions.p7 && contentOptions.p7.field}</p>
            <a href="#anchorLink" title="Anchor Title">
              {contentOptions.link1 && contentOptions.link1.field}
            </a>
          </div>
        </div>
        <div className="l-row">
          <div className="l-row__col l-1/1">
            <h3>Modals and Dialogs</h3>
            <button className="e-btn" data-modal="modal">
              Modal Button
            </button>
            <div className="c-modal" role="dialog" id="modal" aria-modal="true" aria-hidden="false">
              <div className="c-modal__overlay"></div>
              <button className="c-modal__close" aria-label="close" data-close="true">
                <svg viewBox="0 0 14 14">
                  <path d="M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z"></path>
                  <path d="M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z"></path>
                </svg>
              </button>
              <div className="c-modal__content">
                <p>{contentOptions.m1 && contentOptions.m1.field}</p>
              </div>
            </div>
            <button className="e-btn" data-modal="image">
              Modal Button w/ Image
            </button>
            <div className="c-modal" role="dialog" id="image" aria-modal="true" aria-hidden="false">
              <div className="c-modal__overlay"></div>
              <button className="c-modal__close" aria-label="close" data-close="true">
                <svg viewBox="0 0 14 14">
                  <path d="M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z"></path>
                  <path d="M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z"></path>
                </svg>
              </button>
              <div className="c-modal__content">
                <DropZone setImage={setFeatureImage}>
                  <img src="/fpo/100/100/" alt="Alternate Text" />
                </DropZone>
              </div>
            </div>
            <button className="e-btn" data-modal="dialog">
              Default Dialog within Modal
            </button>
            <div
              className="c-modal"
              role="dialog"
              id="dialog"
              aria-modal="true"
              aria-hidden="false"
            >
              <div className="c-modal__overlay"></div>
              <div className="c-modal__content">
                <div className="c-dialog u-autoMargin" tabIndex="0" aria-labelledby="dialogHeader0">
                  <header className="c-dialog__header" role="heading" id="dialogHeader0">
                    <button
                      className="c-dialog__header__close"
                      aria-label="close"
                      data-close="true"
                    >
                      <svg viewBox="0 0 14 14">
                        <path d="M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z"></path>
                        <path d="M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z"></path>
                      </svg>
                    </button>
                    <p>{contentOptions.ddm1 && contentOptions.ddm1.field}</p>
                  </header>
                  <div className="c-dialog__content">
                    <p>{contentOptions.m2 && contentOptions.m2.field}</p>
                  </div>
                  <div className="c-dialog__cta">
                    <div className="c-dialog__cta__links">
                      <a className="u-txt-small" href="#dialogLink">
                        {contentOptions.ctalink1 && contentOptions.ctalink1.field}
                      </a>
                    </div>
                    <div className="c-dialog__cta__btns">
                      <button className="e-btn" data-close="true">
                        {contentOptions.btn1 && contentOptions.btn1.field}
                      </button>
                      <button className="e-btn e-btn--alt1" data-close="true">
                        {contentOptions.btn2 && contentOptions.btn2.field}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="e-btn" data-modal="email">
              Email Sign Up
            </button>
            <div className="c-modal" role="dialog" id="email" aria-modal="true" aria-hidden="false">
              <div className="c-modal__overlay"></div>
              <div className="c-modal__content">
                <div
                  className="c-dialog u-autoMargin c-dialog--form"
                  tabIndex="0"
                  aria-labelledby="dialogHeader1"
                >
                  <header className="c-dialog__header" role="heading" id="dialogHeader1">
                    <button
                      className="c-dialog__header__close"
                      aria-label="close"
                      data-close="true"
                    >
                      <svg viewBox="0 0 14 14">
                        <path d="M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z"></path>
                        <path d="M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z"></path>
                      </svg>
                    </button>
                    <h3>By leaving your email address, we may contact you about this topic</h3>
                  </header>
                  <div className="c-dialog__content">
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
                    <div className="c-dialog__content__radio">
                      <div className="f-input">
                        <div className="f-input__checkbox">
                          <input
                            type="checkbox"
                            name="checkboxName"
                            id="checkboxName0"
                            value="Personal"
                          />
                          <label htmlFor="checkboxName0" aria-checked="false" tabIndex="0">
                            Personal
                          </label>
                        </div>
                        <div className="f-input__checkbox">
                          <input
                            type="checkbox"
                            name="checkboxName"
                            id="checkboxName1"
                            value="Gaming"
                          />
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
                    <p
                      id="demoMsg"
                      style={{ display: "none", opacity: "0", transition: "opacity .5s" }}
                    >
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
                      <a href="#">privacy policy</a>. To ‘unsubscribe’ click the link at the bottom
                      of our emails.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="c-tooltip__message" id="kingston">
              <p>The tooltip&apos;s message will appear above the SPAN or ANCHOR tag.</p>
            </div>
            <button className="e-btn" data-modal="qr">
              Dialog - QR
            </button>
            <div className="c-modal" role="dialog" id="qr" aria-modal="true" aria-hidden="false">
              <div className="c-modal__overlay"></div>
              <div className="c-modal__content">
                <div className="c-dialog u-autoMargin" tabIndex="0" aria-labelledby="dialogHeader2">
                  <header className="c-dialog__header" role="heading" id="dialogHeader2">
                    <button
                      className="c-dialog__header__close"
                      aria-label="close"
                      data-close="true"
                    >
                      <svg viewBox="0 0 14 14">
                        <path d="M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z"></path>
                        <path d="M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z"></path>
                      </svg>
                    </button>
                    <p>QR Code</p>
                  </header>
                  <div className="c-dialog__content">
                    <DropZone setImage={setFeatureImage}>
                      <img src="/fpo/500/500/" alt="Alternate Text" />
                    </DropZone>
                  </div>
                  <div className="c-dialog__cta">
                    <div className="c-dialog__cta__btns">
                      <button className="e-btn" data-close="true">
                        Continue to Social Media
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="e-btn" data-modal="longerDialog">
              Dialog - Long Content
            </button>
            <div
              className="c-modal"
              role="dialog"
              id="longerDialog"
              aria-modal="true"
              aria-hidden="false"
            >
              <div className="c-modal__overlay"></div>
              <div className="c-modal__content">
                <div className="c-dialog u-autoMargin" tabIndex="0" aria-labelledby="dialogHeader3">
                  <header className="c-dialog__header" role="heading" id="dialogHeader3">
                    <button
                      className="c-dialog__header__close"
                      aria-label="close"
                      data-close="true"
                    >
                      <svg viewBox="0 0 14 14">
                        <path d="M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z"></path>
                        <path d="M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z"></path>
                      </svg>
                    </button>
                    <p>
                      Modals are built with Accessibility in mind. The dialog becomes scrollable
                      when its content is longer than usual
                    </p>
                  </header>
                  <div className="c-dialog__content">
                    <p>
                      External tabbed location is preserved and can only tab trhough modal elements
                      while modal is open. Dialogs also reach a certain height limit before becoming
                      scrollable.
                    </p>
                    <DropZone setImage={setFeatureImage}>
                      <img src="/fpo/500/500/" alt="Alternate Text" />
                    </DropZone>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem fugit id
                      repellat atque porro architecto rem eius illo. Modi id exercitationem nostrum
                      nobis ad esse dicta perspiciatis. Quae sequi cum porro unde dolor est beatae
                      reiciendis facere!
                    </p>
                  </div>
                  <div className="c-dialog__cta">
                    <div className="c-dialog__cta__btns">
                      <button className="e-btn" data-close="true">
                        Longer CTA Button
                      </button>
                      <button className="e-btn e-btn--alt1" data-close="true">
                        Short CTA
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="e-btn" data-modal="tooltip">
              Dialog - Tooltip
            </button>
            <div
              className="c-modal"
              role="dialog"
              id="tooltip"
              aria-modal="true"
              aria-hidden="false"
            >
              <div className="c-modal__overlay"></div>
              <div className="c-modal__content">
                <div className="c-dialog u-autoMargin" tabIndex="0" aria-labelledby="dialogHeader4">
                  <header className="c-dialog__header" role="heading" id="dialogHeader4">
                    <button
                      className="c-dialog__header__close"
                      aria-label="close"
                      data-close="true"
                    >
                      <svg viewBox="0 0 14 14">
                        <path d="M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z"></path>
                        <path d="M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z"></path>
                      </svg>
                    </button>
                    <p>Dialog with a Tooltip</p>
                  </header>
                  <div className="c-dialog__content">
                    <p>
                      Please sign up with
                      <span
                        className="c-tooltip c-tooltip--top"
                        data-toolid="privacy-policy"
                        role="tooltip"
                        tabIndex="0"
                        aria-describedby="privacy-policy"
                      >
                        Kingston
                      </span>
                      about its products and services.
                    </p>
                  </div>
                  <div className="c-dialog__cta">
                    <div className="c-dialog__cta__btns">
                      <button className="e-btn" data-close="true">
                        Longer CTA Button
                      </button>
                      <button className="e-btn e-btn--alt1" data-close="true">
                        Short CTA
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="c-tooltip__message" id="privacy-policy">
              <p>The tooltip&apos;s message will appear above the SPAN or ANCHOR tag.</p>
            </div>
            <button className="e-btn" data-modal="ytVideo">
              Youtube within Modal
            </button>
            <div
              className="c-modal"
              role="dialog"
              id="ytVideo"
              aria-modal="true"
              aria-hidden="false"
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
                  className="c-externalVideo"
                  data-type="Youtube"
                  data-id="1MieluM0c6c"
                  data-starttime="1"
                  data-modal-link="ytVideo"
                >
                  <iframe
                    src="https://www.youtube.com/embed/1MieluM0c6c?start=1&amp;enablejsapi=1"
                    id="lnk-b6ozmb"
                    data-modal-link="ytVideo"
                  ></iframe>
                </div>
              </div>
            </div>
            <button className="e-btn" data-modal="vVideo">
              Vimeo within Modal
            </button>
            <div
              className="c-modal"
              role="dialog"
              id="vVideo"
              aria-modal="true"
              aria-hidden="false"
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
                  className="c-externalVideo"
                  data-type="Vimeo"
                  data-id="339160819"
                  data-starttime="1"
                  data-modal-link="vVideo"
                >
                  <iframe
                    src="https://player.vimeo.com/video/339160819?api=1#t=1s"
                    allow="autoplay"
                    webkitallowfullscreen=""
                    mozallowfullscreen=""
                    allowFullScreen=""
                    id="lnk-laao44"
                    data-modal-link="vVideo"
                  ></iframe>
                </div>
              </div>
            </div>
            <button className="e-btn" data-modal="deactivate">
              Deactivate Close
            </button>
            <div
              className="c-modal"
              role="dialog"
              id="deactivate"
              aria-modal="true"
              aria-hidden="false"
              data-deactivateclose="data-deactivateClose"
            >
              <div className="c-modal__overlay"></div>
              <div className="c-modal__content">
                <div className="c-dialog u-autoMargin" tabIndex="0" aria-labelledby="dialogHeader5">
                  <header className="c-dialog__header" role="heading" id="dialogHeader5">
                    <button
                      className="c-dialog__header__close"
                      aria-label="close"
                      data-close="true"
                    >
                      <svg viewBox="0 0 14 14">
                        <path d="M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z"></path>
                        <path d="M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z"></path>
                      </svg>
                    </button>
                    <p>This is a default dialog inside a modal</p>
                  </header>
                  <div className="c-dialog__content">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem fugit id
                      repellat atque porro architecto rem eius illo. Modi id exercitationem nostrum
                      nobis ad esse dicta perspiciatis. Quae sequi cum porro unde dolor est beatae
                      reiciendis facere!
                    </p>
                  </div>
                  <div className="c-dialog__cta">
                    <div className="c-dialog__cta__links">
                      <a className="u-txt-small" href="#dialogLink">
                        CTA Link
                      </a>
                    </div>
                    <div className="c-dialog__cta__btns">
                      <button className="e-btn" data-close="true">
                        CTA Button 1
                      </button>
                      <button className="e-btn e-btn--alt1" data-close="true">
                        CTA Button 2
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="c-modal c-modal--darkmode"
              role="dialog"
              id="darkmode"
              aria-modal="true"
              aria-hidden="false"
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
                  className="c-externalVideo"
                  data-type="Youtube"
                  data-id="1MieluM0c6c"
                  data-starttime="1"
                  data-modal-link="darkmode"
                >
                  <iframe
                    src="https://www.youtube.com/embed/1MieluM0c6c?start=1&amp;enablejsapi=1"
                    id="lnk-6beup5"
                    data-modal-link="darkmode"
                  ></iframe>
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
//html name should be component/section name without the S_ or C_. ex: htmlName: "KeyFeature",
export default {
  path: "content",
  component: S_Content,
  navtxt: "Content",
  htmlName: "Content",
  icon: "",
};
