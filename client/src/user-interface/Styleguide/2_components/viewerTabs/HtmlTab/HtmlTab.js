import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../../../AppContext";
// import { CopyBlock, a11yLight } from "react-code-blocks";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import darcula from "react-syntax-highlighter/dist/esm/styles/prism/darcula";

const HtmlTab = () => {
  SyntaxHighlighter.registerLanguage("jsx", jsx);

  const { appState } = useContext(AppContext);
  const [htmlCode, setHtmlcode] = useState("");
  const [copied, setCopied] = useState(false);

  const ClipboardListIcon = ({ size, color, ...props }) => (
    <svg
      className="c-htmlTab_clipboard"
      {...props}
      viewBox="0 0 384 512"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z" />
    </svg>
  );

  const ClipboardCheckIcon = ({ size, color, ...props }) => (
    <svg
      className="c-htmlTab_clipboard"
      {...props}
      viewBox="0 0 384 512"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z" />
    </svg>
  );

  const handleClick = () => {
    setCopied(true);
    navigator.clipboard.writeText(htmlCode);
  };

  useEffect(() => {
    if (appState.htmltab) setHtmlcode(appState.htmltab);
  }, [appState.htmltab]);

  return (
    <div className="c-htmlTab">
      <h6>*Changes in the Edit Content tab will show in the html.</h6>
      <div style={{ position: "relative" }}>
        <button type="button" onClick={handleClick}>
          {copied ? (
            <ClipboardCheckIcon size="1.75em" color="grey" />
          ) : (
            <ClipboardListIcon size="1.75em" color="grey" />
          )}
        </button>
        <SyntaxHighlighter
          language="jsx"
          style={darcula}
          wrapLongLines={true}
          // lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
        >
          {htmlCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default HtmlTab;
