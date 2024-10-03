import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage20() {
  return (
    <>
      <AdviceGallery description={"Cheese pie with bacon"} />
      <Recipe title={"Cheese pie with bacon"} />
      <SubscribePortal />
    </>
  );
}