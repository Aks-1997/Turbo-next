"use client";

import * as React from "react";
import useTranslation from "../../hooks/useTranslation";
import "./styles.css";
import ToogleSwitch from "../ToogleSwitch";

const logo =
  "https://cdn.pixabay.com/photo/2016/11/13/19/43/logo-1821863_640.png";
const languages = ["en", "fr"];

export const HeaderMain = ({ text }: { text: string }) => {
  const { locale, setLocale } = useTranslation();
  const logoImg = {
    height: "50px",
    width: "50px",
  };

  const handleLanguageChange = (event: React.ReactNode) => {
    const selectLang = event?.target?.checked ? "fr" : "en";
    setLocale(selectLang);
  };

  return (
    <nav className="component-top-header">
      <div className="w-full flex">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Products</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
      </div>
      <div className="select-container">
        <ToogleSwitch onClick={handleLanguageChange} />
      </div>
    </nav>
  );
};
