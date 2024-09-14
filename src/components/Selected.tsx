//import { useState } from "react";
import Conteiner from "../components/Conteiner";
import { ingredients } from "../dB/ingredients";
import { recipesCards } from "../dB/recipesCards";
import IngredientButton from "./IngredientButton";
import styles from "../styles/Selected.module.scss";
const tryText = <>{"Easy and simple! Select ingredients and get recipes for preparing dishes from them. Try it!"}</>;

export default function Selected() {
  return (
    <Conteiner className={"ingredients"}>
      <SelectedTitle 
        title="Anybody can cook!"
        text={tryText} 
      />
      {/*<div className={styles.items}>
        
        <div className={styles.ingredients__buttons}>
          {ingredients.map((good) => {
            const isSelected = selectedProducts.includes(good)

            return (
              <div className={styles.ingredient__button} key={good}>
                <button id={good} type="button" className={styles.button}
                  onClick={() => handleSelectGood(good)}>{isSelected ? <Minus /> : <Plus />}
                </button>
                <span>{good}</span>
              </div>
            )
          })}
        </div>

        <div className={styles.ingredients__selected}>
          {selectedProducts.length < 1 ? <h2 id={styles.notSelected}>You haven't chosen anything</h2>
            : (<h2 id={styles.isSelected}>
              <SelectedMark mark="IS SELECTED" />
              {selectedProducts.join(", ")}
              <button onClick={handleClearAll} type="button" id={styles.deleteButton}>
                Delete All
              </button>
            </h2>)
          }
        </div>
      </div>*/}

      <div className={styles.ingredients__buttons}>
        {ingredients.map((unit) => {
          return (
            <IngredientButton key={unit.id} title={unit.title} />
          )
        })}
      </div>
      {/*selectedProducts && <RecipesList />*/}
    </Conteiner>
  )
}


function RecipesList() {
  const recipesSelectedList = recipesCards.map(card => 
    <div key={card.id} className="card">
      <p>{card.recipe}</p>
    </div>
  );
  return(
    <div className="list">{recipesSelectedList}</div>
  );
}



function SelectedTitle({ title, text }: { title: string, text: string | typeof tryText }) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
    </>
  )
}

function SelectedMark({ mark }: { mark: string }) {
  return (
    <p className={styles.mark}>{mark}</p>
  )
}