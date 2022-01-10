import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Notification_Small = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let notiVars = {
      ...appState,
      currentPath: "/ui/notif-small",
      currentTheme: "t-slate",
      outputName: "Notification_Small",
      headerName: "Notification: Small",
      description:
        "The Notification Section is a top page display of important information meant to captivate the users attention. The small version has centered text.",
      htmlSaved: true,
      scripts: ["../rexusManager.component.js", "./notification.component.js"],
      specs: [
        ["Text", ["Character Limit: None"]],
        ["SVG", ["Expects a path to a .SVG line art illustration. (Optional)"]],
      ],
    };
    setAppState(notiVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown.
    setContentOptions({ currentLang: null });
    setDimensions({ ...dimensions, viewHeight: "56", width: window.innerWidth - 24 });
  }, []);

  return (
    <section className={"s-notification " + appState.currentTheme}>
      <div className="c-notification c-notification--small">
        <div className="l-inner">
          <p>Students get 20% off on select products during September</p>
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
  path: "notification-small",
  component: S_Notification_Small,
  navtxt: "Notification: Small",
  htmlName: "Notification_Small",
  icon: "",
};
