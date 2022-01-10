/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../../AppContext";
import "./Toggle.scss";

const C_UseHTMLToggle = ({ setShowHtml, show, option1, option2 }) => {
  const { appState } = useContext(AppContext);
  const [htmlOn, setHtmlOn] = useState(false);

  const htmlSaved = appState.htmlSaved;

  // show is 'showHtml'
  useEffect(() => {
    if (show !== undefined) {
      setHtmlOn(show);
    } else {
      setHtmlOn(false);
      setShowHtml(false);
    }
  }, [show, appState.currentPath]);

  //must set local setHtmlOn for toggle display, setShowHtml tells parent wrapper to switch to iframe or not.
  const handleToggle = () => {
    if (htmlSaved == false) {
      return;
    }
    if (htmlOn == true) {
      setShowHtml(false);
      setHtmlOn(false);
    } else {
      setShowHtml(true);
      setHtmlOn(true);
    }
  };

  return (
    <>
      {/* use html toggle */}

      <label
        className={`c-toggle${htmlSaved ? "" : " c-toggle--disabled tooltip--top-right"}`}
        htmlFor="toggleSwitch"
        onClick={handleToggle}
        aria-label="Toggle is disabled until you save as HTML."
      >
        <input
          type="checkbox"
          className="c-toggle__checkbox"
          name="toggleSwitch"
          onChange={() => {
            null;
          }}
          checked={htmlOn}
          // defaultChecked={htmlOn}
        />
        <div className="c-toggle__button" />
        <div className="c-toggle__labels">
          <span>{option1 || "HTML"}</span>
          <span>{option2 || "React"}</span>
        </div>
      </label>
    </>
  );
};

export default C_UseHTMLToggle;
