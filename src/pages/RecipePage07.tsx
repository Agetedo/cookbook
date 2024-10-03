import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage07() {
  return (
    <>
      <Recipe title={"Grilled shrimp salad"} />
      <AdviceGallery description={"Grilled shrimp salad"} />
      <SubscribePortal />
    </>
  );
}