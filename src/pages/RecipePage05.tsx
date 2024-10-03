import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage05() {
  return (
    <>
      <AdviceGallery description={"Pancakes with honey and blackberries"} />
      <Recipe title={"Pancakes with honey and blackberries"} />
      <SubscribePortal />
    </>
  );
}