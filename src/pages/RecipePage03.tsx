import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage03() {
  return (
    <>
      <Recipe title={"Poached eggs on rye buns"} />
      <AdviceGallery description={"Poached eggs on rye buns"} />
      <SubscribePortal />
    </>
  );
}