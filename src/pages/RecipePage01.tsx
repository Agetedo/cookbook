import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage01() {
  return (
    <>
      <Recipe title={"Croutons with omelette"} />
      <AdviceGallery description={"Croutons with omelette"}  />
      <SubscribePortal />
    </>
  );
}