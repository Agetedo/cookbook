import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage26() {
  return (
    <>
      <AdviceGallery description={"Baked apples with cinnamon"} />
      <Recipe title={"Baked apples with cinnamon"} />
      <SubscribePortal />
    </>
  );
}