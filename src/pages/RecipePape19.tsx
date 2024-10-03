import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage19() {
  return (
    <>
      <AdviceGallery description={"Creamy fish soup"} />
      <Recipe title={"Creamy fish soup"} />
      <SubscribePortal />
    </>
  );
}