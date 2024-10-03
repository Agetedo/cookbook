import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage06() {
  return (
    <>
      <AdviceGallery description={"Pasta with champignons"} />
      <Recipe title={"Pasta with champignons"} />
      <SubscribePortal />
    </>
  );
}