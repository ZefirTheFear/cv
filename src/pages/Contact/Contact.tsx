import React, { useContext, useMemo } from "react";

import LanguageContext from "../../context/languageContext";

import "./Contact.scss";

const Contact: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  const contactsList = useMemo(() => {
    return [
      {
        title: languageContext.language === "ru" ? "Почта: " : "Email: ",
        content: "alexeyklimenkojs@gmail.com"
      },
      {
        title: languageContext.language === "ru" ? "Телефон: " : "Phone: ",
        content: "+380994635199"
      }
    ];
  }, [languageContext.language]);

  return (
    <div className="contact">
      <h1 className="contact__lg-heading">
        {languageContext.language === "ru" ? "Мои" : "Contact"}{" "}
        <span className="contact__text-secondary">
          {languageContext.language === "ru" ? "Контакты" : "Me"}
        </span>
      </h1>
      <h2 className="contact__sm-heading">
        {languageContext.language === "ru"
          ? "Вы можете со мной связаться..."
          : "This is how you can reach me..."}
      </h2>
      <div className="contact__contacts">
        {contactsList.map((contact) => (
          <div className="contact__contact" key={contact.title}>
            <span className="contact__text-secondary">{contact.title}</span>
            {contact.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
