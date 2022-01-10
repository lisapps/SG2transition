import React, { useContext } from "react";
import { AppContext } from "../../../../../AppContext";

const Specs = () => {
  const { appState } = useContext(AppContext);
  let specs = appState.specs;

  if (specs)
    return (
      <article>
        <div className={`v-specs u-animated u-animated--delay500ms u-animated a-fadeIn`}>
          {appState.specs.map((spec, i) => (
            <div className="v-specs__data" key={i}>
              <div className="v-specs__data__key">{spec[0]}</div>
              <div className="v-specs__data__content">
                <div className={`l-row l-row--flush`}>
                  {spec[1].map((detail, index) => (
                    <div className={`l-row__col l-1/` + `${spec[1].length}`} key={index}>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    );
  else return "No specs.";
};

export default Specs;
