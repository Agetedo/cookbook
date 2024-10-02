import Recipe from "../components/Recipe";
import SubscribePortal from "../components/SubscribePortal";
import AdviceGallery from "../components/AdviceGallery";

export default function RecipePage01() {
  return (
    <>
      <Recipe title={"Croutons with omelette"} />
      <SubscribePortal />
      <AdviceGallery description={"Croutons with omelette"}  />
    </>
  );
}