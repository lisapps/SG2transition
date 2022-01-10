import React, { useRef, useEffect } from "react";

// this isn't working because Rexus must be loaded

function useFlexTiles() {
  var $root, expectedWidth, maxPerRow, windowWidth, adjustedWidth;
  var ftInterval = false;

  const FlexTiles = () => {
    console.log("did it! ");
  };

  useEffect(() => {
    FlexTiles();
  }, []);
}

export default useFlexTiles;
