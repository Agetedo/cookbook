import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage13() {
  return (
    <>
      <Recipe title={"Cheese casserole"} />
      <AdviceGallery description={"Cheese casserole"} />
      <SubscribePortal />
    </>
  );
}