/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
} from "react";
import Portal from "../../0_hooks/Portal";
import { AppContext } from "../../../../AppContext";
import { DimensionsContext } from "../../../../DimensionsContext";
import modules from "../../../../modules";
import { useLocation } from "react-router-dom";
import Frame from "react-frame-component";
import C_Resize from "../Tools/C_Resize";
import S_Headline from "../../3_sections/headline/S_Headline";
import DevTab from "../viewerTabs/DevTab";
import Specs from "../viewerTabs/Specs/Specs";
import EditContentTab from "../viewerTabs/EditContent/EditContentTab";
import HtmlTab from "../viewerTabs/HtmlTab/HtmlTab";
import C_Breakpoints from "../../2_components/Tools/C_Breakpoints";
import S_ContentNav from "../../3_sections/contentNav/S_ContentNav";
import dotenv from "dotenv";

const IframeWrapper = ({ children }) => {
  const { appState, setAppState } = useContext(AppContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  // const { contentOptions } = useContext(OptionsContext);
  //Tabs are the active button tabs below the iframe viewer
  const [currentTab, setCurrentTab] = useState("tabSpecs");
  const [currHtmlName, setCurrHtmlName] = useState(null);
  const [showHtml, setShowHtml] = useState(false);
  const [htmlListenerClicked, setHtmlListenerClicked] = useState(false);
  //this tells the resize drag tool to stop if user is using breakpoints
  const [breakpClicked, setBreakpClicked] = useState(false);

  const containerRef = useRef();
  const frameRef = useRef();

  dotenv.config();

  let path = appState.currentPath;
  //flatHTML is briefly set by save html button
  let saveHtml = appState.flatHTML;

  //get current url from router
  let location = useLocation();
  let pathString = location.pathname;

  var env = process.env.REACT_APP_MY_ENV;

  const checkpath = (path) => {
    let pgs = ["brand", "web-ui"];
    if (pgs.some((el) => path.includes(el)) || path === "/") {
      return true;
    } else {
      return false;
    }
  };

  function getHtmlFile() {
    if (appState.htmlSaved) {
      //remove everything but the name
      let currContentPath = pathString.replace(/\/ui\//, "");
      //remove dashes
      currContentPath = currContentPath.replace(/-/g, "");
      modules.find(function (module) {
        let name;
        if (module.htmlName) name = module.htmlName.toLowerCase();

        if (name == currContentPath) {
          setCurrHtmlName(module.htmlName);
        }
      });
    }
    // -- currently showing depending on tab -- below no longer used.
    //set local state to show html by default if available
    // appState.htmlSaved ? setShowHtml(true) : setShowHtml(false);
  }

  function getHeight() {
    //if height is hardcoded do nothing
    if (dimensions.hardcodeHeight) {
      return;
    } else {
      if (containerRef.current) {
        let newHeight = containerRef.current.offsetHeight;
        //use context, not local state or child viewport won't update again.
        if (newHeight !== dimensions.viewHeight)
          setDimensions({ ...dimensions, viewHeight: newHeight });
      } else {
        //only run if we are viewing web content - not brand
        if (path.includes("/ui")) {
          let htmlFrame = document.querySelector("#html-iframe");
          let newHeight;
          if (htmlFrame) newHeight = htmlFrame.contentWindow.document.body.scrollHeight;
          // console.log("newHeight: ", newHeight);
          if (newHeight !== dimensions.viewHeight)
            setDimensions({ ...dimensions, viewHeight: newHeight });
        }
      }
    }
  }

  //Set dimensions when window resizes
  function handleWindowResize() {
    let currWidth = dimensions.width;
    let newWidth = window.innerWidth - 24;
    if (newWidth < currWidth) setDimensions({ ...dimensions, width: window.innerWidth - 24 });
  }

  //helps memory
  const debounce = useCallback(function (fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }, []);

  React.useEffect(() => {
    const debouncedHandleResize = debounce(handleWindowResize, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  // DISABLED because Edit Content changes are overwritten. Usability issue - users probably want to reference the specs while testing content.
  //show html version of section while viewing Specs
  // useEffect(() => {
  //   currentTab == "tabSpecs" && appState.htmlSaved ? setShowHtml(true) : setShowHtml(false);
  // }, [currentTab]);

  //if there's existing html file get the name and set to html view mode by default
  useEffect(() => {
    getHtmlFile();
  }, [appState.htmlSaved, appState.currentPath]);

  //resize viewport height for react version
  useLayoutEffect(() => {
    //sadly settimout is the only way that resize doesn't happen too soon.
    // console.log("in useeffect that should call get height");
    let reactHeight = setTimeout(function () {
      // console.log("does this timeout run?");
      getHeight();
      if (path.includes("/ui")) {
        // console.log("inside path has ui");

        //set listener to check if the flat html content has had an interaction that might have changed its height, also listen for mouseup in case drag has stopped
        let htmlFrame = document.querySelector("#html-iframe");
        if (showHtml && htmlFrame !== null) {
          htmlFrame.contentDocument.addEventListener("click", () => {
            setHtmlListenerClicked(true);
          });
          htmlFrame.contentDocument.addEventListener("mouseup", () => {
            setHtmlListenerClicked(true);
          });
        }
      }
    }, 500);
    return () => clearTimeout(reactHeight);
  }, [containerRef.current, appState.currentPath, showHtml, dimensions.width]);

  //set viewport height for flat html.
  useLayoutEffect(() => {
    if (showHtml && htmlListenerClicked) {
      let htmlHeight = setTimeout(function () {
        let htmlFrame = document.querySelector("#html-iframe");
        let newHeight = htmlFrame.contentWindow.document.body.scrollHeight;
        if (newHeight !== dimensions.viewHeight)
          setDimensions({ ...dimensions, viewHeight: newHeight });
        setHtmlListenerClicked(false);
      }, 300);
      return () => clearTimeout(htmlHeight);
    }
  }, [htmlListenerClicked, handleWindowResize, appState.currentPath, showHtml, dimensions.width]);

  //Part 1 of saving html to server for viewer render. Part 2 is in export btn
  //gets html for currently displayed item in hidden portal and converts to html string, saves to state for output. Portal is used bc it's constantly updated and not stale html, like if ref was used.
  useEffect(() => {
    if (document.querySelector("#portal-root") !== null && saveHtml) {
      const domHTML = document.querySelector("#portal-root");
      var string = new XMLSerializer().serializeToString(domHTML);
      //filename is set as appState.outputName in the section
      setAppState({
        ...appState,
        htmlString: string,
      });
    }
  }, [saveHtml]);

  //formats html from portal for use in html tab.
  useEffect(() => {
    if (document.querySelector("#portal-root") !== null) {
      let domHTML = document.querySelector("#portal-root");
      let string = new XMLSerializer().serializeToString(domHTML);
      //filename is set as appState.outputName in the section
      const htmlStr = (xml, tab) => {
        // tab = optional indent value, default is tab (\t)
        var formatted = "",
          indent = "";
        tab = tab || "\t";
        xml.split(/>\s*</).forEach(function (node) {
          if (node.match(/^\/\w/)) indent = indent.substring(tab.length); // decrease indent by one 'tab'
          formatted += indent + "<" + node + ">\r\n";
          if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab; // increase indent
        });
        return formatted.substring(1, formatted.length - 3);
      };
      setAppState({
        ...appState,
        htmltab: htmlStr(string, "  "),
      });
    }
  }, [Portal, currentTab]);

  // Tab Management
  const [active_tab, setActiveTab] = useState(false);

  useEffect(() => {
    active_tab !== currentTab ? setActiveTab(active_tab) : null;
  }, [currentTab]);

  return (
    <>
      {/* this checks if the current page is brand guidelines or home page (checkpath)and won't render site viewer wrapper */}
      {/* {path.includes("brand") | ( */}
      {checkpath(path) ? (
        <>{children}</>
      ) : (
        // wrapper to demo editable Kingston sections

        <>
          <div className="v-main__content u-flex u-flex1 u-flexColumn" role="region">
            <S_Headline
              classMods={"s-headline--alignLeft"}
              headline={appState.headerName}
              breadcrumbs={[
                {
                  url: "/",
                  text: "Home",
                },
                {
                  url: "/web-ui",
                  text: "Web User Interface",
                },
              ]}
            />
            <C_Breakpoints
              bpclick={setBreakpClicked}
              setbpClicked={(val) => setBreakpClicked(val)}
            />
            {/* Check to see if view flat hmtl (useHTML var) is checked, if so no iframe wrapper is needed here. It's loaded in the section component. Website sections also return different content based on useHTML var. */}
            {showHtml ? (
              // HTML version
              <C_Resize
                contentClicked={htmlListenerClicked}
                bpClicked={breakpClicked}
                setbpClicked={(val) => setBreakpClicked(val)}
              >
                <div style={{ height: `${dimensions.viewHeight}px` }}>
                  <iframe
                    src={`../${currHtmlName}/${currHtmlName}.html`}
                    style={{ height: `${dimensions.viewHeight}px` }}
                    title="Iframe"
                    id="html-iframe"
                  />
                </div>
              </C_Resize>
            ) : (
              // React version
              <>
                <C_Resize
                  frameRef={frameRef}
                  contentClicked={htmlListenerClicked}
                  bpClicked={breakpClicked}
                  setbpClicked={(val) => setBreakpClicked(val)}
                >
                  <Frame
                    ref={frameRef}
                    id="web-content"
                    initialContent='<!DOCTYPE html><html><head><meta content="width=device-width, initial-scale=1" name="viewport" /></head><body><div className="frame-root" ></div></body></html>'
                    style={{ height: `${dimensions.viewHeight}px` }}
                    // head={
                    //   <link
                    //     type="text/css"
                    //     rel="stylesheet"
                    //     href={appState.brand == "kingston" ? "/kingston.css" : "/hyperx.css"}
                    //   />
                    // }
                    head={
                      <link
                        type="text/css"
                        rel="stylesheet"
                        href={
                          appState.brand == "kingston"
                            ? "https://styleguide.kingston.com/css/kingston/"
                            : "/hyperx.css"
                        }
                      />
                    }
                  >
                    <div ref={containerRef} id="content-container">
                      {children}
                    </div>
                  </Frame>
                </C_Resize>
              </>
            )}
            {env === "development" ? (
              <S_ContentNav
                tabs={[
                  { name: "Developer", active: "tabDeveloper" },
                  { name: "Specs", active: "tabSpecs" },
                  { name: "Edit Content", active: "tabEdit" },
                  { name: "HTML", active: "tabHtml" },
                ]}
                updateContent={setCurrentTab}
                currentContent={currentTab}
                classMods={"s-contentNav--tabs s-contentNav--dark"}
              />
            ) : (
              <S_ContentNav
                tabs={[
                  { name: "Specs", active: "tabSpecs" },
                  { name: "Edit Content", active: "tabEdit" },
                  { name: "HTML", active: "tabHtml" },
                ]}
                updateContent={setCurrentTab}
                currentContent={currentTab}
                classMods={"s-contentNav--tabs s-contentNav--dark"}
              />
            )}
            {/* Tabs and tab content here */}
            <div>
              <div
                className="l-inner"
                style={{ paddingTop: "2em", paddingBottom: "2em", minHeight: "25em" }}
              >
                <div className="u-show">
                  {env === "development" && currentTab === "tabDeveloper" ? (
                    <DevTab showHtml={showHtml} setShowHtml={setShowHtml} />
                  ) : currentTab === "tabSpecs" ? (
                    <Specs />
                  ) : currentTab === "tabEdit" ? (
                    <EditContentTab showHtml={showHtml} setShowHtml={setShowHtml} />
                  ) : (
                    <HtmlTab />
                  )}
                </div>
              </div>
            </div>
          </div>

          <Portal id="portal-root">{children}</Portal>
        </>
      )}
    </>
  );
};

export default IframeWrapper;
