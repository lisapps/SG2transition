import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { Link } from "react-router-dom";
import modules from "../../../../modules";
import "./pg_webui.scss";

const Pg_Webui = () => {
  const { appState, setAppState } = useContext(AppContext);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setAppState({
      ...appState,
      currentPath: "/web-ui",
      outputName: "",
      headerName: "Kingston Web Sections",
      thumb: "",
      viewHeight: null,
      description: null,
    });
    modules.forEach((mod) => {
      let p = mod.path;
      if (p.includes("/ui")) setSections((sections) => [...sections, mod]);
    });
  }, []);

  if (sections.length < 1) return "...Loading Hero";
  return (
    <div className="pg-webMenu">
      <div className="pg-webMenu__main">
        <div className="l-row">
          {sections.map((
            section, // with a name, and routes
          ) => (
            <li key={section.component} className="l-row__col l-1/5">
              <Link to={section.path.replace(/:.+/, "")}>
                <span>{section.navtxt}</span>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default {
  path: "web-ui",
  component: Pg_Webui,
  navtxt: "Kingston Web Sections",
};
