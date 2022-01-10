// eslint-disable-next-line no-unused-vars
import React from "react";

const ToastContext = React.createContext();

export default ToastContext;

// const initialState = { text: "Done." };

// export const ToastProvider = ({ children }) => {
//   const [toastOptions, setToastOptions] = useState(initialState);
//   // console.log("initial appstate");
//   const value = { toastOptions, setToastOptions };

//   return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
// };
