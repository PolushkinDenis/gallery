import React from "react";
import Header from "../header/Header";
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div>
      <Header />
      <main className="main-about">
        <h1>Обо мне</h1>
        <div>
          Привет!!! Меня зовут Денис
        </div>
        <div>
          Хочу стать frontend разработчиком. Сейчас активно изучаю React и всязные с ним вещи.
        </div>
        <div>
          Некоторые мои проекты можно найти на github: https://github.com/PolushkinDenis
        </div>
      </main>
    </div>
  );
}

export default AboutMe;

