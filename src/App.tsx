import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";

import LanguageContext from "./context/languageContext";

import "./App.scss";

const App: React.FC = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ? localStorage.getItem("language")! : "en"
  );

  return (
    <LanguageContext.Provider value={{ language: language, setLanguage: setLanguage }}>
      <BrowserRouter>
        <main className="app">
          <Menu />
          <div className="app__inner">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/work" component={Work} />
              <Route exact path="/contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
};

export default App;
