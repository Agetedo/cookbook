import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage25() {
  return (
    <>
      <AdviceGallery description={"Meatballs in tomato sauce"} />
      <Recipe title={"Meatballs in tomato sauce"} />
      <SubscribePortal />
    </>
  );
}