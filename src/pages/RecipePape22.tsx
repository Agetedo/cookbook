import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage22() {
  return (
    <>
      <AdviceGallery description={"Cod with vegetables"} />
      <Recipe title={"Cod with vegetables"} />
      <SubscribePortal />
    </>
  );
}