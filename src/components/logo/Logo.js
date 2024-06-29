import React from "react";

import "./Logo.css";
import clsx from "clsx";

const styleClasses = {
  logo: "logo",
};

export default function Logo() {
  return <div className={clsx(styleClasses.logo)}>Star</div>;
}
