import React from "react";

import clsx from "clsx";

import "./ServiceArea.css";

const styleClasses = Object.freeze({
  serviceArea: "service-area",
  titleContainer: "title-container",
});

export default function ServiceArea() {
  return (
    <div className={clsx(styleClasses.serviceArea)}>
      <div className={clsx(styleClasses.titleContainer)}>
        <span>Our Services</span>
      </div>
    </div>
  );
}
