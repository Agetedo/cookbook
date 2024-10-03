import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage13() {
  return (
    <>
      <AdviceGallery description={"Cheese casserole"} />
      <Recipe title={"Cheese casserole"} />
      <SubscribePortal />
    </>
  );
}