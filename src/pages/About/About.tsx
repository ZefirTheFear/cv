import React, { useEffect, useContext, useMemo } from "react";

import LanguageContext from "../../context/languageContext";

import htmlLogo from "../../assets/img/svg_logos/HTML5_logo.svg";
import cssLogo from "../../assets/img/svg_logos/CSS3_logo.svg";
import sassLogo from "../../assets/img/svg_logos/Sass_logo.svg";
import bootstrapLogo from "../../assets/img/svg_logos/Bootstrap_logo.svg";
import jsLogo from "../../assets/img/svg_logos/JavaScript_logo.svg";
import reactLogo from "../../assets/img/svg_logos/React_logo.svg";
import reduxLogo from "../../assets/img/svg_logos/Redux_logo.svg";
import typeScript from "../../assets/img/svg_logos/TS_logo.svg";
import nodejsLogo from "../../assets/img/svg_logos/Node.js_logo.svg";
import mongoLogo from "../../assets/img/svg_logos/Mongodb_logo.svg";
import mongooseLogo from "../../assets/img/svg_logos/Mongoose_logo.svg";
import gitLogo from "../../assets/img/svg_logos/Git_logo.svg";

import "./About.scss";

const About: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  const logos = useMemo(() => {
    return [
      { src: htmlLogo, alt: "html" },
      { src: cssLogo, alt: "css" },
      { src: sassLogo, alt: "sass" },
      { src: bootstrapLogo, alt: "bootstrap" },
      { src: jsLogo, alt: "js" },
      { src: reactLogo, alt: "react" },
      { src: reduxLogo, alt: "redux" },
      { src: typeScript, alt: "ts" },
      { src: nodejsLogo, alt: "nodejs" },
      { src: mongoLogo, alt: "mongo" },
      { src: mongooseLogo, alt: "mongoose" },
      { src: gitLogo, alt: "git" }
    ];
  }, []);

  const skillsList = useMemo(() => {
    return [
      "HTML",
      "CSS",
      "Sass",
      "Bootstap 4",
      "JS",
      "React JS",
      "Redux",
      "TypeScript",
      "Node JS (Express)",
      "Mongo DB (Mongoose)",
      "Git",
      "English (intermediate)"
    ];
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <h1 className="about__lg-heading">
        {languageContext.language === "ru" ? "Обо " : "About "}
        <span className="about__text-secondary">
          {languageContext.language === "ru" ? "Мне" : "Me"}
        </span>
      </h1>
      <h2 className="about__sm-heading">
        {languageContext.language === "ru" ? "и о моих навыках" : "and my skills"}
      </h2>
      <div className="about__info">
        <img className="about__img" src={require("../../assets/img/portrait.jpg")} alt="portrait" />
        <div className="about__bio">
          <h3 className="about__text-secondary">
            {languageContext.language === "ru" ? "Алексей Клименко" : "Alexey Klimenko"}
          </h3>
          <div className="about__about-me">
            <p>
              {languageContext.language === "ru"
                ? "Веб-разработчик, который сосредоточен на чистом, понятном и масштабируемом коде."
                : "A web developer who focused on clean, understandable and scalable code."}
            </p>
            <p>
              {languageContext.language === "ru"
                ? "Люблю обучаться, узнавать и практиковать новые технологии."
                : "I like to learn, find out and practice new technologies."}
            </p>
            <p>
              {languageContext.language === "ru"
                ? "Цель - создавать интересные проекты и получать профессиональный рост."
                : "My goal is to create interesting projects and gain professional growth."}
            </p>
          </div>
        </div>
        <div className="about__education">
          <h3 className="about__subtitle">
            {languageContext.language === "ru" ? "Образование" : "Education"}
          </h3>
          <div className="about__skills-description">
            <pre>
              {languageContext.language === "ru"
                ? `- 2004-2010: Национальный технический университет Украины 'Киевский Политехнический Институт' (Институт энергосохранения и энергоменеджмента)
- Десятки онлайн курсов. В основном, на Udemy.`
                : `- 2004-2010: National Technical University of Ukraine 'Igor Sikorsky Kyiv Polytechnic Institute' (Institute of Energy Saving and Energy Management)
- Dozens of online courses. On Udemy, mostly`}
            </pre>
          </div>
        </div>
        <div className="about__experience">
          <h3 className="about__subtitle">
            {languageContext.language === "ru" ? "Опыт" : "Experience"}
          </h3>
          <div className="about__experience-description">
            <pre>
              {languageContext.language === "ru"
                ? `Создание проектов с использованием React, Node.js, MongoDB. Ссылки на демо и github-репозиторий можно посмотреть в разделе 'примеры кода'.`
                : `Creating projects using React, Node.js, MongoDB. Links to demos and github repository you could see in section 'code examples'.`}
            </pre>
          </div>
        </div>
        <div className="about__skills">
          <h3 className="about__subtitle">
            {languageContext.language === "ru" ? "Навыки" : "Skills"}
          </h3>
          <div className="about__skills-description">
            <div className="about__logos">
              {logos.map((logo) => (
                <img className="about__logo" src={logo.src} alt={logo.alt} key={logo.src} />
              ))}
            </div>
            <ul className="about__skill-list">
              {skillsList.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
