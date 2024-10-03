import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage18() {
  return (
    <>
      <AdviceGallery description={"Feta and olives salad"} />
      <Recipe title={"Feta and olives salad"} />
      <SubscribePortal />
    </>
  );
}