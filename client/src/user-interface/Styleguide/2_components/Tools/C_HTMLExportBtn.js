import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import ToastContext from "../../../../ToastContext";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
var server = process.env.API_URL;

//passed showHtml from IframeWrapper to Tools to here. If showing html then disable button
const C_HTMLExportBtn = ({ show }) => {
  const { appState, setAppState } = useContext(AppContext);
  const [callingApi, setCallingApi] = useState(false);
  let string = appState.htmlString;

  const { setToastOptions } = useContext(ToastContext);

  function callSaveApi() {
    //tells iframeWrapper to get string
    setAppState({
      ...appState,
      flatHTML: true,
    });
  }

  //need this as separate function bc string can take a while to load
  useEffect(() => {
    if (string && string.length > 1) {
      //api is running
      setCallingApi(true);
    }
  }, [string]);

  //triggered by listening for setCallingApi set to true
  useEffect(() => {
    if (string && string.length > 0 && callingApi) {
      // console.log("typeof string in exportbtn:", typeof string);
      //set everything to false and empty
      setCallingApi(false);
      setAppState({
        ...appState,
        flatHTML: false,
      });
      // axios stuff here
      axios({
        method: "post",
        url: server + "/output-html",
        data: {
          fileName: appState.outputName,
          htmlString: appState.htmlString,
          scripts: appState.scripts,
          // height: dimensions.viewHeight,
        },
        withCredentials: false,
      })
        .then((res) => {
          if (res && res.data.status == "Success") {
            setToastOptions({ text: "HTML File was output." });
          } else {
            throw res;
          }
        })
        .catch((error) => {
          // alert("There was a problem saving the section. " + error.data.status);
          setToastOptions({ text: "There was a problem saving the section. " + error.data });
          // console.log(error);
        });
    }
  }, [callingApi]);

  return (
    <>
      <button
        className="v-tool__btn v-pill"
        onClick={() => callSaveApi()}
        disabled={show}
        alt={
          show
            ? "You must be in React mode to save html."
            : "Output flat html and JS file after edits."
        }
        title={
          show
            ? "You must be in React mode to save html."
            : "Output flat html and JS file after edits."
        }
      >
        Save HTML and JS
      </button>
    </>
  );
};

export default C_HTMLExportBtn;
