import React from "react";

const E_Blockquote = ({ quote, author, title }) => {
  let _quote = quote
    ? quote
    : "I've spent a life chasing stories to tell when I'm old.";
  let _author = author ? author : "Atticus";

  return (
    <blockquote clsassName="e-blockquote">
      <div className={"e-blockquote__copy"}>
        <svg width="32" height="21" viewBox="0 0 31.63 21.09">
          <path d="M13.18 21.09V7.91H5.93L10.54 0H4.61L0 7.91v13.18zM31.63 7.91h-7.25L29 0h-5.94l-4.61 7.91v13.18h13.18z" />
        </svg>
        {_quote}
        <svg width="20" height="13" viewBox="0 0 20.28 13.52">
          <path d="M11.83 0v8.45h4.65l-3 5.07h3.8l3-5.07V0zM0 8.45h4.65l-3 5.07h3.8l3-5.07V0H0z"></path>
        </svg>
      </div>
      <div className="e-blockquote__title">
        {_author}
        {title && <span>{"  " + title}</span>}
      </div>
    </blockquote>
  );
};

export default E_Blockquote;
