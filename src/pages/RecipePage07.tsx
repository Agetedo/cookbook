import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage07() {
  return (
    <>
      <AdviceGallery description={"Grilled shrimp salad"} />
      <Recipe title={"Grilled shrimp salad"} />
      <SubscribePortal />
    </>
  );
}