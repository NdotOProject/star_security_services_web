import "./DefaultLayout.css";
//
import React, { useEffect, useRef, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function DefaultLayout({ children }) {
  const headerRef = useRef();
  const [headerHeight, setHeaderHeight] = useState(60);

  useEffect(() => {
    setHeaderHeight(headerRef.current.getHeight());
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <div
        style={{
          "--header-height": `${headerHeight}px`,
          marginTop: headerHeight,
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
