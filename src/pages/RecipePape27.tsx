import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage27() {
  return (
    <>
      <AdviceGallery description={"Eggplant with cheese"} />
      <Recipe title={"Eggplant with cheese"} />
      <SubscribePortal />
    </>
  );
}