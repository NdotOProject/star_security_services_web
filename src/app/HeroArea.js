import React from "react";
import clsx from "clsx";

import images from "../assets/images";

import "./HeroArea.css";

const styleClasses = Object.freeze({
  heroAreaContainer: "hero-area-container",
  heroArea: "hero-area",
  imageSmall: "img-small",
  imageBig: "img-big",
  imageLarge: "img-large",
  left: "left",
  right: "right",
  textContentContainer: "text-content-container",
  textBackground: "text-bg",
  contentArea: "content-area",
  title: "title",
  text: "text",
});

export default function HeroArea() {
  return (
    <div id="home" className={clsx(styleClasses.heroAreaContainer)}>
      <div className={clsx(styleClasses.heroArea)}>
        <img
          className={clsx(styleClasses.imageLarge)}
          src={images.photo4}
          alt=""
        />

        <img
          className={clsx(styleClasses.imageBig, styleClasses.left)}
          src={images.image9}
          alt=""
        />

        <img
          className={clsx(styleClasses.imageBig, styleClasses.right)}
          src={images.image10}
          alt=""
        />

        <img
          className={clsx(styleClasses.imageSmall, styleClasses.left)}
          src={images.image3}
          alt=""
        />

        <img
          className={clsx(styleClasses.imageSmall, styleClasses.right)}
          src={images.image6}
          alt=""
        />

        <div className={clsx(styleClasses.textContentContainer)}>
          <div className={clsx(styleClasses.textBackground)}></div>
          <div className={clsx(styleClasses.contentArea)}>
            <div className={clsx(styleClasses.title)}>
              <span>Welcome to Star</span>
            </div>
            <div className={clsx(styleClasses.text)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              magna magna, efficitur eget quam at, faucibus lobortis arcu.
              Mauris hendrerit dictum metus nec sollicitudin. Mauris massa mi,
              tincidunt vel congue mollis, iaculis id turpis. Morbi finibus
              aliquet magna, sit amet cursus dui luctus ut. Donec quis ornare
              felis. Cras vel gravida eros. Pellentesque a tincidunt sem.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
