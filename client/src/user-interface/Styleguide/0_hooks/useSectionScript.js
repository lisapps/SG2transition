import React, { useEffect } from "react";

function useSectionScript(script) {
  const SectionScript = () => {
    console.log("did it! Loaded script loading hook...");
  };

  useEffect(() => {
    SectionScript();
  }, []);
}

export default useSectionScript;
