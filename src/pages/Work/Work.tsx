import React, { useEffect, useContext, useMemo } from "react";

import LanguageContext from "../../context/languageContext";

import socialNewsImg from "../../assets/img/projects/social-news.png";
import cryptoExchangeImg from "../../assets/img/projects/crypto-exchange.jpg";
import shopImg from "../../assets/img/projects/shop.jpg";
import cvImg from "../../assets/img/projects/portfolio.jpg";

import "./Work.scss";

const Work: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  const projects = useMemo(() => {
    return [
      {
        titleEn: "Social news",
        titleRu: "Социальные новости",
        img: socialNewsImg,
        demo: "https://social-news-ztf.herokuapp.com/",
        github: "https://github.com/ZefirTheFear/-social-news",
        descriptionRu: `Сайт социально-общественных новостей. Проект написан с использованием React, Node.js(Express) и MongoDB(Mongoose). Около 10000 строк кода. Короткий перечень функционала:
  - регистрация/авторизация пользователей с использованием JWT
  - создание постов/комментов с использованием rich text editor
  - возможность лайкать/дислайкать посты/комменты
  - возможность игнора/подписки на пользователей, создания заметок о них
  - реализован поиск постов по тегам
  - возможность для админа или модера редактировать/удалять посты/комменты
  - фронтенд и бэкенд валидация данных`,
        descriptionEn: `Social news site. Project is written using React, Node.js(Express) and MongoDB(Mongoose). Approximately 10 000 lines of code. Short list of functional:
  - registration/authorization of users with JWT
  - creation of posts/comments using rich text editor
  - possibility to like/dislike post/comment
  - possibility to subscribe/ignore user and to create note about user
  - implemented search for posts by tags
  - possibility for admin and moderator to edit or to delete posts/comments
  - frontend and backend data validation`
      },
      {
        titleEn: "Сryptocurrency exchange",
        titleRu: "Обмен криптовалюты",
        img: cryptoExchangeImg,
        demo: "https://cryptotrade.com.ua/",
        github: "https://github.com/ZefirTheFear/crypto-exchange",
        descriptionRu: `Онлайн-калькулятор обмена криптовалюты. Перечень функционала:
  -извлечение данных котировок биржы, а также текущих курсов и комиссионных процентов компании
  -калькулятор для двухсторонней конвертации
  -форма с подключенным телеграм-ботом`,
        descriptionEn: `Cryptocurrency exchange online calculator. List of functional:
  -fetching data of exchange quotes as well as current rates and commission fees of the company
  -calculator for two-way conversion
  -form with connected telegram-bot`
      },
      {
        titleEn: "Shop",
        titleRu: "Магазин",
        img: shopImg,
        demo: "https://shop-react-landing.web.app/",
        github: "https://github.com/ZefirTheFear/shop",
        descriptionRu:
          "Простенький фронт для интернет-магазина. Используется react/redux/typescript/local storage",
        descriptionEn: "Simple front for online shop. Using react/redux/typescript/local storage"
      },
      {
        titleEn: "CV-site",
        titleRu: "Сайт-резюме",
        img: cvImg,
        demo: "https://alexey-klimenko.web.app",
        github: "https://github.com/ZefirTheFear/portfolio",
        descriptionRu: "Сайт-резюме. Написан на React.",
        descriptionEn: "СV-Site. Written using React."
      }
    ];
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="work">
      <h1 className="work__lg-heading">
        {languageContext.language === "ru" ? "Примеры " : "Code "}
        <span className="work__text-secondary">
          {languageContext.language === "ru" ? "Кода" : "Examples"}
        </span>
      </h1>
      <h2 className="work__sm-heading">
        {languageContext.language === "ru"
          ? "Посмотрите мои некоторые проекты..."
          : "Check out some of my projects..."}
      </h2>
      <div className="work__projects">
        {projects.map((project) => {
          return (
            <div className="work__project" key={project.titleEn}>
              <div className="work__project-title">
                {languageContext.language === "ru" ? project.titleRu : project.titleEn}
              </div>
              <img className="work__project-img" src={project.img} alt="project-img" />
              <a
                href={project.demo}
                className="work__project-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {languageContext.language === "ru" ? "Демо" : "Demo"}
              </a>
              <a
                href={project.github}
                className="work__project-github-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
              <div className="work__project-description">
                <pre>
                  {languageContext.language === "ru"
                    ? project.descriptionRu
                    : project.descriptionEn}
                </pre>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
