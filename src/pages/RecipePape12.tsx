import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage12() {
  return (
    <>
      <AdviceGallery description={"Egg on toast"} />
      <Recipe title={"Egg on toast"} />
      <SubscribePortal />
    </>
  );
}