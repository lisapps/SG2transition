import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../../../../AppContext";
import keywords from "./keywords.json";
import Fuse from "fuse.js";
import "./c_search.scss";

const searchIcon = (
  <svg id="icon-search" viewBox="0 0 17.2 16.7">
    <path d="M9.8 0C5.7 0 2.4 3.3 2.4 7.4s3.3 7.4 7.4 7.4 7.4-3.3 7.4-7.4S13.9 0 9.8 0zm0 12.8c-3 0-5.3-2.4-5.3-5.3 0-3 2.4-5.3 5.3-5.3s5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z" />
    <path d="M4.5 10.5L.4 14.6c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l4.1-4.1" />
  </svg>
);

const C_Search = () => {
  const [data, setData] = useState(keywords);
  const [active, setActive] = useState(false);
  const [matchActive, setMatchActive] = useState(false);

  const { appState, setAppState } = useContext(AppContext);

  const searchRef = useRef();
  const inputRef = useRef();
  const history = useHistory();

  useEffect(() => {
    document.addEventListener("keydown", handleEsc, true);
    document.addEventListener("click", clickOutside, true);
    //must clear even listeners when done
    return () => {
      document.removeEventListener("keydown", handleEsc, true);
      document.removeEventListener("click", clickOutside, true);
    };
  }, []);

  const toggleActive = () => {
    setActive(!active);
    inputRef.current.focus();
    //to clear search field
    inputRef.current.value = "";
    setMatchActive(false);
  };

  const handleEsc = (event) => {
    if (event.key === "Escape") {
      setActive(false);
      setData(keywords);
    }
  };

  const clickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      setData(keywords);
    }
  };

  const handleChange = (searchtext) => {
    if (!searchtext) {
      setData(keywords);
      return;
    }
    const fuse = new Fuse(data, {
      keys: ["topic", "keywords"],
    });

    const result = fuse.search(searchtext);
    const matches = [];

    if (!result.length) {
      setData([]);
      // setMatchActive(false);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setData(matches);
      setMatchActive(true);
    }
  };

  const handleClose = (url) => {
    history.push(url);
    setActive(false);
    setData(keywords);
    setAppState({ ...appState, currentPath: url });
  };

  return (
    <div className={`c-search c-search--minimal ${active && "c-search--active"}`} ref={searchRef}>
      <input
        className="c-search__input"
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search Style Guide"
        ref={inputRef}
      />
      <button className="c-search__icon" onClick={() => toggleActive()} tabIndex={0}>
        {searchIcon}
      </button>
      {matchActive && (
        <div className={`c-search__panel u-animated u-animated--delayFast a-fadeIn`}>
          <ul>
            {data.length > 0 ? (
              data.map((item) => (
                <li key={item.topic}>
                  <Link to={item.url} onClick={() => handleClose(item.url)}>
                    {item.topic}
                  </Link>
                </li>
              ))
            ) : (
              <li>
                <Link to={"#"}>
                  No search results for: <em>{inputRef.current.value}</em>
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default C_Search;
