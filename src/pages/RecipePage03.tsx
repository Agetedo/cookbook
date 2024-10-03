import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage03() {
  return (
    <>
      <AdviceGallery description={"Poached eggs on rye buns"} />
      <Recipe title={"Poached eggs on rye buns"} />
      <SubscribePortal />
    </>
  );
}