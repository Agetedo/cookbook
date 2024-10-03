import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage08() {
  return (
    <>
      <Recipe title={"Meatloaf with prunes"} />
      <AdviceGallery description={"Meatloaf with prunes"} />
      <SubscribePortal />
    </>
  );
}