/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext, useEffect } from "react";
// import { AppContext } from "../../../../AppContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const C_Breakpoints = ({ setbpClicked }) => {
  // const { appState, setAppState } = useContext(AppContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [pxWidth, setPxWidth] = useState("");
  const [emWidth, setEmWidth] = useState("");
  const [settingLocally, setSettingLocally] = useState(false);
  // const [fiesta, setFiesta] = useState(false);

  useEffect(() => {
    // console.log("inside update bp vals from outside update");
    //updates display values if dimensions are changed by dragging (other ways outside this toolbar)
    if (settingLocally === false) {
      setbpClicked(false);
      // console.log("useeffect setting width");
      setPxWidth(dimensions.width);
      setEmWidth(dimensions.width / 16);
    }
    //once dimensions context is done updating, turn settingLocally off
    if (pxWidth === dimensions.width) setSettingLocally(false);
  }, [dimensions.width]);

  function handleWidthInPx(e) {
    let val = parseInt(e.target.value);
    if (val === 0 || val == null || isNaN(val)) val = 315;
    setSettingLocally(true);
    setPxWidth(val);
    setEmWidth(val / 16);
    setbpClicked(true);

    let dimensions = setTimeout(() => {
      setDimensions({ ...dimensions, width: val });
    }, 100);
    return () => clearTimeout(dimensions);
  }

  function handleWidthInEm(e) {
    setSettingLocally(true);
    let em = parseInt(e.target.value);
    if (em === 0 || em == null || isNaN(em)) em = 315;
    let pix = em * 16;
    setEmWidth(em);
    setPxWidth(pix);
    setbpClicked(true);
    let dimensions = setTimeout(() => {
      setDimensions({ ...dimensions, width: pix });
    }, 500);
    return () => clearTimeout(dimensions);
  }

  function handleMobile() {
    setSettingLocally(true);
    setDimensions({ ...dimensions, width: 375 });
    setPxWidth(375);
    setEmWidth(23.4375);
    setbpClicked(true);
  }

  function handleTablet() {
    setSettingLocally(true);
    setDimensions({ ...dimensions, width: 768 });
    setPxWidth(768);
    setEmWidth(48);
    setbpClicked(true);
  }

  function handleDesktop() {
    setSettingLocally(true);
    setDimensions({ ...dimensions, width: 1152 });
    setPxWidth(1152);
    setEmWidth(72);
    setbpClicked(true);
  }

  function handleFullWidth() {
    setSettingLocally(true);
    let windowWidth = parseInt(window.innerWidth - 24);
    let em = windowWidth / 16;
    setDimensions({ ...dimensions, width: windowWidth });
    setPxWidth(windowWidth);
    setEmWidth(em);
    setbpClicked(true);
  }

  const handleFocus = (e) => {
    e.target.placeholder = "";
  };

  // useEffect(() => {
  //   let widthMax = parseInt(window.innerWidth - 24);

  //   let intervalFiesta = setInterval(() => {
  //     let rando = Math.round(Math.random() * widthMax);
  //     if (rando < 315) rando = rando + Math.round(Math.random() * 200 + 100);
  //     let em = rando / 16;
  //     setPxWidth(rando);
  //     setEmWidth(em);
  //     setDimensions({ ...dimensions, width: rando });
  //     //breakpoints clicked should be set to true, bc resize sets it to false after it updates itself every time
  //     setbpClicked(true);
  //   }, 2000);

  //   if (fiesta) intervalFiesta;
  //   if (!fiesta) {
  //     console.log("in fiesta is false");
  //     clearInterval(intervalFiesta);
  //   }
  // }, [fiesta]);

  return (
    <div className="v-breakpoints">
      <div className="v-breakpoints__val" id="inputPixels" title="Enter pixel value">
        <input
          type="text"
          placeholder={`${pxWidth}`}
          maxLength="4"
          size="6"
          onChange={(e) => handleWidthInPx(e)}
          onFocus={(e) => handleFocus(e)}
          value={pxWidth}
        />
        <span>&nbsp;PX</span>
      </div>
      <div className="v-breakpoints__modes">
        <button id="btnMd" title="Mobile: 375px" onClick={() => handleMobile()}>
          <svg width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
            <g id="icons/breakpoint_mobile" stroke="none" strokeWidth="1" fillRule="evenodd">
              <path
                id="Combined-Shape"
                d="M15 4a1 1 0 011 1v10a1 1 0 01-1 1H9a1 1 0 01-1-1V5a1 1 0 011-1h6zm-6 9h6V5H9v8zm3.5 1h-1a.5.5 0 00-.09.992l.09.008h1a.5.5 0 00.09-.992L12.5 14z"
                fillRule="nonzero"
              ></path>
            </g>
          </svg>
        </button>
        <button id="btnLg" title="Tablet: 768px" onClick={() => handleTablet()}>
          <svg width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
            <g id="icons/breakpoint_tablet" stroke="none" strokeWidth="1" fillRule="evenodd">
              <path
                id="Combined-Shape"
                d="M16 3a1 1 0 011 1v12a1 1 0 01-.883.993L16 17H8a1 1 0 01-1-1V4a1 1 0 011-1h8zm0 1H8v11h8V4z"
                fillRule="nonzero"
              ></path>
            </g>
          </svg>
        </button>
        <button id="btnXlg" title="Desktop: 1152px" onClick={() => handleDesktop()}>
          <svg width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
            <g id="icons/breakpoint_desktop" stroke="none" strokeWidth="1" fillRule="evenodd">
              <path
                id="Combined-Shape"
                d="M6 14a1 1 0 01-1-1V5a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1h-4.523l1.154 2.274a.5.5 0 01-.446.726H9.82a.5.5 0 01-.444-.729L10.542 14H6zm12-9H6v7h12V5z"
                fillRule="nonzero"
              ></path>
            </g>
          </svg>
        </button>
        <button id="btnFullscreen" title="Fullscreen" onClick={() => handleFullWidth()}>
          <svg width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
            <g id="icons/breakpoint_fullsize" stroke="none" strokeWidth="1" fillRule="evenodd">
              <g id="Group" transform="translate(5 3.013)" fillRule="nonzero">
                <path
                  id="Path-8"
                  d="M2.5 0a.5.5 0 01.089.992L2.499 1H1.017v1.486a.5.5 0 01-.41.492l-.09.008a.5.5 0 01-.491-.41l-.009-.09V0H2.5z"
                ></path>
                <path
                  id="Path-8"
                  d="M13.482 0a.5.5 0 01.09.992l-.09.008H12v1.486a.5.5 0 01-.41.492l-.09.008a.5.5 0 01-.492-.41L11 2.486V0h2.482z"
                  transform="matrix(-1 0 0 1 24.982 0)"
                ></path>
                <path
                  id="Path-8"
                  d="M13.482 10.987a.5.5 0 01.09.992l-.09.008H12v1.487a.5.5 0 01-.41.492l-.09.008a.5.5 0 01-.492-.41l-.008-.09v-2.487h2.482z"
                  transform="rotate(180 12.49 12.48)"
                ></path>
                <path
                  id="Path-8"
                  d="M2.482 10.987a.5.5 0 01.09.992l-.09.008H1v1.487a.5.5 0 01-.41.492l-.09.008a.5.5 0 01-.492-.41L0 13.474v-2.487h2.482z"
                  transform="matrix(1 0 0 -1 0 24.961)"
                ></path>
              </g>
            </g>
          </svg>
        </button>
        {/* <button id="btnRandom" title="Random" onClick={() => handleRandom()}>
          <svg width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
            <g id="icons/breakpoint_random" stroke="none" strokeWidth="1" fillRule="evenodd">
              <path
                id="Random"
                d="M7.776 5.238c2.482 0 4.5 2.018 4.5 4.5v.604c0 1.93 1.571 3.5 3.5 3.5h.684v-1.237l2.103 1.577a.2.2 0 010 .32l-2.103 1.577v-1.237h-.684a4.505 4.505 0 01-4.5-4.5v-.604c0-1.93-1.57-3.5-3.5-3.5H5.5a.5.5 0 010-1zm2.646 8.371c.139.31.309.6.505.87a3.482 3.482 0 01-1.948.595h-3.47a.5.5 0 010-1h3.47c.538 0 1.034-.175 1.443-.465zM16.46 4l1.674 1.256.357.267.072.054a.2.2 0 010 .32l-.072.054-.357.268-1.674 1.255V6.237h-1.481a2.48 2.48 0 00-1.443.466c-.139-.31-.309-.6-.505-.87a3.482 3.482 0 011.948-.596h1.481V4z"
              ></path>
            </g>
          </svg>
        </button> */}
        {/* <button
          id="btnFiesta"
          title="Fiesta!"
          onClick={() => (fiesta ? setFiesta(false) : setFiesta(true))}
        >
          <svg width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
            <g id="icons/breakpoint_fiesta" stroke="none" strokeWidth="1" fillRule="evenodd">
              <g id="Group" transform="rotate(-45 18.157 -2.657)" fillRule="nonzero">
                <path
                  id="Path-6"
                  d="M4.5.121C2.598.121 1.135.62.142 1.636a.5.5 0 00-.085.581l4 7.636a.5.5 0 00.886 0l4-7.636a.5.5 0 00-.085-.581C7.865.62 6.402.12 4.5.12zm.305 1.005c1.298.042 2.3.354 3.023.926l.05.042L4.5 8.544l-3.379-6.45.05-.042c.78-.616 1.882-.93 3.329-.93l.305.004z"
                ></path>
              </g>
            </g>
            <path className="fiestaConfetti" transform="rotate(45 6.5 5.5)" d="M6 5h1v1H6z"></path>
            <path
              className="fiestaConfetti"
              transform="rotate(-45 8.25 9.25)"
              d="M8 9h1v1H8z"
            ></path>
            <path
              className="fiestaConfetti"
              transform="rotate(45 11.5 5.5)"
              d="M11 5h1v1h-1z"
            ></path>
            <circle className="fiestaOval" cx="8.5" cy="6.5" r="1"></circle>
            <circle className="fiestaOval" cx="12.5" cy="3.5" r="1"></circle>
            <circle className="fiestaOval" cx="8.25" cy="3.25" r="1"></circle>
            <circle className="fiestaOval" cx="5.5" cy="9.5" r="1"></circle>
          </svg>
        </button> */}
        {/* <button id="btnExternal" title="External" data-href="/view/kingston/section/ambassadors">
          <svg width="15" height="12" viewBox="0 0 17.95 14.31">
            <path d="M14.73 6.38v6.3H1.62V3.23h9.96V1.6H0v12.71h16.35V6.33h-1.62v.05z"></path>
            <path d="M13.18 0v1.62h2.06l-3.66 3.66 1.15 1.15 3.6-3.6v1.9h1.62V0h-4.77z"></path>
          </svg>
        </button> */}
      </div>
      <div className="v-breakpoints__val" id="inputEms" title="Enter EM Value (1em=16px)">
        <input
          type="text"
          placeholder={`${emWidth}`}
          maxLength="7"
          size="6"
          onChange={(e) => handleWidthInEm(e)}
          onFocus={(e) => handleFocus(e)}
          value={emWidth}
        />
        <span>&nbsp;EM</span>
      </div>
    </div>
  );
};

export default C_Breakpoints;
