import React, { useContext } from "react";
import { AppContext } from "../../../../AppContext";
import { Link } from "react-router-dom";
import EhistoryArrow from "../../1_elements/historyArrow/E_historyArrow"

  const S_Headline = ({ classMods, headline, breadcrumbs, history }) => {
  const { appState } = useContext(AppContext);

  return (
    <div className={"s-headline " + classMods}>
      <div className="l-inner">
        <div className="u-animated u-animated--slow a-fadeIn u-animated--easeOut">
          { history && (
            <>
              <EhistoryArrow /> 
            </>
          )}
          {breadcrumbs && (
            <p className="s-headline__breadcrumbs">
              {breadcrumbs.map((breadcrumb, index) => (
                <span key={index}>
                  <Link to={breadcrumb.url} key={breadcrumb.text}>
                    {breadcrumb.text}
                  </Link>
                  <span className="s-headline__breadcrumbs__slash">/</span>
                </span>
              ))}
            </p>
          )}

          <h1 className="s-headline__title">{headline}</h1>
          {appState.description && (
            <p className="s-headline__description">{appState.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default S_Headline;
