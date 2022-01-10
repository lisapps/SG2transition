import React, { useContext } from "react";
import { AppContext } from "../../../../AppContext";
import { Link } from "react-router-dom";
import E_logoKingston from "../../1_elements/logoKingston/E_LogoKingston";
import C_Search from "../../2_components/Search/C_Search";

const S_Masthead = () => {
  const { appState, setAppState } = useContext(AppContext);
  const toggle = appState.navVisible;

  return (
    <div className="s-masthead">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={`s-masthead__toggle ${toggle ? "s-masthead__toggle--active" : ""}`}
        aria-hidden="true"
        onClick={() => setAppState({ ...appState, navVisible: !toggle })}
      >
        <svg
          className="s-masthead__toggle__hamburger u-animated u-animated--slowest a-fadeInLeft"
          viewBox="0 0 100 80"
        >
          <rect width="100" height="10" rx="4"></rect>
          <rect width="100" height="10" rx="4" y="30"></rect>
          <rect width="100" height="10" rx="4" y="60"></rect>
        </svg>
      </a>
      <Link to="/">
        <div className="s-masthead__logo u-animated u-animated--slowest u-animated--delay a-fadeIn">
          <E_logoKingston version={"white"} />
          <span className="s-masthead__logo__divider"></span>
          <h2 className="s-masthead__logo__title">Style Guide</h2>
        </div>
      </Link>
      <C_Search/>
    </div>
  );
};

export default S_Masthead;
