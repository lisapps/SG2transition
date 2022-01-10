import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Notification = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let notiVars = {
      ...appState,
      currentPath: "/ui/notification",
      currentTheme: "t-slate",
      outputName: "Notification",
      headerName: "Notification",
      description:
        "The Notification Section is a top page display of important information meant to captivate the users attention.",
      htmlSaved: true,
      scripts: ["../rexusManager.component.js", "./notification.component.js"],
      specs: [
        ["Text", ["Character Limit: None"]],
        ["SVG", ["Expects a path to a .SVG line art illustration. (Optional)"]],
      ],
    };
    setAppState(notiVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown.
    setContentOptions(null);
    setDimensions({ ...dimensions, viewHeight: "156", width: window.innerWidth - 24 });
  }, []);

  return (
    <section className={"s-notification " + appState.currentTheme}>
      <div className="c-notification">
        <div className="l-inner">
          <p>
            Unfortunately, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </div>
        <button className="c-notification__close" href="#" aria-label="Close Button">
          <svg viewBox="0 0 14 14">
            <path d="M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z"></path>
            <path d="M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default {
  path: "notification",
  component: S_Notification,
  navtxt: "Notification",
  htmlName: "Notification",
  icon: "",
};
