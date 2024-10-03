import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage09() {
  return (
    <>
      <AdviceGallery description={"Strawberries and arugula salad"} />
      <Recipe title={"Strawberries and arugula salad"} />
      <SubscribePortal />
    </>
  );
}