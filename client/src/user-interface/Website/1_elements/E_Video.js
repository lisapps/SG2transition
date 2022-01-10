import React from "react";

const E_Video = ({ title, source, classes }) => {
  let vTitle = title ? title : "#buttonLink";
  let vSource = source ? source : "Button Text";
  let vClasses = classes ? classes : "";

  return (
    <video
      className={vClasses}
      src={vSource}
      aria-label="aria text"
      title={vTitle}
    >
      <track kind="captions" />
    </video>
  );
};

export default E_Video;
