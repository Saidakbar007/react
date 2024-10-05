import React from "react";
import { Header } from "../components/Header";
import { AppLeable } from "../components/AppLeable";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
         <Header headerText= "Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <AppLeable labelText= "Ваше имя"/>
            <AppLeable labelText= "Ваш номер"/>
           <AppButton buttonText="Далее"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
