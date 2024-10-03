import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage10() {
  return (
    <>
      <AdviceGallery description={"Chocolate custard cream"} />
      <Recipe title={"Chocolate custard cream"} />
      <SubscribePortal />
    </>
  );
}