import React, { useContext, useMemo } from "react";

import LanguageContext from "../../context/languageContext";

import "./Home.scss";

const Home: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  const socialLinks = useMemo(() => {
    return [
      { href: "https://github.com/ZefirTheFear", innerDivClassName: "home__icon-gitnub" },
      {
        href: "https://www.linkedin.com/in/alexey-klimenko-a0019b192/",
        innerDivClassName: "home__icon-linkedin"
      }
    ];
  }, []);

  return (
    <div className="home">
      <h1 className="home__lg-heading">
        {languageContext.language === "ru" ? "Алексей " : "Alexey "}
        <span className="home__text-secondary">
          {languageContext.language === "ru" ? "Клименко" : "Klimenko"}
        </span>
      </h1>
      <h2 className="home__sm-heading">
        {languageContext.language === "ru" ? "Веб Разработчик" : "Web Developer"}
      </h2>
      <div className="home__icons">
        {socialLinks.map((link) => (
          <a
            href={link.href}
            key={link.href}
            className="home__icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={link.innerDivClassName} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
