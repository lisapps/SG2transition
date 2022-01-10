import React, { useContext } from "react";
import C_UseHTMLToggle from "../../Tools/C_UseHTMLToggle";
import { AppContext } from "../../../../../AppContext";
import { OptionsContext } from "../../../../../OptionsContext";
import EditableFields from "./EditableFields/EditableFields";
import C_ThemeSwitcher from "../../Tools/C_ThemeSwitcher";
import C_LanguageSwitcher from "../../Tools/C_LanguageSwitcher";

const EditContentTab = ({ showHtml, setShowHtml }) => {
  const { appState } = useContext(AppContext);
  const { contentOptions } = useContext(OptionsContext);

  return (
    <>
      <div className="l-row">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            marginBottom: "1.5em",
          }}
        >
          {appState && appState.currentTheme ? (
            <div
              style={{
                display: "block",
              }}
            >
              <C_ThemeSwitcher />
            </div>
          ) : (
            ""
          )}
          {contentOptions && contentOptions.currentLang ? (
            <div style={{ display: "block" }}>
              <C_LanguageSwitcher />
            </div>
          ) : (
            ""
          )}
          <div style={{ display: "block" }}>
            <C_UseHTMLToggle
              setShowHtml={setShowHtml}
              show={showHtml}
              option1={"Live Site"}
              option2={"Editable"}
            />
          </div>
        </div>
      </div>
      {/* don't show editable fields if in html mode */}
      {!showHtml && <EditableFields />}
    </>
  );
};

export default EditContentTab;
