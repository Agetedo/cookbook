import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage24() {
  return (
    <>
      <AdviceGallery description={"Curd cookies"} />
      <Recipe title={"Curd cookies"} />
      <SubscribePortal />
    </>
  );
}