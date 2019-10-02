import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isSignedInWithGoogle, ...otherProps }) => (
  <button
    className={`${isSignedInWithGoogle ? "google-sign-in" : ""} custom-button `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
