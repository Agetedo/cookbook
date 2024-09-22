import Conteiner from "./Conteiner";
import { recipesCards } from "../dB/recipesCards";
import styles from "../styles/Recipe.module.scss";

export default function Recipe({ title }: { title: string }) {
  const recipesFiltered = recipesCards.filter( episode =>
    episode.title === title
  );

  const recipesList = recipesFiltered.map( recipe =>
    <div key={recipe.id} className={styles.recipe}>
      <section className={styles.recipetTitle}>
        <h2 className={styles.title}>{recipe.title}</h2>
        <span className={styles.mealTime}>{recipe.mealTime}</span>
      </section>

      <div className={styles.ingredientsItems}>
        <img src={recipe.imageSrc} alt={recipe.title} className={styles.image}/>
        <ul className={styles.ingredients}>
          <li className={styles.ingredientsTitle}>
            {recipe.ingredients[0]} ({recipe.ingredients.length - 1}):
          </li>
          <li>{recipe.ingredients[1]}</li>
          <li>{recipe.ingredients[2]}</li>
          <li>{recipe.ingredients[3]}</li>
          <li>{recipe.ingredients[4]}</li>
          <li>{recipe.ingredients[5]}</li>
          <li>{recipe.ingredients[6]}</li>
          <li>{recipe.ingredients[7]}</li>
          <li>{recipe.ingredients[8]}</li>
          <li>{recipe.ingredients[9]}</li>
          <li>{recipe.ingredients[10]}</li>
        </ul>
      </div>
      <p>{recipe.recipeText}</p>
    </div>
  );
  
  return (
    <Conteiner className={styles.edisodeList}>
      {recipesList}
    </Conteiner>
  );
}