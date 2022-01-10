import React, { useState } from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import IframeWrapper from "./user-interface/Styleguide/2_components/IframeWrapper/IframeWrapper";
import { AppProvider } from "./AppContext.js";
import { OptionsProvider } from "./OptionsContext";
import ToastContext from "./ToastContext";
import { DimensionsProvider } from "./DimensionsContext";
import modules from "./modules";
import "../styles/viewer.scss";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
// Viewer is the only css/scss that is pulled directly into the app.
import S_Masthead from "./user-interface/Styleguide/3_sections/masthead/S_Masthead";
import S_Footer from "../src/user-interface/Styleguide/3_sections/footer/S_Footer";
import C_aside from "../src/user-interface/Styleguide/2_components/aside/C_aside";

const App = () => {
  let location = useLocation();

  //some Toast Context settings. Actual creation function in another file so components can import it instead of using context.provider and context.consumer
  const [toastOptions, setToastOptions] = useState(null);

  const toastValue = React.useMemo(
    () => ({
      toastOptions,
      setToastOptions,
    }),
    [toastOptions],
  );

  function NoMatch() {
    return (
      <div className="s-content">
        <h3>
          Sorry, we couldn&apos;t find a page for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }

  return (
    <AppProvider>
      <ToastContext.Provider value={toastValue}>
        {/* Application Shell */}
        <S_Masthead />
        <C_aside />
        <OptionsProvider>
          <DimensionsProvider>
            <IframeWrapper>
              {/* Case Switch - General Content Wrapper */}
              <Switch>
                {modules.map((module) => (
                  <Route {...module} key={module.component} />
                ))}
                <Redirect from="/brand/elements" to="/brand/elements/logo" exact />
                <Redirect from="/brand/fury" to="/brand/fury/logo" exact />
                <Redirect from="/brand/photography" to="/brand/photography/overview" exact />
                <Redirect
                  from="/brand/illustrations-and-backgrounds"
                  to="/brand/illustrations-and-backgrounds/vision"
                  exact
                />
                <Redirect from="/brand/video" to="/brand/video/name1" exact />
                <Redirect from="/brand/kiwy" to="/brand/kiwy/vision" exact />
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </IframeWrapper>
          </DimensionsProvider>
        </OptionsProvider>
        {/* Example of what switch the above outputs 
          <IframeWrapper>
            <Route
              path="/",
              exact: true,
              component={Pg_home}
            />
            <Route
              path="/brand/in-page-nav"
              component={InPageNav}
            />
        </IframeWrapper> */}
        <S_Footer />
      </ToastContext.Provider>
    </AppProvider>
  );
};

export default App;
