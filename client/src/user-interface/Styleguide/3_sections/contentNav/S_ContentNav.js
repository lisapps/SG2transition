import React from "react";
import E_ContentBtn from "../../1_elements/contentBtn/E_ContentBtn";

//The ContentNav section is the tabbed button area below the viewFrame. It toggles items related to the content in the viewframe, like the "Developer", "Specs", tabs. JUST THE BUTTONS. The actual content of those tabs is in IframeWrapper.
const S_ContentNav = ({ tabs, toggleTab, updateContent, currentContent, classMods }) => {
  return (
    <div
      className={
        `s-contentNav ` +
        classMods +
        ` u-animated u-animated--delayFast u-animated--slowest a-fadeIn`
      }
    >
      <ul className="s-contentNav__list l-inner">
        {tabs.map((tab, index) => {
          return (
            <E_ContentBtn
              key={index}
              btnData={tab}
              click={() => {
                if (toggleTab) toggleTab(tab.path);
                updateContent(tab.active);
              }}
              currentContent={currentContent}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default S_ContentNav;
