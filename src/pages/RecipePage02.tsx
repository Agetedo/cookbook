import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage02() {
  return (
    <>
      <Recipe title={"Chicken broth with vegetables"} />
      <AdviceGallery description={"Chicken broth with vegetables"} />
      <SubscribePortal />
    </>
  );
}