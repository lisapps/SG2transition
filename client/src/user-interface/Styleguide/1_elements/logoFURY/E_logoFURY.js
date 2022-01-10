import React, { useState, useEffect } from "react";

const E_logoFURY = ({ version }) => {
  const [currentStyle, setCurrentStyle] = useState("");

  useEffect(() => {
    if (version == "default") {
      setCurrentStyle("");
    } else if (version == "white") {
      setCurrentStyle("e-logoFURY--white");
    } else if (version == "monoBlack") {
      setCurrentStyle("e-logoFURY--monoBlack");
    } else if (version == "monoWhite") {
      setCurrentStyle("e-logoFURY--monoWhite");
    }
  }, [version]);

  return (
    <div className={`e-logoFURY ` + currentStyle}>
      <svg 
        version="1.1" 
        className="e-logoFURY__svg" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 186.3 65.2"
        >
        <g>
          <path className="e-logoFURY__svg__FURY" d="M.9 50c-.1.2-.1.4-.2.6-1.3 3.7-.6 7.8 1.6 11l1.1 1.6 11.7-28.9-5.1-6.9L.9 50z"/>
          <path className="e-logoFURY__svg__FURY" d="M53.6 13.9H38l-1.6 1.6H4.8l5.2 6.9h3.7l-1.3 3.2 6.3 8.2-11.4 28 14.4-5.1 7.2-17.8h14.6l3.6-8.9H29.8l-4.4-5.8h24zM77.7 34.9l7.7-19.2c.5-1.1 1.5-1.8 2.7-1.8h8.1L82.7 47.3l-7.2-2H49.9c-2.1 0-3.5-2.1-2.7-4.1l11.1-27.4h5.9c2.1 0 3.5 2.1 2.7 4.1l-6.6 16c-.2.5.2 1 .7 1h16.7zM128.7 44.4l-6.7-5.5h6.4c1.2 0 2.3-.7 2.7-1.8l7.1-17.5c.8-1.9-.6-4.1-2.7-4.1h-17.4l-1.6-1.6h-15.7L87.4 47.3h9c1.2 0 2.3-.7 2.7-1.8l8.6-21.3H125c.6 0 1.1.6.8 1.2L124 30h-14l-2.4 6c-.5 1.4-.1 2.9 1 3.8l23.2 18.6c2.5-4.7 1.3-10.8-3.1-14zM169.7 30h-20.8l4.2-10.5c.8-1.9-.6-4.1-2.7-4.1h-5.7l-7.8 19.4c-.8 1.9.6 4.1 2.7 4.1H150l-7 17.2 8.6 7 9.8-24.3h12.8c1.2 0 2.3-.7 2.7-1.8l9.4-23.2h-8.1c-1.2 0-2.3.7-2.7 1.8L169.7 30z"/>
          <path className="e-logoFURY__svg__FURY" d="M154.1 65.2c5-1.3 7.9-1.9 9.9-6.7l6.7-16.5h-7.2l-9.4 23.2z"/>
          <g>
            <path className="e-logoFURY__svg__kingston" d="M166 64.2v-2.7h-1V61h2.6v.5h-1v2.7h-.6zm1.9 0V61h.8l.8 2.5.8-2.5h.8v3.2h-.5v-2.7l-.8 2.7h-.5l-.9-2.7v2.7h-.5z"/>
          </g>
          <g>
            <path className="e-logoFURY__svg__kingston" d="M7.4 4.2l3.1 4.4H8.8C6.2 4.7 6.3 4.9 6.3 4.9v3.7H4.8V.1h1.4v3.6L8.7.1h1.7l-3 4.1zM17.3.1h1.4v8.5h-1.4V.1zM32.1 8.6h-1.8l-2.7-6.7c0 .6.1 1.9.1 2.5v4.2h-1.4V.1H28l2.7 6.7c0-.7-.1-1.9-.1-2.4V.1H32l.1 8.5zM39.4 5.7V3c0-2.2.9-3 3-3 2 0 2.9.8 2.9 2.7h-1.4c0-1-.4-1.5-1.5-1.5s-1.5.4-1.5 1.7v3c0 1.3.5 1.7 1.6 1.7S44 7.2 44 6.1V4.9h-1.5V3.7h3v4.9h-.7l-.2-.7c-.5.5-1.1.8-2.1.8-2.2 0-3.1-.8-3.1-3zM56.8 2.3c0-.8-.4-1.1-1.4-1.1s-1.5.3-1.5 1.2.3 1.2 1.7 1.4c2.2.3 2.8 1 2.8 2.4 0 1.8-1.1 2.5-3 2.5s-3-.7-3-2.5h1.4c0 1 .5 1.3 1.6 1.3S57 7.1 57 6.2c0-.8-.3-1.1-1.9-1.4-1.8-.3-2.6-.9-2.6-2.5 0-1.5.9-2.4 2.9-2.4s2.9.7 2.9 2.4h-1.5zM67 1.4h-2V.1h5.4v1.2h-2v7.2H67V1.4zM83.1 5.8c0 2.1-.9 2.9-3 2.9s-3-.8-3-2.9V2.9C77 .8 78 0 80.1 0s3 .8 3 2.9v2.9zm-4.6 0c0 1.3.5 1.7 1.6 1.7s1.6-.4 1.6-1.7V2.9c0-1.3-.5-1.7-1.6-1.7s-1.6.4-1.6 1.7v2.9zM96.2 8.6h-1.8l-2.7-6.7c0 .6.1 1.9.1 2.5v4.2h-1.4V.1h1.8l2.7 6.7c0-.7-.1-1.9-.1-2.4V.1h1.4v8.5z"/>
          </g>
        </g>
      </svg>
    </div>
  
  );
};

export default E_logoFURY;
