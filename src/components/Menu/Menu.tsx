import React, { useState, useContext, useCallback, useMemo } from "react";
import { NavLink } from "react-router-dom";

import LanguageContext from "../../context/languageContext";

import "./Menu.scss";

const Menu: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  const [isMenuShown, setIsMenuShown] = useState(false);

  const navItems = useMemo(() => {
    return [
      { path: "/", title: languageContext.language === "ru" ? "Главная" : "Home" },
      { path: "/about", title: languageContext.language === "ru" ? "Обо мне" : "About me" },
      {
        path: "/work",
        title: languageContext.language === "ru" ? "Примеры кода" : "Code examples"
      },
      { path: "/contact", title: languageContext.language === "ru" ? "Контакты" : "Contact me" }
    ];
  }, [languageContext.language]);

  const openMenu = useCallback(() => {
    setIsMenuShown(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuShown(false);
  }, []);

  const toggleMenu = useCallback(() => {
    if (!isMenuShown) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [closeMenu, openMenu, isMenuShown]);

  const setRussianLanguage = useCallback(() => {
    localStorage.setItem("language", "ru");
    languageContext.setLanguage("ru");
  }, [languageContext]);

  const setEnglishLanguage = useCallback(() => {
    localStorage.setItem("language", "en");
    languageContext.setLanguage("en");
  }, [languageContext]);

  return (
    <header className="menu">
      <div className="menu__languages">
        <button
          className="menu__language-btn menu__language-btn_ru"
          title="Русский"
          onClick={setRussianLanguage}
        />
        <button
          className="menu__language-btn menu__language-btn_en"
          title="English"
          onClick={setEnglishLanguage}
        />
      </div>
      <div
        className={"menu__btn" + (isMenuShown ? " menu__btn_close" : "")}
        onClick={toggleMenu}
        title={languageContext.language === "ru" ? "Меню" : "Menu"}
      >
        <div className="menu__btn-line" />
        <div className="menu__btn-line" />
        <div className="menu__btn-line" />
      </div>

      <nav className={"menu__nav" + (isMenuShown ? " menu__nav_show" : "")}>
        <div className={"menu__branding" + (isMenuShown ? " menu__branding_show" : "")}>
          <div className="menu__portrait">
            <img
              className="menu__portrait-img"
              src={require("../../assets/img/portrait.jpg")}
              alt="portrait"
            />
          </div>
        </div>
        <ul className={"menu__list" + (isMenuShown ? " menu__list_show" : "")}>
          {navItems.map((item) => (
            <li
              className={"menu__nav-item" + (isMenuShown ? " menu__nav-item_show" : "")}
              key={item.title}
            >
              <NavLink
                to={item.path}
                exact
                className="menu__nav-link"
                activeClassName="menu__nav-link_active"
                onClick={closeMenu}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
