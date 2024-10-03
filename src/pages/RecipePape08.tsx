import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage08() {
  return (
    <>
      <AdviceGallery description={"Meatloaf with prunes"} />
      <Recipe title={"Meatloaf with prunes"} />
      <SubscribePortal />
    </>
  );
}