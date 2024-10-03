import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage21() {
  return (
    <>
      <AdviceGallery description={"Lemon cream jelly"} />
      <Recipe title={"Lemon cream jelly"} />
      <SubscribePortal />
    </>
  );
}