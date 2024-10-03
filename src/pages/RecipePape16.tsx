import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage16() {
  return (
    <>
      <Recipe title={"Grilled beef steaks"} />
      <AdviceGallery description={"Grilled beef steaks"} />
      <SubscribePortal />
    </>
  );
}