import Conteiner from "./Conteiner";
import { recipesCards } from "../dB/recipesCards";
import styles from "../styles/Recipe.module.scss";

export default function Recipe({ title }: { title: string }) {
  const recipesFiltered = recipesCards.filter( episode =>
    episode.title === title
  );

  const recipesList = recipesFiltered.map( recipe =>
    <section key={recipe.id} className={styles.recipe}>
      <h2 className={styles.title}>{recipe.title}</h2>
      
      <img src={recipe.imageSrc} alt={recipe.title} className={styles.image}/>
      
    </section>
  );
  
  return (
    <Conteiner className={styles.edisodeList}>
      {recipesList}
    </Conteiner>
  );
}