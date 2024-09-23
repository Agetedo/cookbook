import { recipesCards } from "../dB/recipesCards";
import styles from "../styles/Recipe.module.scss";

export default function Recipe({ title }: { title: string }) {
  const recipesFiltered = recipesCards.filter( episode =>
    episode.title === title
  );
  const recipesList = recipesFiltered.map( recipe =>
    <div key={recipe.id} className={styles.recipeCard}>
      <section className={styles.recipetTitle}>
        <h2 className={styles.title}>{recipe.title}</h2>
        <span className={styles.mealTime}>{recipe.mealTime}</span>
      </section>

      <div className={styles.ingredientsItems}>
        <img src={recipe.imageSrc} alt={recipe.title} className={styles.image}/>

        <div className={styles.recipeItems}>
          <ul className={styles.ingredients}>
            <li className={styles.ingredientsTitle}>
              {recipe.ingredients[0]} ({recipe.ingredients.length - 1}):
            </li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[1]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[2]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[3]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[4]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[5]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[6]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[7]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[8]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[9]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[10]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[11]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[12]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[13]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[14]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[15]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[16]}</li>
            <li className={styles.ingredientsUnit}>{recipe.ingredients[17]}</li>
          </ul>
          <p className={styles.recipeText}>{recipe.recipeText}</p>
        </div>
      </div>
      
    </div>
  );
  
  return (
    <RecipeWrapper className={styles.recipe}>
      {recipesList}
    </RecipeWrapper>
  );
}

interface WrapperProps {
  className: string;
  children?: React.ReactNode;
}
function RecipeWrapper({ children, className }: WrapperProps) {
  return (
    <div className={className}>
      <div className={styles.conteiner}>{children}</div>
    </div>
  );
}