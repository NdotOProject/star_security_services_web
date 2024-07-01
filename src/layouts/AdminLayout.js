import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import Logo from "../components/logo/Logo";
import Icons from "../components/icons/Icons";

import "./AdminLayout.css";
import { Link } from "react-router-dom";
import routes from "../configurations/routes";

export default function AdminLayout({ children }) {
  const [showNavigationBar, setShowNavigationBar] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(60);

  const headerRef = useRef();

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);

  return (
    <div
      className={clsx("layout")}
      style={{ "--header-height": `${headerHeight}px` }}
    >
      <div ref={headerRef} className={clsx("header")}>
        <div
          className={clsx("navigation_bar-control-button")}
          onClick={() => {
            setShowNavigationBar(!showNavigationBar);
          }}
        >
          <Icons.Bars size={30} />
        </div>
        <Logo />
      </div>
      <div className={clsx("layout-content")}>
        <NavigationBar show={showNavigationBar} />
        {children}
      </div>
    </div>
  );
}

function NavigationBar({ show = true }) {
  const [activeItem, setActiveItem] = useState(window.location.pathname);

  return (
    <div
      className={clsx("navigation_bar", {
        opened: show,
        collapsed: !show,
      })}
    >
      <Link
        to={routes.admin.home}
        className={clsx("item", {
          active: activeItem === routes.admin.home,
        })}
        onClick={() => setActiveItem(routes.admin.home)}
      >
        <Icons.House className={clsx("icon")} />
        {show && <span>Dashboard</span>}
      </Link>
      {/*  */}
      <Link
        to={routes.admin.employees}
        className={clsx("item", {
          active: activeItem === routes.admin.employees,
        })}
        onClick={() => setActiveItem(routes.admin.employees)}
      >
        <Icons.BuildingUser className={clsx("icon")} />
        {show && <span>Employee</span>}
      </Link>
      {/*  */}
      <Link
        to={routes.admin.clients}
        className={clsx("item", {
          active: activeItem === routes.admin.clients,
        })}
        onClick={() => setActiveItem(routes.admin.clients)}
      >
        <Icons.Users className={clsx("icon")} />
        {show && <span>Client</span>}
      </Link>
      {/*  */}
      <Link
        to={routes.admin.recruitmentNews}
        className={clsx("item", {
          active: activeItem === routes.admin.recruitmentNews,
        })}
        onClick={() => setActiveItem(routes.admin.recruitmentNews)}
      >
        <Icons.Newspaper className={clsx("icon")} />
        {show && <span>Recruitment News</span>}
      </Link>
    </div>
  );
}
