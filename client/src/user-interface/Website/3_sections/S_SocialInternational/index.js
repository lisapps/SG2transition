/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_SocialIntl = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    // viewHeight is used to autoadjust the height in DimensionsContext
    // viewWidth is set and changed outside the web components, but preserved by DimensionsContext
    // outputName is used by IframeWrapper to preload html if it's done.
    // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
    // Specs are what's loaded in the specs tab
    // contentOptions are the fields that are editable in that tab
    let vars = {
      ...appState,
      currentPath: "/ui/social-international",
      currentTheme: "t-white",
      outputName: "SocialInternational",
      headerName: "Social International",
      description:
        "The Social Links displays social media icons with links to their respective social media pages.",
      htmlSaved: true,
      scripts: [],
      specs: [
        ["Anchor", ["A valid URL to the corresponding social media page."]],
        ["SVG", ["Social Media logos at a 1:1 ratio."]],
      ],
    };
    setAppState(vars);

    setDimensions({ ...dimensions, viewHeight: "1722", width: window.innerWidth - 24 });
  }, []);

  if (!AppContext) return "...Loading Social International Links";
  return (
    <section className={"s-socialIntl " + appState.currentTheme}>
      <dl className="l-tabMenu l-tabMenu--mobileOnly">
        <dt className="l-tabMenu__tab">
          <div className="l-inner">
            <img
              className="s-socialIntl__icon"
              src="../images/fpo/section-social/icon-facebook.svg"
              alt="Alternate Text"
            />
            <div className="s-socialIntl__name">Facebook</div>
          </div>
        </dt>
        <dd className="l-tabMenu__panel">
          <div className="l-inner">
            <ul className="s-socialIntl__list u-list-unstyled u-m0 u-p0 l-row__col--flow3">
              <li>
                <a className="u-txt-main u-txt-bold" href="#anchorLink" title="Anchor Title">
                  Corporate
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
            </ul>
          </div>
        </dd>
        <dt className="l-tabMenu__tab">
          <div className="l-inner">
            <img
              className="s-socialIntl__icon"
              src="../images/fpo/section-social/icon-instagram.svg"
              alt="Alternate Text"
            />
            <div className="s-socialIntl__name">Instagram</div>
          </div>
        </dt>
        <dd className="l-tabMenu__panel">
          <div className="l-inner">
            <ul className="s-socialIntl__list u-list-unstyled u-m0 u-p0 l-row__col--flow3">
              <li>
                <a className="u-txt-main u-txt-bold" href="#anchorLink" title="Anchor Title">
                  Corporate
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
            </ul>
          </div>
        </dd>
        <dt className="l-tabMenu__tab">
          <div className="l-inner">
            <img
              className="s-socialIntl__icon"
              src="../images/fpo/section-social/icon-linkedin.svg"
              alt="Alternate Text"
            />
            <div className="s-socialIntl__name">LinkedIn</div>
          </div>
        </dt>
        <dd className="l-tabMenu__panel">
          <div className="l-inner">
            <ul className="s-socialIntl__list u-list-unstyled u-m0 u-p0 l-row__col--flow3">
              <li>
                <a className="u-txt-main u-txt-bold" href="#anchorLink" title="Anchor Title">
                  Corporate
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
            </ul>
          </div>
        </dd>
        <dt className="l-tabMenu__tab">
          <div className="l-inner">
            <img
              className="s-socialIntl__icon"
              src="../images/fpo/section-social/icon-twitter.svg"
              alt="Alternate Text"
            />
            <div className="s-socialIntl__name">Twitter</div>
          </div>
        </dt>
        <dd className="l-tabMenu__panel">
          <div className="l-inner">
            <ul className="s-socialIntl__list u-list-unstyled u-m0 u-p0 l-row__col--flow3">
              <li>
                <a className="u-txt-main u-txt-bold" href="#anchorLink" title="Anchor Title">
                  Corporate
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
            </ul>
          </div>
        </dd>
        <dt className="l-tabMenu__tab">
          <div className="l-inner">
            <img
              className="s-socialIntl__icon"
              src="../images/fpo/section-social/icon-reddit.svg"
              alt="Alternate Text"
            />
            <div className="s-socialIntl__name">Reddit</div>
          </div>
        </dt>
        <dd className="l-tabMenu__panel">
          <div className="l-inner">
            <ul className="s-socialIntl__list u-list-unstyled u-m0 u-p0 l-row__col--flow3">
              <li>
                <a className="u-txt-main u-txt-bold" href="#anchorLink" title="Anchor Title">
                  Corporate
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
            </ul>
          </div>
        </dd>
        <dt className="l-tabMenu__tab">
          <div className="l-inner">
            <img
              className="s-socialIntl__icon"
              src="../images/fpo/section-social/icon-vk.svg"
              alt="Alternate Text"
            />
            <div className="s-socialIntl__name">VK</div>
          </div>
        </dt>
        <dd className="l-tabMenu__panel">
          <div className="l-inner">
            <ul className="s-socialIntl__list u-list-unstyled u-m0 u-p0 l-row__col--flow3">
              <li>
                <a className="u-txt-main u-txt-bold" href="#anchorLink" title="Anchor Title">
                  Corporate
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
            </ul>
          </div>
        </dd>
        <dt className="l-tabMenu__tab">
          <div className="l-inner">
            <img
              className="s-socialIntl__icon"
              src="../images/fpo/section-social/icon-youtube.svg"
              alt="Alternate Text"
            />
            <div className="s-socialIntl__name">YouTube</div>
          </div>
        </dt>
        <dd className="l-tabMenu__panel">
          <div className="l-inner">
            <ul className="s-socialIntl__list u-list-unstyled u-m0 u-p0 l-row__col--flow3">
              <li>
                <a className="u-txt-main u-txt-bold" href="#anchorLink" title="Anchor Title">
                  Corporate
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
            </ul>
          </div>
        </dd>
        <dt className="l-tabMenu__tab">
          <div className="l-inner">
            <img
              className="s-socialIntl__icon"
              src="../images/fpo/section-social/icon-tiktok.svg"
              alt="Alternate Text"
            />
            <div className="s-socialIntl__name">TikTok</div>
          </div>
        </dt>
        <dd className="l-tabMenu__panel">
          <div className="l-inner">
            <ul className="s-socialIntl__list u-list-unstyled u-m0 u-p0 l-row__col--flow3">
              <li>
                <a className="u-txt-main u-txt-bold" href="#anchorLink" title="Anchor Title">
                  Corporate
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
            </ul>
          </div>
        </dd>
        <dt className="l-tabMenu__tab">
          <div className="l-inner">
            <img
              className="s-socialIntl__icon"
              src="../images/fpo/section-social/icon-twitch.svg"
              alt="Alternate Text"
            />
            <div className="s-socialIntl__name">Twitch</div>
          </div>
        </dt>
        <dd className="l-tabMenu__panel">
          <div className="l-inner">
            <ul className="s-socialIntl__list u-list-unstyled u-m0 u-p0 l-row__col--flow3">
              <li>
                <a className="u-txt-main u-txt-bold" href="#anchorLink" title="Anchor Title">
                  Corporate
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
              <li>
                <a className="u-txt-main" href="#anchorLink" title="Anchor Title">
                  Country
                </a>
              </li>
            </ul>
          </div>
        </dd>
      </dl>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. ex: htmlName: "KeyFeature",
export default {
  path: "social-international",
  component: S_SocialIntl,
  navtxt: "Social International",
  htmlName: "SocialInternational",
  icon: "",
};
