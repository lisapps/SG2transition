/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState, useCallback, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { DimensionsContext } from "../../../../DimensionsContext";
import ToastContext from "../../../../ToastContext";

const C_Resize = ({ children, ...props }) => {
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const { toastOptions, setToastOptions } = useContext(ToastContext);

  const [gripSide, setGripSide] = useState("");
  let initialWidth = dimensions.width;
  const [componentWidth, setComponentWidth] = useState(initialWidth);
  const [dragging, setDragging] = useState(false);

  let widthMin = 315;
  let newWidth = null;

  const notify = () => {
    toast(toastOptions.text, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
    // reset context to empty obj
    setToastOptions(null);
  };

  useEffect(() => {
    if (toastOptions && toastOptions.text) {
      notify();
    }
  }, [toastOptions]);

  useEffect(() => {
    setDragging(false);
    // if anything besides handles or icons are clicked, turn resize off
    if (props.bpClicked === false) {
      setDimensions({ ...dimensions, width: componentWidth });
    }
  }, [props.contentClicked]);

  useEffect(() => {
    // console.log("set width running in resize bars with width: ", dimensions.width);
    setComponentWidth(dimensions.width);
  }, [props.bpClicked, dimensions.width]);

  const handleStartDrag = (e, side) => {
    //make sure breakpoint sizing is off
    props.setbpClicked(false);
    setDragging(true);
    setGripSide(side);
  };

  const handleStopDrag = () => {
    //had to move setAppState to async bc it wasn't updating fast enough
    updateAppWidth().then(function () {
      // setDimensions({ ...dimensions, width: componentWidth });
      setGripSide("");
      setDragging(false);
    });
    //no error function needed for the async result
  };

  async function updateAppWidth() {
    setDimensions({ ...dimensions, width: componentWidth });
  }

  const handleDragging = useCallback(
    (e) => {
      // Active on Mouse Move
      // 24 is the px width of the handles
      let widthMax = parseInt(window.innerWidth - 24);
      // console.log("widthMax: ", widthMax);

      if (dragging) {
        let _dx = e.movementX;
        if (gripSide == "left") {
          _dx > 0
            ? (newWidth = componentWidth - 2 * Math.abs(_dx))
            : (newWidth = componentWidth + 2 * Math.abs(_dx));
        }

        if (gripSide == "right") {
          // console.log("is _dx > 0: ", _dx > 0);
          _dx > 0
            ? (newWidth = componentWidth + 2 * Math.abs(_dx))
            : (newWidth = componentWidth - 2 * Math.abs(_dx));
        }
        // console.log("newWidth: ", newWidth);
        if (newWidth > widthMax + 24) {
          // console.log("got set to width max");
          newWidth = widthMax;
        } else if (newWidth < widthMin) {
          newWidth = widthMin;
        }
        setComponentWidth(newWidth);
      }
    },
    [dragging, componentWidth, gripSide],
  );

  return (
    <div
      className="v-viewFrame"
      id="sgViewer"
      onMouseUp={() => handleStopDrag()}
      onMouseMove={(e) => handleDragging(e)}
    >
      {/* had to add an extra check that state width and local drag width are the same, if not show local width until state catches up. Otherwise there's an occasional jump when dragged in and out a bunch. */}
      <div
        className="v-viewFrame__window"
        id="sgViewerFrame"
        style={{
          width: `${dragging ? componentWidth : dimensions.width}px`,
        }}
      >
        <svg
          className="v-viewFrame__grip v-viewFrame__grip--left"
          onMouseDown={(e) => handleStartDrag(e, "left")}
          onMouseUp={() => handleStopDrag()}
          id="v-frameGripLeft"
          aria-hidden="true"
          focusable="false"
          role="img"
          viewBox="0 0 6 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icons/handle" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect id="Rectangle" fill="#E8E8E8" x="0" y="0" width="6" height="80" rx="3"></rect>
          </g>
        </svg>
        <svg
          className="v-viewFrame__grip v-viewFrame__grip--right"
          onMouseDown={(e) => handleStartDrag(e, "right")}
          onMouseUp={() => handleStopDrag()}
          id="v-frameGripRight"
          aria-hidden="true"
          focusable="false"
          role="img"
          viewBox="0 0 6 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icons/handle" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect id="Rectangle" fill="#E8E8E8" x="0" y="0" width="6" height="80" rx="3"></rect>
          </g>
        </svg>
        {children}
      </div>
      <ToastContainer />
    </div>
  );
};

export default C_Resize;
