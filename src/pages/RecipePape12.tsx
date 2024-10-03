import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage12() {
  return (
    <>
      <Recipe title={"Egg on toast"} />
      <AdviceGallery description={"Egg on toast"} />
      <SubscribePortal />
    </>
  );
}