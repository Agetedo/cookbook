import { useState } from "react";
import { Link } from "react-router-dom";
import Conteiner from "../components/Conteiner";
import { recipesCards } from "../dB/recipesCards";
import "../styles/Selected.scss";
const tryText = "Easy and simple! Choose time for yourself and get recipes for cooking. Try it!";

export default function Selected() {
  const [cards, setCards] = useState("");
  const filteredCards = cards === "" ? recipesCards :
    recipesCards.filter(recipe => recipe.mealTime.includes(cards));
  const recipeCardsList = filteredCards.map((card) => 
    <section className={"recipe-card"} key={card.id}>
      <Link to={card.linkTo} className={"recipe-card__link"}>
        <h4 className={"recipe-card__time"}>{card.mealTime}</h4>
        <p className={"recipe-card__hovered"}>{card.hoveredText}</p>
        <img src={card.imageSrc} alt={card.title} className={"recipe-card__image"}/>
        <h3 className={"recipe-card__title"}>{card.title}</h3>
      </Link>  
    </section>
  )

  return (
    <Conteiner className={"selected"}>
      <SelectedTitle 
        title="Anybody can cook!"
        text={tryText} 
      />
      <ButtonsWrapper className={"buttons__wrapper"}>
        <ButtonFilter
          onClick={() => setCards("")}
          buttonText={"All"}
          className={cards === "" ? "filter__active" : "button__filter"}
        />
        <ButtonFilter
          onClick={() => setCards("Breakfast")}
          buttonText={"Breakfast"}
          className={cards === "Breakfast" ? "filter__active" : "button__filter"}
        />
        <ButtonFilter
          onClick={() => setCards("Brunch")}
          buttonText={"Brunch"}
          className={cards === "Brunch" ? "filter__active" : "button__filter"}
        />
        <ButtonFilter
          onClick={() => setCards("Lunch")}
          buttonText={"Lunch"}
          className={cards === "Lunch" ? "filter__active" : "button__filter"}
        />
        <ButtonFilter
          onClick={() => setCards("Dinner")}
          buttonText={"Dinner"}
          className={cards === "Dinner" ? "filter__active" : "button__filter"}
        />
      </ButtonsWrapper>

      <CardsWrapper className={"cards__items"}>
        {recipeCardsList}
      </CardsWrapper>
    </Conteiner>
  )
}

function SelectedTitle({ title, text }: { title: string, text: string }) {
  return (
    <>
      <h1 className="selected__title">{title}</h1>
      <p className="selected__text">{text}</p>
    </>
  )
}

interface ButtonProps {
  className: string;
  onClick: () => void;
  buttonText: string;
}
function ButtonFilter ({ className, onClick, buttonText }: ButtonProps) {
  return(
    <button onClick={onClick} className={className}>
      {buttonText}
    </button>
  );
}

interface WrapperProps {
  className: string;
  children?: React.ReactNode;
}
function ButtonsWrapper ({ className, children }: WrapperProps) {
  return(
    <div className={className}>{children}</div>
  );
}
function CardsWrapper ({ className, children }: WrapperProps) {
  return(
    <div className={className}>{children}</div>
  );
}