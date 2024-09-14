import { useState } from "react";
import { potatoCards } from "../dB/potatoCards";///////////////////////////////////
import { recipesCards } from "../dB/recipesCards";//////////////////////////////////////
import plusIcon from "/plus-selected-icon.png";
import minusIcon from "/minus-selected-icon.png";
import styles from "../styles/Selected.module.scss";///////////

export default function IngredientButton({ title }: { title: string }) {
  const [selectedIngredient, setSelectedIngredient] = useState(false);

  function handleSelect() {
    setSelectedIngredient(!selectedIngredient);
  }
  
  return (
    <>
      <div className={styles.ingredient__button} >
        <button type="button" className={styles.button} 
          onClick={handleSelect}>
          {selectedIngredient ? <Minus /> : <Plus />}{title}
        </button>    
      </div>
      {selectedIngredient && <List />}
    </>
  )
}
/*const List = (recipesCards, designation) => {
  return recipesCards.filter(
    (card: { designation: string; }) => 
      card.designation === "Potato" || card.designation === designation
  )
}*/



function Plus() {
  return (
    <>
      <img src={plusIcon} alt="#" />
    </>
  )
}
function Minus() {
  return (
    <>
      <img src={minusIcon} alt="#" />
    </>
  )
}