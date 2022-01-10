import React from "react";
import C_UseHTMLToggle from "../Tools/C_UseHTMLToggle";
import C_HTMLExportBtn from "../Tools/C_HTMLExportBtn";

const DevTab = ({ setShowHtml, showHtml }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          marginBottom: "1.5em",
        }}
      >
        <div style={{ display: "block" }}>
          <C_UseHTMLToggle setShowHtml={setShowHtml} show={showHtml} />
        </div>
        <div style={{ display: "block" }}>
          <C_HTMLExportBtn show={showHtml} />
        </div>
      </div>
      <div>
        <p>YOU WILL NEED TO RESTART (npm run dev) the first time you save a section&apos;s html.</p>
        <p>
          *&quot;htmlSaved&quot; must be set to true in the section code (in the setAppState vars)
          or the above toggle will be disabled.
        </p>
        <p>
          *If you have &quot;htmlSaved&quot; set to true but have not saved the html and js, you
          will see &quot;Sorry, we couldn&apos;t find a page for...&quot;
        </p>
      </div>
    </>
  );
};

export default DevTab;
