import React from "react";
import {Link} from "react-router-dom"

const E_historyArrow = () => {

  let histPrev = '/brand/guidelines'

  return (
    <Link 
      to={histPrev} 
      className={`e-historyArrow`}>
        <svg className={`e-historyArrow__icon`} xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 32 32">
          <path d="M18.332 23.567a1.298 1.298 0 1 1-1.836-1.836l4.252-4.252L7.93 17.3a1.317 1.317 0 0 1-1.298-1.298 1.245 1.245 0 0 1 1.262-1.263l13.36.185-4.732-4.732a1.263 1.263 0 1 1 1.786-1.785L25.9 16l-7.567 7.567Z"/>
        </svg>
        <span>All Categories</span>
    </Link>
  
  );
};

export default E_historyArrow;
