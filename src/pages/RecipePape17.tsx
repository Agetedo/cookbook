import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage17() {
  return (
    <>
      <AdviceGallery description={"Pancakes with cottage cheese"} />
      <Recipe title={"Pancakes with cottage cheese"} />
      <SubscribePortal />
    </>
  );
}