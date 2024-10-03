import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage04() {
  return (
    <>
      <Recipe title={"Baked salmon with herbs"} />
      <AdviceGallery description={"Baked salmon with herbs"} />
      <SubscribePortal />
    </>
  );
}