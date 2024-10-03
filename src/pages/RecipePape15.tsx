import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage15() {
  return (
    <>
      <AdviceGallery description={"Granola and raspberries in yogurt"} />
      <Recipe title={"Granola and raspberries in yogurt"} />
      <SubscribePortal />
    </>
  );
}